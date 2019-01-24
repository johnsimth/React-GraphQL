/**
 * @flow
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TrialExam_viewer$ref: FragmentReference;
export type TrialExam_viewer = {|
  +id: string,
  +user: ?{|
    +id: string,
    +firstName: string,
    +lastName: string,
  |},
  +$refType: TrialExam_viewer$ref,
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
    name: 'TrialExam_viewer',
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
        ],
      },
    ],
  }
})()
// prettier-ignore
;(node/*: any*/).hash = 'fa8b328f3a94f95d03e9e4c47554df34';
module.exports = node
