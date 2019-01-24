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
    message: 'Error logging in',
    description: 'Please check your email / password is entered correctly.',
  })
}

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

const mutation = graphql`
  mutation LoginUserMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      user {
        id
        token
        firstName
        lastName
      }
    }
  }
`

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields()
  }

  submitLogin(variables) {
    this.setState({ working: true })
    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        this.setState({ working: false })
        if (errors) {
          console.log('There was an error logging in: ' + errors[0].message)
        } else {
          localStorage.setItem('AUTH_TOKEN', response.login.user.token) //todo: import constant with AUTH_TOKEN_KEY from Environment.js
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
          email: values.userName,
          password: values.password,
        }
        this.submitLogin(variables)
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
    const userNameError =
      isFieldTouched('userName') && getFieldError('userName')
    const passwordError =
      isFieldTouched('password') && getFieldError('password')
    return (
      <div className="LoginContainer">
        <Form layout="vertical" onSubmit={this.handleSubmit}>
          <FormItem
            validateStatus={userNameError ? 'error' : ''}
            help={userNameError || ''}
          >
            {getFieldDecorator('userName', {
              rules: [
                { required: true, message: 'Please input your username' },
              ],
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            )}
          </FormItem>
          <FormItem
            validateStatus={passwordError ? 'error' : ''}
            help={passwordError || ''}
          >
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password' },
              ],
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
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

export default createRefetchContainer(Form.create()(Login), {
  viewer: graphql`
    fragment Login_viewer on Viewer {
      id
      user {
        id
        firstName
        lastName
      }
    }
  `,
})
