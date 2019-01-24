// @flow
import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import 'regenerator-runtime/runtime'

import {
  RelayNetworkLayer,
  urlMiddleware,
  batchMiddleware,
  loggerMiddleware,
  errorMiddleware,
  perfMiddleware,
  retryMiddleware,
  authMiddleware,
  cacheMiddleware,
  progressMiddleware,
} from 'react-relay-network-modern'

const AUTH_TOKEN_KEY = 'AUTH_TOKEN'
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT
  ? process.env.REACT_APP_API_ENDPOINT
  : 'https://api.collegeofrhubarb.org/graphql'
  // : 'https://api.collegeofrhubarb.org/graphql'
//const token = localStorage.getItem("AUTH_TOKEN")

const __DEV__ = true

//const network = Network.create(fetchQuery)
function getToken(): string {
  const maybeToken: ?string = localStorage.getItem(AUTH_TOKEN_KEY)
  if (maybeToken != null) return maybeToken
  else return '' // authMiddleware doesn't know what to do with null
}

const network = new RelayNetworkLayer(
  [
    //cacheMiddleware({
    //  size: 100, // max 100 requests
    //  ttl: 900000, // 15 minutes
    //}),
    urlMiddleware({
      url: req => Promise.resolve(API_ENDPOINT),
    }),
    // batchMiddleware({
    //   batchUrl: requestMap => Promise.resolve(API_ENDPOINT),
    //   batchTimeout: 10
    // }),
    __DEV__ ? loggerMiddleware() : null,
    __DEV__ ? errorMiddleware() : null,
    __DEV__ ? perfMiddleware() : null,
    retryMiddleware({
      fetchTimeout: 15000,
      retryDelays: attempt => Math.pow(2, attempt + 4) * 100, // or simple array [3200, 6400, 12800, 25600, 51200, 102400, 204800, 409600],
      beforeRetry: ({ forceRetry, abort, delay, attempt, lastError, req }) => {
        if (attempt > 10) abort()
        window.forceRelayRetry = forceRetry
        console.log(
          'call `forceRelayRetry()` for immediately retry! Or wait ' +
            delay +
            ' ms.'
        )
      },
      statusCodes: [500, 503, 504],
    }),
    authMiddleware({
      allowEmptyToken: true,
      token: () => getToken(),
      tokenRefreshPromise: req => {
        console.log('trying to get new token')
        return 'bearertokentest'
      },
    }),
    progressMiddleware({
      onProgress: (current: any, total: any) => {
        console.log('Downloaded: ' + current + ' B, total: ' + total + ' B')
      },
    }),
    next => req => {
      return next(req).then(res => {
        console.log('middleware', res)
        return res
      })
    },
  ]
  // opts
) // as second arg you may pass advanced options for RRNL

const source = new RecordSource()
const store = new Store(source)
const environment = new Environment({ network, store })

export default environment
