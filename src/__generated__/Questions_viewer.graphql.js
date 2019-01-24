/**
 * @flow
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SourceQuestion_sourceQuestion$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Questions_viewer$ref: FragmentReference;
export type Questions_viewer = {|
  +id: string,
  +user: ?{|
    +id: string,
    +currentExam: ?{|
      +id: string,
      +currentQuestionIndex: ?number,
      +questions: ?{|
        +pageInfo: {|
          +hasPreviousPage: boolean,
          +hasNextPage: boolean,
          +startCursor: ?string,
          +endCursor: ?string,
        |},
        +edges: ?$ReadOnlyArray<?{|
          +node: {|
            +$fragmentRefs: SourceQuestion_sourceQuestion$ref
          |}
        |}>,
      |},
    |},
  |},
  +$refType: Questions_viewer$ref,
|};
*/

const node /*: ConcreteFragment*/ = (function() {
  var v0 = {
    kind: 'ScalarField',
    alias: null,
    name: 'id',
    args: null,
    storageKey: null,
  }
  return {
    kind: 'Fragment',
    name: 'Questions_viewer',
    type: 'Viewer',
    metadata: {
      connection: [
        {
          count: 'count',
          cursor: 'cursor',
          direction: 'forward',
          path: ['user', 'currentExam', 'questions'],
        },
      ],
    },
    argumentDefinitions: [
      {
        kind: 'LocalArgument',
        name: 'count',
        type: 'Int',
        defaultValue: 1,
      },
      {
        kind: 'LocalArgument',
        name: 'cursor',
        type: 'String',
        defaultValue: null,
      },
    ],
    selections: [
      v0,
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
                kind: 'ScalarField',
                alias: null,
                name: 'currentQuestionIndex',
                args: null,
                storageKey: null,
              },
              {
                kind: 'LinkedField',
                alias: 'questions',
                name: '__Questions_questions_connection',
                storageKey: null,
                args: null,
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
                          {
                            kind: 'FragmentSpread',
                            name: 'SourceQuestion_sourceQuestion',
                            args: null,
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
            ],
          },
        ],
      },
    ],
  }
})()
// prettier-ignore
;(node/*: any*/).hash = 'c61bc3e683d263682f389b95008fe0f4';
module.exports = node
