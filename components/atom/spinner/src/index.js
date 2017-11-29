import React from 'react'
import PropTypes from 'prop-types'

const AtomSpinner = ({
  imageUrl,
  isFullScreen
}) => {
  const className = 'sui-atom-spinner' + (isFullScreen ? ' sui-atom-spinner-fullscreen' : '')

  return (
    <div className={className}>
      <img src={imageUrl} />
    </div>
  )
}

AtomSpinner.displayName = 'AtomSpinner'

AtomSpinner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  isFullScreen: PropTypes.bool
}
AtomSpinner.defaultProps = {
  isFullScreen: false
}

export default AtomSpinner
