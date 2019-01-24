import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserProtocol, queryMiddleware } from 'farce'
import { createFarceRouter, createRender, Route } from 'found'
import { Resolver } from 'found-relay'

import registerServiceWorker from './registerServiceWorker'

import Login from './Login'
import environment from './Environment'
import routes from './routes'

const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: routes,
  render: createRender({}),
})

const mountNode = document.createElement('div')
document.body.appendChild(mountNode)

ReactDOM.render(<Router resolver={new Resolver(environment)} />, mountNode)
registerServiceWorker()
