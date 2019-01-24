// @flow
import React from 'react'
import { Redirect } from 'found'
import {
  createPaginationContainer,
  graphql,
  commitLocalUpdate,
  commitMutation,
  QueryRenderer,
} from 'react-relay'
import environment from './Environment'

import SourceQuestion from './SourceQuestion'

import type { Questions_viewer } from './__generated__/Questions_viewer.graphql'
import type { SourceQuestion_sourceQuestion } from './__generated__/SourceQuestion_sourceQuestion.graphql'
import type { RelayPaginationProp } from 'react-relay'

// try out antd
import { Button, Progress, Row, Col } from 'antd'

type QuestionPaginationComponentProps = {
  relay: RelayPaginationProp,
  viewer: Questions_viewer,
}

class Questions extends React.Component<QuestionPaginationComponentProps> {
  render() {
    if (
      !this.props.viewer ||
      !this.props.viewer.user ||
      !this.props.viewer.user.currentExam ||
      !this.props.viewer.user.currentExam.questions ||
      !this.props.viewer.user.currentExam.questions.edges ||
      !(this.props.viewer.user.currentExam.questions.edges.length > 0) ||
      !this.props.viewer.user.currentExam.questions.edges[0] ||
      !this.props.viewer.user.currentExam.questions.edges[
        this.props.viewer.user.currentExam.questions.edges.length - 1
      ] ||
      !this.props.viewer.user.currentExam.questions.edges[0].node
    )
      return null

    const { user } = this.props.viewer
    const { currentExam } = this.props.viewer.user
    const { questions } = this.props.viewer.user.currentExam
    const { edges } = this.props.viewer.user.currentExam.questions
    const firstQuestion = this.props.viewer.user.currentExam.questions.edges[0]
      .node
    const numberOfQuestionsFetched = edges.length

    if (
      numberOfQuestionsFetched < 1 ||
      !this.props.viewer.user.currentExam.questions.edges[
        numberOfQuestionsFetched - 1
      ] ||
      !this.props.viewer.user.currentExam.questions.edges[
        numberOfQuestionsFetched - 1
      ].node
    )
      return null

    const lastQuestion = this.props.viewer.user.currentExam.questions.edges[
      numberOfQuestionsFetched - 1
    ].node

    const lastQuestionIndex = edges.length - 1
    const questionIndex = this.props.viewer.user.currentExam
      .currentQuestionIndex
    const currentQuestion = this.props.viewer.user.currentExam.questions
      .edges[0].node

    return (
      <div>
        <Row>
          <Col>
            <div style={{ paddingBottom: 8 }}>
              <Progress percent={30} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <SourceQuestion sourceQuestion={currentQuestion} />
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <Button
              type="primary"
              disabled={!questions.pageInfo.hasPreviousPage}
              onClick={() => this._loadMore()}
            >
              Previous question
            </Button>
          </Col>
          <Col span={12}>
            <Button
              type="primary"
              disabled={!questions.pageInfo.hasNextPage}
              onClick={() => this._loadMore()}
              style={{ float: 'right' }}
            >
              Next question
            </Button>
          </Col>
        </Row>
      </div>
    )
  }

  _loadMore() {
    if (this.props.relay.isLoading()) {
      return
    } else if (!this.props.relay.hasMore()) {
      return
    }
    this.props.relay.loadMore(
      1, // Fetch the next item/s
      error => {
        error ? console.log(error) : () => {}
      }
    )
  }
}

export default createPaginationContainer(
  Questions,
  {
    viewer: graphql`
      fragment Questions_viewer on Viewer
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 1 }
          cursor: { type: "String" }
        ) {
        id
        user {
          id
          currentExam {
            id
            currentQuestionIndex
            questions(first: $count, after: $cursor)
              # orderby: $orderBy # other variables
              @connection(key: "Questions_questions") {
              pageInfo {
                hasPreviousPage
                hasNextPage
                startCursor
                endCursor
              }
              edges {
                node {
                  ...SourceQuestion_sourceQuestion
                }
              }
            }
          }
        }
      }
    `,
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return (
        props.viewer &&
        props.viewer.user &&
        props.viewer.user.currentExam &&
        props.viewer.user.currentExam.questions
      )
    },
    getFragmentVariables(previousVariables, totalCount) {
      return {
        ...previousVariables,
        count: totalCount,
      }
    },
    // getVariables(props, { count, cursor }, fragmentVariables) {
    getVariables(props, paginationInfo, fragmentVariables) {
      return {
        count: paginationInfo.count,
        cursor: paginationInfo.cursor,
      }
    },
    query: graphql`
      query QuestionsPaginationQuery(
        $count: Int!
        $cursor: String # $nodeId: String! # $orderby: String!
      ) {
        viewer {
          ...Questions_viewer @arguments(count: $count, cursor: $cursor)
        }
      }
    `,
  }
)
