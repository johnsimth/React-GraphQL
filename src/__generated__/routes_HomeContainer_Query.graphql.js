/**
 * @flow
 * @relayHash f0a0207aa459dc1085cc0ffecce5d42c
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HomePage_viewer$ref = any;
export type routes_HomeContainer_QueryVariables = {||};
export type routes_HomeContainer_QueryResponse = {|
  +viewer: ?{|
    +user: ?{|
      +id: string
    |},
    +$fragmentRefs: HomePage_viewer$ref,
  |}
|};
export type routes_HomeContainer_Query = {|
  variables: routes_HomeContainer_QueryVariables,
  response: routes_HomeContainer_QueryResponse,
|};
*/

/*
query routes_HomeContainer_Query {
  viewer {
    user {
      id
    }
    ...HomePage_viewer
    id
  }
}

fragment HomePage_viewer on Viewer {
  id
  user {
    id
    firstName
    lastName
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = {
    kind: 'ScalarField',
    alias: null,
    name: 'id',
    args: null,
    storageKey: null,
  }
  return {
    kind: 'Request',
    operationKind: 'query',
    name: 'routes_HomeContainer_Query',
    id: null,
    text:
      'query routes_HomeContainer_Query {\n  viewer {\n    user {\n      id\n    }\n    ...HomePage_viewer\n    id\n  }\n}\n\nfragment HomePage_viewer on Viewer {\n  id\n  user {\n    id\n    firstName\n    lastName\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'routes_HomeContainer_Query',
      type: 'Query',
      metadata: null,
      argumentDefinitions: [],
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'viewer',
          storageKey: null,
          args: null,
          concreteType: 'Viewer',
          plural: false,
          selections: [
            {
              kind: 'LinkedField',
              alias: null,
              name: 'user',
              storageKey: null,
              args: null,
              concreteType: 'User',
              plural: false,
              selections: [v0],
            },
            {
              kind: 'FragmentSpread',
              name: 'HomePage_viewer',
              args: null,
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'routes_HomeContainer_Query',
      argumentDefinitions: [],
      selections: [
        {
          kind: 'LinkedField',
          alias: null,
          name: 'viewer',
          storageKey: null,
          args: null,
          concreteType: 'Viewer',
          plural: false,
          selections: [
            {
              kind: 'LinkedField',
              alias: null,
              name: 'user',
              storageKey: null,
              args: null,
              concreteType: 'User',
              plural: false,
              selections: [
                v0,
                {
                  kind: 'ScalarField',
                  alias: null,
                  name: 'firstName',
                  args: null,
                  storageKey: null,
                },
                {
                  kind: 'ScalarField',
                  alias: null,
                  name: 'lastName',
                  args: null,
                  storageKey: null,
                },
              ],
            },
            v0,
          ],
        },
      ],
    },
  }
})()
// prettier-ignore
;(node/*: any*/).hash = '25174f3613d2969bd7cdfd4ceccde5b0';
module.exports = node
