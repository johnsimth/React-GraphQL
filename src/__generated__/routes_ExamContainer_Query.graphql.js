/**
 * @flow
 * @relayHash a0100d4d339d741576217a51041d2021
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ExamContainer_viewer$ref = any;
export type routes_ExamContainer_QueryVariables = {||};
export type routes_ExamContainer_QueryResponse = {|
  +viewer: ?{|
    +user: ?{|
      +id: string
    |},
    +$fragmentRefs: ExamContainer_viewer$ref,
  |}
|};
export type routes_ExamContainer_Query = {|
  variables: routes_ExamContainer_QueryVariables,
  response: routes_ExamContainer_QueryResponse,
|};
*/

/*
query routes_ExamContainer_Query {
  viewer {
    user {
      id
    }
    ...ExamContainer_viewer
    id
  }
}

fragment ExamContainer_viewer on Viewer {
  id
  user {
    id
    currentExam {
      questions {
        edges {
          node {
            id
            choiceList {
              edges {
                node {
                  id
                }
              }
            }
            answer {
              id
            }
            firstChoice {
              id
            }
            ...SourceQuestion_sourceQuestion
          }
        }
      }
      id
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
    v1 = {
      kind: 'ScalarField',
      alias: null,
      name: 'text',
      args: null,
      storageKey: null,
    },
    v2 = [v0, v1]
  return {
    kind: 'Request',
    operationKind: 'query',
    name: 'routes_ExamContainer_Query',
    id: null,
    text:
      'query routes_ExamContainer_Query {\n  viewer {\n    user {\n      id\n    }\n    ...ExamContainer_viewer\n    id\n  }\n}\n\nfragment ExamContainer_viewer on Viewer {\n  id\n  user {\n    id\n    currentExam {\n      questions {\n        edges {\n          node {\n            id\n            choiceList {\n              edges {\n                node {\n                  id\n                }\n              }\n            }\n            answer {\n              id\n            }\n            firstChoice {\n              id\n            }\n            ...SourceQuestion_sourceQuestion\n          }\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment SourceQuestion_sourceQuestion on SourceQuestion {\n  id\n  uuid\n  text\n  image\n  choiceList {\n    edges {\n      node {\n        id\n        text\n      }\n    }\n  }\n  answer {\n    id\n    text\n  }\n  explanationText\n  firstChoice {\n    id\n    nodeId\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'routes_ExamContainer_Query',
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
              name: 'ExamContainer_viewer',
              args: null,
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'routes_ExamContainer_Query',
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
                    {
                      kind: 'LinkedField',
                      alias: null,
                      name: 'questions',
                      storageKey: null,
                      args: null,
                      concreteType: 'SourceQuestionConnection',
                      plural: false,
                      selections: [
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
                                          selections: v2,
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
                                  selections: v2,
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
                                  name: 'uuid',
                                  args: null,
                                  storageKey: null,
                                },
                                v1,
                                {
                                  kind: 'ScalarField',
                                  alias: null,
                                  name: 'image',
                                  args: null,
                                  storageKey: null,
                                },
                                {
                                  kind: 'ScalarField',
                                  alias: null,
                                  name: 'explanationText',
                                  args: null,
                                  storageKey: null,
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
            v0,
          ],
        },
      ],
    },
  }
})()
// prettier-ignore
;(node/*: any*/).hash = '2a2d2637805444e15cb9431e59e1c3c7';
module.exports = node
