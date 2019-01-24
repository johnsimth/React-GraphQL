/**
 * @flow
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Login_viewer$ref: FragmentReference;
export type Login_viewer = {|
  +id: string,
  +user: ?{|
    +id: string,
    +firstName: string,
    +lastName: string,
  |},
  +$refType: Login_viewer$ref,
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
    name: 'Login_viewer',
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
;(node/*: any*/).hash = '2d6374b987c6ec3b7fabe067c3494959';
module.exports = node
