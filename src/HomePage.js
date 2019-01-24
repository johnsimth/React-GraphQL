import React, { Component } from 'react'
import { graphql, createRefetchContainer } from 'react-relay'
import styles from './HomePage.module.css'
import { Link } from 'found'
import { Menu } from 'antd/lib/menu'

import { enquireScreen } from 'enquire-js'

import 'antd/dist/antd.css' //todo: configure babel autoimport

import Banner from './Banner'

let isMobile
enquireScreen(b => {
  isMobile = b
})

const { location } = window

const bannerDataSource = {
  wrapper: { className: 'banner' },
  textWrapper: { className: 'banner-text-wrapper' },
  title: {
    className: 'banner-title',
    children: 'College of Rhubarb',
  },
  content: {
    className: 'banner-content',
    children: 'Dogma for the FRACP written, and some useful stuff too.',
  },
  button: { className: 'banner-button', children: 'Learn More' },
}

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile,
      show: !location.port,
    }
  }

  componentDidMount() {
    enquireScreen(b => {
      this.setState({ isMobile: !!b })
    })

    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true,
        })
      }, 500)
    }
  }
  renderBanner() {
    const children = [
      <Banner
        id="banner"
        key="banner"
        dataSource={bannerDataSource}
        isMobile={this.state.isMobile}
      />,
    ]

    return <div> {this.state.show && children}</div>
  }

  render() {
    const { user } = this.props.viewer
    return (
      <div className="LandingContainer">
        <div className="LandingHero">
          <h1>College of Rhubarb</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="LandingPrimaryContainer">
            {user ? (
              <Link to="/exams">Go to Exams</Link>
            ) : (
              <Link to="/register">Register</Link>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default createRefetchContainer(HomePage, {
  viewer: graphql`
    fragment HomePage_viewer on Viewer {
      id
      user {
        id
        firstName
        lastName
      }
    }
  `,
})
