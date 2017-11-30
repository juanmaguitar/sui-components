import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class AtomSpinner extends React.Component {
  render () {
    const spinnerClassName = cx(
      'sui-atom-spinner',
      this.props.isFullScreen && ' sui-atom-spinner-fullscreen',
    )

    const spinnerBackgroundClassName = cx(
      'sui-atom-spinner-background',
      this.props.visible && 'sui-atom-spinner-background-visible'
    )

    const spinnerImageClassName = cx(
      'sui-atom-spinner-image',
      this.props.visible && 'sui-atom-spinner-image-visible'
    )

    return (
      <div className={spinnerClassName}>
        {this.props.children}
        <div className={spinnerBackgroundClassName} />
        <div style={{ backgroundImage: `url(${this.props.imageUrl})` }} className={spinnerImageClassName} />
      </div>
    )
  }
}

AtomSpinner.displayName = 'AtomSpinner'

AtomSpinner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  isFullScreen: PropTypes.bool,
  children: PropTypes.node
}

AtomSpinner.defaultProps = {
  isFullScreen: false,
  visible: false
}

export default AtomSpinner
