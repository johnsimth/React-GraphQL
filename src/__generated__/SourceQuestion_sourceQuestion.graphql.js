/**
 * @flow
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SourceQuestion_sourceQuestion$ref: FragmentReference;
export type SourceQuestion_sourceQuestion = {|
  +id: string,
  +uuid: ?string,
  +text: ?string,
  +image: ?string,
  +choiceList: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +id: string,
        +text: ?string,
      |}
    |}>
  |},
  +answer: ?{|
    +id: string,
    +text: ?string,
  |},
  +explanationText: ?string,
  +firstChoice: ?{|
    +id: string,
    +nodeId: ?string,
  |},
  +chosenOption: ?string,
  +$refType: SourceQuestion_sourceQuestion$ref,
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
    v1 = {
      kind: 'ScalarField',
      alias: null,
      name: 'text',
      args: null,
      storageKey: null,
    },
    v2 = [v0, v1]
  return {
    kind: 'Fragment',
    name: 'SourceQuestion_sourceQuestion',
    type: 'SourceQuestion',
    metadata: null,
    argumentDefinitions: [],
    selections: [
      v0,
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
        name: 'chosenOption',
        args: null,
        storageKey: null,
      },
    ],
  }
})()
// prettier-ignore
;(node/*: any*/).hash = 'afc486183c680445ca6568abc1ef622e';
module.exports = node
