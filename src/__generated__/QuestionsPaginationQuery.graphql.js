/**
 * @flow
 * @relayHash a47096cc684f588b80bed30b971051b3
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Questions_viewer$ref = any;
export type QuestionsPaginationQueryVariables = {|
  count: number,
  cursor?: ?string,
|};
export type QuestionsPaginationQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Questions_viewer$ref
  |}
|};
export type QuestionsPaginationQuery = {|
  variables: QuestionsPaginationQueryVariables,
  response: QuestionsPaginationQueryResponse,
|};
*/

/*
query QuestionsPaginationQuery(
  $count: Int!
  $cursor: String
) {
  viewer {
    ...Questions_viewer_1G22uz
    id
  }
}

fragment Questions_viewer_1G22uz on Viewer {
  id
  user {
    id
    currentExam {
      id
      questions(first: $count, after: $cursor) {
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
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'count',
        type: 'Int!',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'cursor',
        type: 'String',
        defaultValue: null,
      },
    ],
    v1 = {
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null,
    },
    v2 = [
      {
        kind: 'Variable',
        name: 'after',
        variableName: 'cursor',
        type: 'String',
      },
      {
        kind: 'Variable',
        name: 'first',
        variableName: 'count',
        type: 'Int',
      },
    ],
    v3 = {
      kind: 'ScalarField',
      alias: null,
      name: 'text',
      args: null,
      storageKey: null,
    },
    v4 = [v1, v3]
  return {
    kind: 'Request',
    operationKind: 'query',
    name: 'QuestionsPaginationQuery',
    id: null,
    text:
      'query QuestionsPaginationQuery(\n  $count: Int!\n  $cursor: String\n) {\n  viewer {\n    ...Questions_viewer_1G22uz\n    id\n  }\n}\n\nfragment Questions_viewer_1G22uz on Viewer {\n  id\n  user {\n    id\n    currentExam {\n      id\n      questions(first: $count, after: $cursor) {\n        pageInfo {\n          hasPreviousPage\n          hasNextPage\n          startCursor\n          endCursor\n        }\n        edges {\n          node {\n            ...SourceQuestion_sourceQuestion\n            id\n            __typename\n          }\n          cursor\n        }\n      }\n    }\n  }\n}\n\nfragment SourceQuestion_sourceQuestion on SourceQuestion {\n  id\n  uuid\n  text\n  image\n  choiceList {\n    edges {\n      node {\n        id\n        text\n      }\n    }\n  }\n  answer {\n    id\n    text\n  }\n  explanationText\n  firstChoice {\n    id\n    nodeId\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'QuestionsPaginationQuery',
      type: 'Query',
      metadata: null,
      argumentDefinitions: v0,
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
              kind: 'FragmentSpread',
              name: 'Questions_viewer',
              args: [
                {
                  kind: 'Variable',
                  name: 'count',
                  variableName: 'count',
                  type: null,
                },
                {
                  kind: 'Variable',
                  name: 'cursor',
                  variableName: 'cursor',
                  type: null,
                },
              ],
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'QuestionsPaginationQuery',
      argumentDefinitions: v0,
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
            v1,
            {
              kind: 'LinkedField',
              alias: null,
              name: 'user',
              storageKey: null,
              args: null,
              concreteType: 'User',
              plural: false,
              selections: [
                v1,
                {
                  kind: 'LinkedField',
                  alias: null,
                  name: 'currentExam',
                  storageKey: null,
                  args: null,
                  concreteType: 'Exam',
                  plural: false,
                  selections: [
                    v1,
                    {
                      kind: 'LinkedField',
                      alias: null,
                      name: 'questions',
                      storageKey: null,
                      args: v2,
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
                                v1,
                                {
                                  kind: 'ScalarField',
                                  alias: null,
                                  name: 'uuid',
                                  args: null,
                                  storageKey: null,
                                },
                                v3,
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
                                          selections: v4,
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
                                  selections: v4,
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
                                    v1,
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
                      args: v2,
                      handle: 'connection',
                      key: 'Questions_questions',
                      filters: null,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  }
})()
// prettier-ignore
;(node/*: any*/).hash = '46e1577ce93882e7c3344108a9e46b56';
module.exports = node
