/**
 * @flow
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SourceQuestion_sourceQuestion$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExamContainer_viewer$ref: FragmentReference;
export type ExamContainer_viewer = {|
  +id: string,
  +user: ?{|
    +id: string,
    +currentExam: ?{|
      +questions: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: {|
            +id: string,
            +choiceList: ?{|
              +edges: ?$ReadOnlyArray<?{|
                +node: {|
                  +id: string
                |}
              |}>
            |},
            +answer: ?{|
              +id: string
            |},
            +firstChoice: ?{|
              +id: string
            |},
            +$fragmentRefs: SourceQuestion_sourceQuestion$ref,
          |}
        |}>
      |}
    |},
  |},
  +$refType: ExamContainer_viewer$ref,
|};
*/

const node /*: ConcreteFragment*/ = (function() {
  var v0 = {
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null,
    },
    v1 = [v0]
  return {
    kind: 'Fragment',
    name: 'ExamContainer_viewer',
    type: 'Viewer',
    metadata: null,
    argumentDefinitions: [],
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
                                    selections: v1,
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
                            selections: v1,
                          },
                          {
                            kind: 'LinkedField',
                            alias: null,
                            name: 'firstChoice',
                            storageKey: null,
                            args: null,
                            concreteType: 'Choice',
                            plural: false,
                            selections: v1,
                          },
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
            ],
          },
        ],
      },
    ],
  }
})()
// prettier-ignore
;(node/*: any*/).hash = '0d1b51db423c8f629112bc455d611533';
module.exports = node
