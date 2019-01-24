/**
 * @flow
 * @relayHash b86e2401aea668ad0260f799fd4057c0
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Questions_viewer$ref = any;
export type routes_Exam_QueryVariables = {||};
export type routes_Exam_QueryResponse = {|
  +viewer: ?{|
    +user: ?{|
      +id: string
    |},
    +$fragmentRefs: Questions_viewer$ref,
  |}
|};
export type routes_Exam_Query = {|
  variables: routes_Exam_QueryVariables,
  response: routes_Exam_QueryResponse,
|};
*/

/*
query routes_Exam_Query {
  viewer {
    user {
      id
    }
    ...Questions_viewer
    id
  }
}

fragment Questions_viewer on Viewer {
  id
  user {
    id
    currentExam {
      id
      questions(first: 1) {
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        edges {
          node {
            ...SourceQuestion_sourceQuestion
            id
            __typename
          }
          cursor
        }
      }
    }
  }
}

fragment SourceQuestion_sourceQuestion on SourceQuestion {
  id
  uuid
  text
  image
  choiceList {
    edges {
      node {
        id
        text
      }
    }
  }
  answer {
    id
    text
  }
  explanationText
  firstChoice {
    id
    nodeId
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
    },
    v1 = [
      {
        kind: 'Literal',
        name: 'first',
        value: 1,
        type: 'Int',
      },
    ],
    v2 = {
      kind: 'ScalarField',
      alias: null,
      name: 'text',
      args: null,
      storageKey: null,
    },
    v3 = [v0, v2]
  return {
    kind: 'Request',
    operationKind: 'query',
    name: 'routes_Exam_Query',
    id: null,
    text:
      'query routes_Exam_Query {\n  viewer {\n    user {\n      id\n    }\n    ...Questions_viewer\n    id\n  }\n}\n\nfragment Questions_viewer on Viewer {\n  id\n  user {\n    id\n    currentExam {\n      id\n      questions(first: 1) {\n        pageInfo {\n          hasPreviousPage\n          hasNextPage\n          startCursor\n          endCursor\n        }\n        edges {\n          node {\n            ...SourceQuestion_sourceQuestion\n            id\n            __typename\n          }\n          cursor\n        }\n      }\n    }\n  }\n}\n\nfragment SourceQuestion_sourceQuestion on SourceQuestion {\n  id\n  uuid\n  text\n  image\n  choiceList {\n    edges {\n      node {\n        id\n        text\n      }\n    }\n  }\n  answer {\n    id\n    text\n  }\n  explanationText\n  firstChoice {\n    id\n    nodeId\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'routes_Exam_Query',
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
              name: 'Questions_viewer',
              args: null,
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'routes_Exam_Query',
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
                  kind: 'LinkedField',
                  alias: null,
                  name: 'currentExam',
                  storageKey: null,
                  args: null,
                  concreteType: 'Exam',
                  plural: false,
                  selections: [
                    v0,
                    {
                      kind: 'LinkedField',
                      alias: null,
                      name: 'questions',
                      storageKey: 'questions(first:1)',
                      args: v1,
                      concreteType: 'SourceQuestionConnection',
                      plural: false,
                      selections: [
                        {
                          kind: 'LinkedField',
                          alias: null,
                          name: 'pageInfo',
                          storageKey: null,
                          args: null,
                          concreteType: 'PageInfo',
                          plural: false,
                          selections: [
                            {
                              kind: 'ScalarField',
                              alias: null,
                              name: 'hasPreviousPage',
                              args: null,
                              storageKey: null,
                            },
                            {
                              kind: 'ScalarField',
                              alias: null,
                              name: 'hasNextPage',
                              args: null,
                              storageKey: null,
                            },
                            {
                              kind: 'ScalarField',
                              alias: null,
                              name: 'startCursor',
                              args: null,
                              storageKey: null,
                            },
                            {
                              kind: 'ScalarField',
                              alias: null,
                              name: 'endCursor',
                              args: null,
                              storageKey: null,
                            },
                          ],
                        },
                        {
                          kind: 'LinkedField',
                          alias: null,
                          name: 'edges',
                          storageKey: null,
                          args: null,
                          concreteType: 'SourceQuestionEdge',
                          plural: true,
                          selections: [
                            {
                              kind: 'LinkedField',
                              alias: null,
                              name: 'node',
                              storageKey: null,
                              args: null,
                              concreteType: 'SourceQuestion',
                              plural: false,
                              selections: [
                                v0,
                                {
                                  kind: 'ScalarField',
                                  alias: null,
                                  name: 'uuid',
                                  args: null,
                                  storageKey: null,
                                },
                                v2,
                                {
                                  kind: 'ScalarField',
                                  alias: null,
                                  name: 'image',
                                  args: null,
                                  storageKey: null,
                                },
                                {
                                  kind: 'LinkedField',
                                  alias: null,
                                  name: 'choiceList',
                                  storageKey: null,
                                  args: null,
                                  concreteType: 'ChoiceConnection',
                                  plural: false,
                                  selections: [
                                    {
                                      kind: 'LinkedField',
                                      alias: null,
                                      name: 'edges',
                                      storageKey: null,
                                      args: null,
                                      concreteType: 'ChoiceEdge',
                                      plural: true,
                                      selections: [
                                        {
                                          kind: 'LinkedField',
                                          alias: null,
                                          name: 'node',
                                          storageKey: null,
                                          args: null,
                                          concreteType: 'Choice',
                                          plural: false,
                                          selections: v3,
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  kind: 'LinkedField',
                                  alias: null,
                                  name: 'answer',
                                  storageKey: null,
                                  args: null,
                                  concreteType: 'Choice',
                                  plural: false,
                                  selections: v3,
                                },
                                {
                                  kind: 'ScalarField',
                                  alias: null,
                                  name: 'explanationText',
                                  args: null,
                                  storageKey: null,
                                },
                                {
                                  kind: 'LinkedField',
                                  alias: null,
                                  name: 'firstChoice',
                                  storageKey: null,
                                  args: null,
                                  concreteType: 'Choice',
                                  plural: false,
                                  selections: [
                                    v0,
                                    {
                                      kind: 'ScalarField',
                                      alias: null,
                                      name: 'nodeId',
                                      args: null,
                                      storageKey: null,
                                    },
                                  ],
                                },
                                {
                                  kind: 'ScalarField',
                                  alias: null,
                                  name: '__typename',
                                  args: null,
                                  storageKey: null,
                                },
                              ],
                            },
                            {
                              kind: 'ScalarField',
                              alias: null,
                              name: 'cursor',
                              args: null,
                              storageKey: null,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      kind: 'LinkedHandle',
                      alias: null,
                      name: 'questions',
                      args: v1,
                      handle: 'connection',
                      key: 'Questions_questions',
                      filters: null,
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
;(node/*: any*/).hash = 'df79f96f32fd8425e1cc0d9c06d87c32';
module.exports = node
