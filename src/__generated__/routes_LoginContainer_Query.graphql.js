/**
 * @flow
 * @relayHash f5b62ee780a2138a7955d240db21073c
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Login_viewer$ref = any;
export type routes_LoginContainer_QueryVariables = {||};
export type routes_LoginContainer_QueryResponse = {|
  +viewer: ?{|
    +user: ?{|
      +id: string
    |},
    +$fragmentRefs: Login_viewer$ref,
  |}
|};
export type routes_LoginContainer_Query = {|
  variables: routes_LoginContainer_QueryVariables,
  response: routes_LoginContainer_QueryResponse,
|};
*/

/*
query routes_LoginContainer_Query {
  viewer {
    user {
      id
    }
    ...Login_viewer
    id
  }
}

fragment Login_viewer on Viewer {
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
    name: 'routes_LoginContainer_Query',
    id: null,
    text:
      'query routes_LoginContainer_Query {\n  viewer {\n    user {\n      id\n    }\n    ...Login_viewer\n    id\n  }\n}\n\nfragment Login_viewer on Viewer {\n  id\n  user {\n    id\n    firstName\n    lastName\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'routes_LoginContainer_Query',
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
              name: 'Login_viewer',
              args: null,
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'routes_LoginContainer_Query',
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
;(node/*: any*/).hash = '405db65e950651cc16bd757bfd962653';
module.exports = node
