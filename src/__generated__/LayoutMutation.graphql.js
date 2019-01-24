/**
 * @flow
 * @relayHash a3d4e28b809f0ca699fa729492cc1b2c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LayoutMutationVariables = {||};
export type LayoutMutationResponse = {|
  +logout: ?{|
    +id: string,
    +user: ?{|
      +id: string
    |},
  |}
|};
export type LayoutMutation = {|
  variables: LayoutMutationVariables,
  response: LayoutMutationResponse,
|};
*/


/*
mutation LayoutMutation {
  logout {
    id
    user {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "logout",
    "storageKey": null,
    "args": null,
    "concreteType": "Viewer",
    "plural": false,
    "selections": [
      v0,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v0
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "LayoutMutation",
  "id": null,
  "text": "mutation LayoutMutation {\n  logout {\n    id\n    user {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LayoutMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "LayoutMutation",
    "argumentDefinitions": [],
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '88f07b7c2f64c497a36cc035aee140e2';
module.exports = node;
