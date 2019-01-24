/**
 * @flow
 * @relayHash fd6188b06deb8db04b8d5bf58461c6fd
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SourceQuestionResponseMutationVariables = {|
  questionId: string,
  choiceId: string,
  confidence: string,
  timeTaken: any,
|};
export type SourceQuestionResponseMutationResponse = {|
  +respondToQuestion: ?{|
    +id: string,
    +firstChoice: ?{|
      +id: string,
      +nodeId: ?string,
    |},
  |}
|};
export type SourceQuestionResponseMutation = {|
  variables: SourceQuestionResponseMutationVariables,
  response: SourceQuestionResponseMutationResponse,
|};
*/

/*
mutation SourceQuestionResponseMutation(
  $questionId: ID!
  $choiceId: ID!
  $confidence: String!
  $timeTaken: Long!
) {
  respondToQuestion(questionId: $questionId, choiceId: $choiceId, confidence: $confidence, timeTaken: $timeTaken) {
    id
    firstChoice {
      id
      nodeId
    }
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'questionId',
        type: 'ID!',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'choiceId',
        type: 'ID!',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'confidence',
        type: 'String!',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'timeTaken',
        type: 'Long!',
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
        kind: 'LinkedField',
        alias: null,
        name: 'respondToQuestion',
        storageKey: null,
        args: [
          {
            kind: 'Variable',
            name: 'choiceId',
            variableName: 'choiceId',
            type: 'ID!',
          },
          {
            kind: 'Variable',
            name: 'confidence',
            variableName: 'confidence',
            type: 'String!',
          },
          {
            kind: 'Variable',
            name: 'questionId',
            variableName: 'questionId',
            type: 'ID!',
          },
          {
            kind: 'Variable',
            name: 'timeTaken',
            variableName: 'timeTaken',
            type: 'Long!',
          },
        ],
        concreteType: 'SourceQuestion',
        plural: false,
        selections: [
          v1,
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
    ]
  return {
    kind: 'Request',
    operationKind: 'mutation',
    name: 'SourceQuestionResponseMutation',
    id: null,
    text:
      'mutation SourceQuestionResponseMutation(\n  $questionId: ID!\n  $choiceId: ID!\n  $confidence: String!\n  $timeTaken: Long!\n) {\n  respondToQuestion(questionId: $questionId, choiceId: $choiceId, confidence: $confidence, timeTaken: $timeTaken) {\n    id\n    firstChoice {\n      id\n      nodeId\n    }\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'SourceQuestionResponseMutation',
      type: 'Mutation',
      metadata: null,
      argumentDefinitions: v0,
      selections: v2,
    },
    operation: {
      kind: 'Operation',
      name: 'SourceQuestionResponseMutation',
      argumentDefinitions: v0,
      selections: v2,
    },
  }
})()
// prettier-ignore
;(node/*: any*/).hash = '62c10f6dc2aeb6b9568a80ab338cbcdf';
module.exports = node
