import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './index.module.less'

export class ABMLoading extends Component {
  render() {
    const { platformName } = this.props
    return (
      <div className={styles.loading}>
        <div className={styles.loadingCenter}>
          <div className={styles.loadingCenterAbsolute}>
            <div className={classNames(styles.loadingObject, styles.loadingObject_four)} />
            <div className={classNames(styles.loadingObject, styles.loadingObject_three)} />
            <div className={classNames(styles.loadingObject, styles.loadingObject_two)} />
            <div className={classNames(styles.loadingObject, styles.loadingObject_one)} />
          </div>
          <h1 className={styles.loadingText}>
            <span>{platformName}</span>
          </h1>
          <h1 className={styles.loadingText}>
            <span>{platformName}</span>
          </h1>
        </div>
      </div>
    )
  }
}
