// @flow
import React, { Component } from 'react'
import {
  createFragmentContainer,
  graphql,
  commitLocalUpdate,
  commitMutation,
} from 'react-relay'
import environment from './Environment'

import type { SourceQuestion_sourceQuestion } from './__generated__/SourceQuestion_sourceQuestion.graphql'

import { Radio, Input, Tag, Row, Col, View, Collapse, Button } from 'antd'

const RadioGroup = Radio.Group
const ButtonGroup = Button.Group
const Panel = Collapse.Panel

type SourceQuestionComponentProps = {
  sourceQuestion: SourceQuestion_sourceQuestion,
}

class SourceQuestion extends React.Component<SourceQuestionComponentProps> {
  constructor(props) {
    super(props)
    this.state = {
      startTime: Date.now(),
    }
  }

  selectOption(qid, oid) {
    commitLocalUpdate(environment, store => {
      store.get(qid).setValue(oid, 'chosenOption')
    })
  }

  // todo: convert to ant design - unfortunately labels didn't wrap, which forced me to use reactstrap here
  renderOptions() {
    const q = this.props.sourceQuestion
    const options = q.choiceList.edges.map(n => n.node)
    const answer = q.answer
    const alreadyAnswered = q.firstChoice != null
    const radioStyle = {
      display: 'flex',
      alignItems: 'center',
      padding: '3px 0',
    }

    // todo: fixme: the options don't wrap when they're too long for one line
    return (
      <RadioGroup>
        {options.map(o => {
          const isCorrect = answer && answer.id === o.id
          return (
            <Radio
              style={{
                ...radioStyle,
              }}
              value={o.id}
              key={o.id}
              disabled={q.firstChoice != null && q.firstChoice != undefined}
              checked={q.firstChoice && q.firstChoice.id === o.id}
              onClick={() => this.selectOption(q.id, o.id)}
            >
              <span
                style={{
                  whiteSpace: 'normal',
                  ...(q.firstChoice && q.firstChoice.id === o.id
                    ? {
                        color: isCorrect
                          ? 'darkseagreen'
                          : q.answer
                          ? 'indianred'
                          : 'darkgrey',
                      }
                    : {}),
                  ...(q.firstChoice && q.answer && q.answer.id === o.id
                    ? { color: 'darkseagreen' }
                    : {}),
                }}
              >
                {o.text}
              </span>
            </Radio>
          )
        })}
      </RadioGroup>
    )
  }

  renderExplanation() {
    const q = this.props.sourceQuestion
    const alreadyAnswered = q.firstChoice != null

    if (alreadyAnswered && q.explanationText != null)
      return (
        <div style={{ paddingTop: 12, paddingBottom: 12 }}>
          <Collapse bordered={true} defaultActiveKey={[null]}>
            <Panel header="Explanation" key={'explanationKey-' + q.id}>
              {q.explanationText}
            </Panel>
          </Collapse>
        </div>
      )
    else return null
  }

  render() {
    const q = this.props.sourceQuestion
    const options = q.choiceList.edges.map(n => n.node)
    const answer = q.answer
    const answerIsCorrect =
      q.answer && q.firstChoice && q.answer.id === q.firstChoice.id
    return (
      <div>
        <Row>
          <Col span={16}>
            <h3>Question {q.uuid}</h3>
          </Col>
          {/* <Col span={8}>
              <Tag style={{float: 'right'}}> Specialty </Tag>
            </Col> */}
        </Row>
        <Row>
          <div style={{ paddingBottom: 12 }}>{q.text}</div>
        </Row>
        <Row>
          <div style={{ paddingBottom: 12 }}>
            {q.image ? <img style={{ width: '100%' }} src={q.image} /> : null}
          </div>
        </Row>
        <Row>
          <div style={{ paddingBottom: 12 }}>{this.renderOptions()}</div>
        </Row>
        <Row>
          <Col>
            <div style={{ paddingBottom: 12 }}>
              <ButtonGroup>
                <Button
                  type="danger"
                  disabled={q.firstChoice}
                  onClick={() => this.processResponse('GUESS')}
                >
                  No idea
                </Button>
                <Button
                  type="default"
                  disabled={q.firstChoice}
                  onClick={() => this.processResponse('MAYBE')}
                >
                  Maybe
                </Button>
                <Button
                  type="default"
                  disabled={q.firstChoice}
                  onClick={() => this.processResponse('PROBABLE')}
                >
                  Probably
                </Button>
                <Button
                  type="default"
                  disabled={q.firstChoice}
                  onClick={() => this.processResponse('CONFIDENT')}
                >
                  Easy
                </Button>
              </ButtonGroup>
              <Row>{this.renderExplanation()}</Row>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
  processResponse(confidence) {
    const endTime = Date.now()
    const timeTaken = endTime - this.state.startTime //todo: fix flow error

    const variables = {
      questionId: this.props.sourceQuestion.id,
      choiceId: this.props.sourceQuestion.chosenOption,
      confidence: confidence,
      timeTaken: timeTaken,
    }

    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        if (errors)
          console.log(
            'There was an error committing the response: ' + errors[0].message
          )
        else {
          console.log(response)
        }
      },
      onError: err => {
        console.log(err)
      },
    })
  }
}

// user is implicit in the context through the authorisation header
const mutation = graphql`
  mutation SourceQuestionResponseMutation(
    $questionId: ID!
    $choiceId: ID!
    $confidence: String!
    $timeTaken: Long!
  ) {
    respondToQuestion(
      questionId: $questionId
      choiceId: $choiceId
      confidence: $confidence
      timeTaken: $timeTaken
    ) {
      id
      firstChoice {
        id
        nodeId
      }
    }
  }
`

export default createFragmentContainer(SourceQuestion, {
  sourceQuestion: graphql`
    fragment SourceQuestion_sourceQuestion on SourceQuestion {
      id
      uuid
      text
      image
      choiceList {
        edges {
          node {
            id
            text
          }
        }
      }
      answer {
        id
        text
      }
      explanationText
      firstChoice {
        id
        nodeId
      }
      chosenOption
    }
  `,
})
