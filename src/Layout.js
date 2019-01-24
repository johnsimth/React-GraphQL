// @flow
import React from 'react'
import environment from './Environment'
import { createRefetchContainer, graphql, commitMutation } from 'react-relay'
import { Link } from 'found'
import { Layout, Menu, Dropdown, Button, Icon } from 'antd'
import Login from './Login.js'

import type { Layout_viewer } from './__generated__/Layout_viewer.graphql'
import type { RelayPaginationProp } from 'react-relay'

const { Header, Content, Footer } = Layout

const mutation = graphql`
  mutation LayoutMutation {
    logout {
      id
      user {
        id
      }
    }
  }
`
function logoutUser(environment, cb) {
  const variables = {}
  return commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (errors)
        console.log('There was an error logging in: ' + errors[0].message)
      else {
        console.log(response.login)
        localStorage.removeItem('AUTH_TOKEN')
        cb()
      }
    },
    onError: err => {
      console.log(err)
      cb(err)
    },
  })
}

type LayoutComponentProps = {
  relay: RelayPaginationProp,
  viewer: Layout_viewer,
  children: any,
  router: any,
  location: any,
}
type LayoutComponentState = {}

class LayoutComponent extends React.Component<
  LayoutComponentProps,
  LayoutComponentState
> {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleLogoutMutation = () => {
    logoutUser(environment, err => {
      if (err) {
      } else {
        this.props.router.push('/')
      }
    })
  }
  renderLoggedIn(user) {
    const menu = (
      <Menu
        onClick={({ key }) => {
          if (key === 'logout') {
            localStorage.removeItem('AUTH_TOKEN') //todo: import constant with AUTH_TOKEN_KEY from Environment.js
            window.location.href = '/'
          }
        }}
      >
        <Menu.Item key="logout">logout</Menu.Item>
      </Menu>
    )
    return (
      <Dropdown overlay={menu} trigger={['click']}>
        {/* <p className="ant-dropdown-link" href="#"> */}
        <Button ghost="true" style={{ float: 'right', marginTop: 15 }}>
          {[user.firstName, user.lastName].join(' ')} <Icon type="down" />
        </Button>
        {/* </p> */}
      </Dropdown>
    )
  }
  renderLoggedOut() {
    return (
      <Menu
        selectedKeys={[this.props.location.pathname]}
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="/login">
          <Link to="/login">Login</Link>
        </Menu.Item>
        {/* <Menu.Item key="2">Summary</Menu.Item> */}
      </Menu>
    )
  }
  renderDropdown(user) {
    if (user && user.id) {
      return this.renderLoggedIn(user)
    } else {
      return this.renderLoggedOut()
    }
  }
  render() {
    const { user } = this.props.viewer
    return (
      <Layout className="layout">
        <Header style={{ display: 'flex' }}>
          <div className="logo" />
          <div style={{ flex: 1 }}>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[this.props.location.pathname]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="/">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="/examContainer">
                <Link to="/examContainer">Exam</Link>
              </Menu.Item>
              {/* <Menu.Item key="/revise">
                <Link to="/revise">Revise</Link>
              </Menu.Item> */}
              {/* <Menu.Item key="2">Summary</Menu.Item> */}
            </Menu>
          </div>
          {this.renderDropdown(user)}
        </Header>
        <Content style={{ padding: '0 12px' }}>
          <div style={{ background: '#fff', padding: 12, minHeight: 418 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          College of Rhubarb ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    )
  }
}

export default createRefetchContainer(LayoutComponent, {
  viewer: graphql`
    fragment Layout_viewer on Viewer {
      id
      user {
        id
        firstName
        lastName
      }
    }
  `,
})
