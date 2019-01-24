import React, { Component } from 'react'
import { graphql, createRefetchContainer } from 'react-relay'
import styles from './ExamsList.module.css'

class ExamsListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const exams = this.props.viewer.user.exams.edges.map(el => el.node)
    return (
      <div className="ExamsListContainer">
        <h1>List of exams</h1>
        <ul>
          {exams.map(el => {
            return <li>{el.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default createRefetchContainer(ExamsListPage, {
  viewer: graphql`
    fragment ExamsList_viewer on Viewer {
      id
      user {
        id
        firstName
        lastName
        exams {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  `,
})
