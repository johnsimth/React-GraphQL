import React from 'react'
import { Button, Icon } from 'antd'
import QueueAnim from 'rc-queue-anim'

import './Banner.css'

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props
    const { dataSource } = currentProps
    delete currentProps.dataSource
    delete currentProps.isMobile
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          {...dataSource.textWrapper}
        >
          <div key="title" {...dataSource.title}>
            {typeof dataSource.title.children === 'string' &&
            dataSource.title.children.match(
              /\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/
            ) ? (
              <img src={dataSource.title.children} width="100%" alt="img" />
            ) : (
              dataSource.title.children
            )}
          </div>
          <div key="content" {...dataSource.content}>
            {dataSource.content.children}
          </div>
          <Button
            ghost
            key="button"
            onClick={() => console.log('Start learning')}
            {...dataSource.button}
          >
            {dataSource.button.children}
          </Button>
        </QueueAnim>
      </div>
    )
  }
}
export default Banner
