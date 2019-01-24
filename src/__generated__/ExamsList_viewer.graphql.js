/**
 * @flow
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExamsList_viewer$ref: FragmentReference;
export type ExamsList_viewer = {|
  +id: string,
  +user: ?{|
    +id: string,
    +firstName: string,
    +lastName: string,
    +exams: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: {|
          +id: string,
          +name: ?string,
        |}
      |}>
    |},
  |},
  +$refType: ExamsList_viewer$ref,
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
    name: 'ExamsList_viewer',
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
    ],
  }
})()
// prettier-ignore
;(node/*: any*/).hash = '659d35a695d3d5f5be64a56496a4e068';
module.exports = node
