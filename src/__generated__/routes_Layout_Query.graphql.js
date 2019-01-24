/**
 * @flow
 * @relayHash 23e74de8fcd28cbe090358ede9645f88
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout_viewer$ref = any;
export type routes_Layout_QueryVariables = {||};
export type routes_Layout_QueryResponse = {|
  +viewer: ?{|
    +user: ?{|
      +id: string
    |},
    +$fragmentRefs: Layout_viewer$ref,
  |}
|};
export type routes_Layout_Query = {|
  variables: routes_Layout_QueryVariables,
  response: routes_Layout_QueryResponse,
|};
*/

/*
query routes_Layout_Query {
  viewer {
    user {
      id
    }
    ...Layout_viewer
    id
  }
}

fragment Layout_viewer on Viewer {
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
    name: 'routes_Layout_Query',
    id: null,
    text:
      'query routes_Layout_Query {\n  viewer {\n    user {\n      id\n    }\n    ...Layout_viewer\n    id\n  }\n}\n\nfragment Layout_viewer on Viewer {\n  id\n  user {\n    id\n    firstName\n    lastName\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'routes_Layout_Query',
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
              name: 'Layout_viewer',
              args: null,
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'routes_Layout_Query',
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
;(node/*: any*/).hash = 'f4e7fc86aaabcad0d1ff1841cd127627';
module.exports = node
