import React, { Component } from 'react'
import { graphql, createRefetchContainer } from 'react-relay'
import styles from './TrialExam.module.css'

class TrialExamPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="TrialExamPageContainer">
        <h1>TrialExamPage</h1>
      </div>
    )
  }
}

export default createRefetchContainer(TrialExamPage, {
  viewer: graphql`
    fragment TrialExam_viewer on Viewer {
      id
      user {
        id
        firstName
        lastName
      }
    }
  `,
})
