/**
 * @flow
 * @relayHash 77ea435add554a5b75af52454c38cb63
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ExamsList_viewer$ref = any;
export type routes_ExamsListContainer_QueryVariables = {||};
export type routes_ExamsListContainer_QueryResponse = {|
  +viewer: ?{|
    +user: ?{|
      +id: string
    |},
    +$fragmentRefs: ExamsList_viewer$ref,
  |}
|};
export type routes_ExamsListContainer_Query = {|
  variables: routes_ExamsListContainer_QueryVariables,
  response: routes_ExamsListContainer_QueryResponse,
|};
*/

/*
query routes_ExamsListContainer_Query {
  viewer {
    user {
      id
    }
    ...ExamsList_viewer
    id
  }
}

fragment ExamsList_viewer on Viewer {
  id
  user {
    id
    firstName
    lastName
    exams {
      edges {
        node {
          id
          name
        }
      }
    }
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
    name: 'routes_ExamsListContainer_Query',
    id: null,
    text:
      'query routes_ExamsListContainer_Query {\n  viewer {\n    user {\n      id\n    }\n    ...ExamsList_viewer\n    id\n  }\n}\n\nfragment ExamsList_viewer on Viewer {\n  id\n  user {\n    id\n    firstName\n    lastName\n    exams {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'routes_ExamsListContainer_Query',
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
              name: 'ExamsList_viewer',
              args: null,
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'routes_ExamsListContainer_Query',
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
                {
                  kind: 'LinkedField',
                  alias: null,
                  name: 'exams',
                  storageKey: null,
                  args: null,
                  concreteType: 'ExamConnection',
                  plural: false,
                  selections: [
                    {
                      kind: 'LinkedField',
                      alias: null,
                      name: 'edges',
                      storageKey: null,
                      args: null,
                      concreteType: 'ExamEdge',
                      plural: true,
                      selections: [
                        {
                          kind: 'LinkedField',
                          alias: null,
                          name: 'node',
                          storageKey: null,
                          args: null,
                          concreteType: 'Exam',
                          plural: false,
                          selections: [
                            v0,
                            {
                              kind: 'ScalarField',
                              alias: null,
                              name: 'name',
                              args: null,
                              storageKey: null,
                            },
                          ],
                        },
                      ],
                    },
                  ],
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
;(node/*: any*/).hash = '8797d66292ec68795555e0e607907bd6';
module.exports = node
