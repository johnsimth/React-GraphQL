/**
 * @flow
 * @relayHash f6eb1770bcb366be50187943ee406f7f
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TrialExam_viewer$ref = any;
export type routes_TrialExam_QueryVariables = {||};
export type routes_TrialExam_QueryResponse = {|
  +viewer: ?{|
    +user: ?{|
      +id: string
    |},
    +$fragmentRefs: TrialExam_viewer$ref,
  |}
|};
export type routes_TrialExam_Query = {|
  variables: routes_TrialExam_QueryVariables,
  response: routes_TrialExam_QueryResponse,
|};
*/

/*
query routes_TrialExam_Query {
  viewer {
    user {
      id
    }
    ...TrialExam_viewer
    id
  }
}

fragment TrialExam_viewer on Viewer {
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
    name: 'routes_TrialExam_Query',
    id: null,
    text:
      'query routes_TrialExam_Query {\n  viewer {\n    user {\n      id\n    }\n    ...TrialExam_viewer\n    id\n  }\n}\n\nfragment TrialExam_viewer on Viewer {\n  id\n  user {\n    id\n    firstName\n    lastName\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'routes_TrialExam_Query',
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
              name: 'TrialExam_viewer',
              args: null,
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'routes_TrialExam_Query',
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
;(node/*: any*/).hash = 'c25800c84b882c44462190e3978a1a90';
module.exports = node
