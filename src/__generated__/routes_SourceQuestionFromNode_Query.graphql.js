/**
 * @flow
 * @relayHash 121c2cbe36158bf2aca93aa2e2115f59
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SourceQuestion_sourceQuestion$ref = any;
export type routes_SourceQuestionFromNode_QueryVariables = {|
  id: string
|};
export type routes_SourceQuestionFromNode_QueryResponse = {|
  +viewer: ?{|
    +user: ?{|
      +id: string
    |}
  |},
  +sourceQuestion: ?{|
    +$fragmentRefs: SourceQuestion_sourceQuestion$ref
  |},
|};
export type routes_SourceQuestionFromNode_Query = {|
  variables: routes_SourceQuestionFromNode_QueryVariables,
  response: routes_SourceQuestionFromNode_QueryResponse,
|};
*/

/*
query routes_SourceQuestionFromNode_Query(
  $id: ID!
) {
  viewer {
    user {
      id
    }
    id
  }
  sourceQuestion: node(id: $id) {
    __typename
    ... on SourceQuestion {
      ...SourceQuestion_sourceQuestion
    }
    id
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
        name: 'id',
        type: 'ID!',
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
    v2 = {
      kind: 'LinkedField',
      alias: null,
      name: 'user',
      storageKey: null,
      args: null,
      concreteType: 'User',
      plural: false,
      selections: [v1],
    },
    v3 = [
      {
        kind: 'Variable',
        name: 'id',
        variableName: 'id',
        type: 'ID!',
      },
    ],
    v4 = {
      kind: 'ScalarField',
      alias: null,
      name: 'text',
      args: null,
      storageKey: null,
    },
    v5 = [v1, v4]
  return {
    kind: 'Request',
    operationKind: 'query',
    name: 'routes_SourceQuestionFromNode_Query',
    id: null,
    text:
      'query routes_SourceQuestionFromNode_Query(\n  $id: ID!\n) {\n  viewer {\n    user {\n      id\n    }\n    id\n  }\n  sourceQuestion: node(id: $id) {\n    __typename\n    ... on SourceQuestion {\n      ...SourceQuestion_sourceQuestion\n    }\n    id\n  }\n}\n\nfragment SourceQuestion_sourceQuestion on SourceQuestion {\n  id\n  uuid\n  text\n  image\n  choiceList {\n    edges {\n      node {\n        id\n        text\n      }\n    }\n  }\n  answer {\n    id\n    text\n  }\n  explanationText\n  firstChoice {\n    id\n    nodeId\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'routes_SourceQuestionFromNode_Query',
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
          selections: [v2],
        },
        {
          kind: 'LinkedField',
          alias: 'sourceQuestion',
          name: 'node',
          storageKey: null,
          args: v3,
          concreteType: null,
          plural: false,
          selections: [
            {
              kind: 'InlineFragment',
              type: 'SourceQuestion',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: 'SourceQuestion_sourceQuestion',
                  args: null,
                },
              ],
            },
          ],
        },
      ],
    },
    operation: {
      kind: 'Operation',
      name: 'routes_SourceQuestionFromNode_Query',
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
          selections: [v2, v1],
        },
        {
          kind: 'LinkedField',
          alias: 'sourceQuestion',
          name: 'node',
          storageKey: null,
          args: v3,
          concreteType: null,
          plural: false,
          selections: [
            {
              kind: 'ScalarField',
              alias: null,
              name: '__typename',
              args: null,
              storageKey: null,
            },
            v1,
            {
              kind: 'InlineFragment',
              type: 'SourceQuestion',
              selections: [
                {
                  kind: 'ScalarField',
                  alias: null,
                  name: 'uuid',
                  args: null,
                  storageKey: null,
                },
                v4,
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
                          selections: v5,
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
                  selections: v5,
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
              ],
            },
          ],
        },
      ],
    },
  }
})()
// prettier-ignore
;(node/*: any*/).hash = '7038436bdf45e9c428670946222c622a';
module.exports = node
