/**
 * @flow
 * @relayHash 5e1fa1c5eda8e565b0729708d287cee4
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Registration_viewer$ref = any;
export type routes_RegistrationContainer_QueryVariables = {||};
export type routes_RegistrationContainer_QueryResponse = {|
  +viewer: ?{|
    +user: ?{|
      +id: string
    |},
    +$fragmentRefs: Registration_viewer$ref,
  |}
|};
export type routes_RegistrationContainer_Query = {|
  variables: routes_RegistrationContainer_QueryVariables,
  response: routes_RegistrationContainer_QueryResponse,
|};
*/

/*
query routes_RegistrationContainer_Query {
  viewer {
    user {
      id
    }
    ...Registration_viewer
    id
  }
}

fragment Registration_viewer on Viewer {
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
    name: 'routes_RegistrationContainer_Query',
    id: null,
    text:
      'query routes_RegistrationContainer_Query {\n  viewer {\n    user {\n      id\n    }\n    ...Registration_viewer\n    id\n  }\n}\n\nfragment Registration_viewer on Viewer {\n  id\n  user {\n    id\n    firstName\n    lastName\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'routes_RegistrationContainer_Query',
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
              name: 'Registration_viewer',
              args: null,
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'routes_RegistrationContainer_Query',
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
;(node/*: any*/).hash = '9a9940e6f25f6cf7bea337225bf6b0ff';
module.exports = node
