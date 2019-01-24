/**
 * @flow
 * @relayHash f1bee9671e490c39ae1b5baa02de8af9
 */

/* eslint-disable */

'use strict'

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RegistrationMutationVariables = {|
  email: string,
  password: string,
  firstName: string,
  lastName: string,
|};
export type RegistrationMutationResponse = {|
  +createUser: ?{|
    +id: string
  |}
|};
export type RegistrationMutation = {|
  variables: RegistrationMutationVariables,
  response: RegistrationMutationResponse,
|};
*/

/*
mutation RegistrationMutation(
  $email: String!
  $password: String!
  $firstName: String!
  $lastName: String!
) {
  createUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
    id
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'email',
        type: 'String!',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'password',
        type: 'String!',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'firstName',
        type: 'String!',
        defaultValue: null,
      },
      {
        kind: 'LocalArgument',
        name: 'lastName',
        type: 'String!',
        defaultValue: null,
      },
    ],
    v1 = [
      {
        kind: 'LinkedField',
        alias: null,
        name: 'createUser',
        storageKey: null,
        args: [
          {
            kind: 'Variable',
            name: 'email',
            variableName: 'email',
            type: 'String!',
          },
          {
            kind: 'Variable',
            name: 'firstName',
            variableName: 'firstName',
            type: 'String!',
          },
          {
            kind: 'Variable',
            name: 'lastName',
            variableName: 'lastName',
            type: 'String!',
          },
          {
            kind: 'Variable',
            name: 'password',
            variableName: 'password',
            type: 'String!',
          },
        ],
        concreteType: 'User',
        plural: false,
        selections: [
          {
            kind: 'ScalarField',
            alias: null,
            name: 'id',
            args: null,
            storageKey: null,
          },
        ],
      },
    ]
  return {
    kind: 'Request',
    operationKind: 'mutation',
    name: 'RegistrationMutation',
    id: null,
    text:
      'mutation RegistrationMutation(\n  $email: String!\n  $password: String!\n  $firstName: String!\n  $lastName: String!\n) {\n  createUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {\n    id\n  }\n}\n',
    metadata: {},
    fragment: {
      kind: 'Fragment',
      name: 'RegistrationMutation',
      type: 'Mutation',
      metadata: null,
      argumentDefinitions: v0,
      selections: v1,
    },
    operation: {
      kind: 'Operation',
      name: 'RegistrationMutation',
      argumentDefinitions: v0,
      selections: v1,
    },
  }
})()
// prettier-ignore
;(node/*: any*/).hash = 'a8fe61fd4b4b4d5b2fbf635f412a6faf';
module.exports = node
