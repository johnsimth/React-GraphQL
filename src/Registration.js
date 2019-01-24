import React, { Component } from 'react'
import { graphql, commitMutation, createRefetchContainer } from 'react-relay'
import environment from './Environment'

import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { notification } from 'antd'

import 'antd/dist/antd.css' //todo: configure babel autoimport

import styles from './Login.module.css'
const FormItem = Form.Item

const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Error registring in',
    description: 'Please check the email supplied',
  })
}

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

const mutation = graphql`
  mutation RegistrationMutation(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    createUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      id
    }
  }
`

const fields = [
  {
    id: 'firstName',
    label: 'First Name',
    rules: [{ required: true, message: 'Please input your first name' }],
  },
  {
    id: 'lastName',
    label: 'Last Name',
    rules: [{ required: true, message: 'Please input your last name' }],
  },
  {
    id: 'email',
    label: 'Email',
    rules: [{ required: true, message: 'Please input your email' }],
  },
  {
    id: 'password',
    label: 'Password',
    rules: [{ required: true, message: 'Please input your password' }],
  },
]

class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields()
  }

  submitRegistration(variables) {
    this.setState({ working: true })
    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        this.setState({ working: false })
        if (errors) {
          console.log('There was an error logging in: ' + errors[0].message)
        } else {
          localStorage.setItem('AUTH_TOKEN', response.createUser.user.token) //todo: import constant with AUTH_TOKEN_KEY from Environment.js
          const { previousLocation } = this.props.match.location.state || {}
          const nextLocation = previousLocation || '/exams'
          this.props.router.push(nextLocation)
        }
      },
      onError: err => {
        console.log(err)
        this.setState({ working: false })
        openNotificationWithIcon('error')
      },
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        const variables = {
          email: values.email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
        }
        this.submitRegistration(variables)
      } else console.log(err)
    })
  }

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form
    // Only show error after a field is touched.
    return (
      <div className="LoginContainer">
        <Form layout="vertical" onSubmit={this.handleSubmit}>
          {fields.map(field => {
            const hasError = isFieldTouched(field.id) && getFieldError(field.id)
            return (
              <FormItem
                validateStatus={hasError ? 'error' : ''}
                help={hasError || ''}
              >
                {getFieldDecorator(field.id, {
                  rules: field.rules,
                })(<Input prefix={field.prefix} placeholder={field.label} />)}
              </FormItem>
            )
          })}
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              disabled={this.state.working || hasErrors(getFieldsError())}
            >
              Log in
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default createRefetchContainer(Form.create()(Registration), {
  viewer: graphql`
    fragment Registration_viewer on Viewer {
      id
      user {
        id
        firstName
        lastName
      }
    }
  `,
})
