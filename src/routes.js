// @flow
import React from 'react'
import { graphql } from 'react-relay'
import { makeRouteConfig, Route, RedirectException, Redirect } from 'found'
import { Spin, Icon } from 'antd'
import ReactGA from 'react-ga'

// import App from "./App"
import Layout from './Layout.js'
import HomePage from './HomePage'
import Login from './Login'
import Registration from './Registration'
import ExamsList from './ExamsList'
import TrialExam from './TrialExam'
import SourceQuestion from './SourceQuestion'
import Questions from './Questions'
import ExamContainer from './ExamContainer'
import RegistrationPage from './RegistrationPage'

import type { SourceQuestion_sourceQuestion } from './__generated__/SourceQuestion_sourceQuestion.graphql'
import type { Questions_viewer } from './__generated__/Questions_viewer.graphql'
import type { ExamContainer_viewer } from './__generated__/ExamContainer_viewer.graphql'
import type { Layout_viewer } from './__generated__/Layout_viewer.graphql'

ReactGA.initialize('UA-130960419-1')
ReactGA.pageview('/routes')

class ProtectedRoute extends Route {
  render({ Component, props }) {
    if (!props) {
      const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />
      return <Spin indicator={antIcon} />
      // return undefined
    }
    if (!props.viewer || !props.viewer.user) {
      throw new RedirectException({
        pathname: '/login',
        state: { previousLocation: props.location },
      })
    }
    return <Component {...props} />
  }
}
const routes = makeRouteConfig(
  <Route
    path="/"
    Component={Layout}
    query={graphql`
      query routes_Layout_Query {
        viewer {
          user {
            id
          }
          ...Layout_viewer
        }
      }
    `}
  >
    <Route
      path="/"
      Component={HomePage}
      query={graphql`
        query routes_HomeContainer_Query {
          viewer {
            user {
              id
            }
            ...HomePage_viewer
          }
        }
      `}
    />
    <Route
      path="login"
      Component={Login}
      query={graphql`
        query routes_LoginContainer_Query {
          viewer {
            user {
              id
            }
            ...Login_viewer
          }
        }
      `}
    />

    <Route
      path="register"
      Component={Registration}
      query={graphql`
        query routes_RegistrationContainer_Query {
          viewer {
            user {
              id
            }
            ...Registration_viewer
          }
        }
      `}
    />
    <ProtectedRoute
      path="exams"
      Component={ExamsList}
      query={graphql`
        query routes_ExamsListContainer_Query {
          viewer {
            user {
              id
            }
            ...ExamsList_viewer
          }
        }
      `}
    />
    <ProtectedRoute
      path="trialExam"
      Component={TrialExam}
      query={graphql`
        query routes_TrialExam_Query {
          viewer {
            user {
              id
            }
            ...TrialExam_viewer
          }
        }
      `}
    />
    <ProtectedRoute
      path="exam"
      Component={Questions}
      query={graphql`
        query routes_Exam_Query {
          viewer {
            user {
              id
            }
            ...Questions_viewer
          }
        }
      `}
    />
    <ProtectedRoute
      path="examContainer"
      Component={ExamContainer}
      query={graphql`
        query routes_ExamContainer_Query {
          viewer {
            user {
              id
            }
            ...ExamContainer_viewer
          }
        }
      `}
    />
    <ProtectedRoute
      path="question/:id"
      Component={SourceQuestion}
      query={graphql`
        query routes_SourceQuestionFromNode_Query($id: ID!) {
          viewer {
            user {
              id
            }
          }
          sourceQuestion: node(id: $id) {
            ... on SourceQuestion {
              ...SourceQuestion_sourceQuestion
            }
          }
        }
      `}
    />
  </Route>
)

export default routes
