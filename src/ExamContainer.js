// @flow
import React from 'react'
import { Redirect } from 'found'
import {
  createFragmentContainer,
  graphql,
  commitLocalUpdate,
  commitMutation,
  QueryRenderer,
} from 'react-relay'
import environment from './Environment'

import SourceQuestion from './SourceQuestion'

import type { ExamContainer_viewer } from './__generated__/ExamContainer_viewer.graphql'
import type { SourceQuestion_sourceQuestion } from './__generated__/SourceQuestion_sourceQuestion.graphql'
import type { RelayPaginationProp } from 'react-relay'

// try out antd
import { Button, Progress, Row, Col } from 'antd'

type ExamContainerPaginationComponentProps = {
  // relay: RelayPaginationProp,
  viewer: ExamContainer_viewer,
}
interface ExamContainerState {
  index: number;
  completed: boolean;
}
class ExamContainer extends React.Component<
  ExamContainerPaginationComponentProps,
  ExamContainerState
> {
  constructor(props) {
    super(props)
    const { questions } = this.props.viewer.user.currentExam

    var firstUnanswered = questions.edges.find(e => {
      return e.node.firstChoice === null
    })

    var firstUnansweredIndex = questions.edges.findIndex(e => {
      return e === firstUnanswered
    })
    console.log(firstUnansweredIndex)
    // handle case when firstUnansweredIndex is -1
    this.state = {
      index:
        Number.isFinite(firstUnansweredIndex) && firstUnansweredIndex > -1
          ? firstUnansweredIndex
          : 0,
      completed: firstUnansweredIndex === -1,
    }
  }

  _previousQuestion() {
    if (this.state.index > 0) this.setState({ index: this.state.index - 1 })
  }
  _nextQuestion() {
    if (
      this.state.index <
      this.props.viewer.user.currentExam.questions.edges.length - 1
    )
      this.setState({ index: this.state.index + 1 })
  }

  getPercentageComplete() {
    const { questions } = this.props.viewer.user.currentExam
    const totalQuestions = questions.edges.length
    var numberCorrect = 0
    var totalWithAnswers = 0

    var indexQuestion: SourceQuestion_sourceQuestion = questions.edges[0].node
    for (var i = 0, _len = questions.edges.length; i < _len; i++) {
      indexQuestion = questions.edges[i].node
      var firstChoice = questions.edges[i].node.firstChoice
      var answer = questions.edges[i].node.answer
      if (
        questions.edges[i].node.firstChoice &&
        questions.edges[i].node.answer
      ) {
        totalWithAnswers += 1
        if (
          questions.edges[i].node.firstChoice.id ===
          questions.edges[i].node.answer.id
        ) {
          numberCorrect += 1
        }
      }
    }

    if (totalWithAnswers === 0) return undefined
    else return (totalWithAnswers * 100) / totalQuestions
  }
  render() {
    const { viewer } = this.props
    if (!viewer.user) return null
    const currentQuestion = this.props.viewer.user.currentExam.questions.edges[
      this.state.index
    ].node
    return (
      <div>
        <Row>
          <Col>
            <div style={{ paddingBottom: 8 }}>
              <Progress percent={this.getPercentageComplete()} />
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
              disabled={this.state.index === 0 || !currentQuestion.firstChoice}
              onClick={() => this._previousQuestion()}
            >
              Previous question
            </Button>
          </Col>
          <Col span={12}>
            <Button
              type="primary"
              disabled={
                this.state.index >=
                  this.props.viewer.user.currentExam.questions.edges.length -
                    1 || !currentQuestion.firstChoice
              }
              onClick={() => this._nextQuestion()}
              style={{ float: 'right' }}
            >
              Next question
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default createFragmentContainer(ExamContainer, {
  viewer: graphql`
    fragment ExamContainer_viewer on Viewer {
      id
      user {
        id
        currentExam {
          questions {
            edges {
              node {
                id
                choiceList {
                  edges {
                    node {
                      id
                    }
                  }
                }
                answer {
                  id
                }
                firstChoice {
                  id
                }
                ...SourceQuestion_sourceQuestion
              }
            }
          }
        }
      }
    }
  `,
})
