import React, {Component} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

class AtomBox extends Component {
  classNames () {
    return cx(
      'sui-AtomBox',
      this.props.green && 'sui-AtomBox-green',
      this.props.red && 'sui-AtomBox-red'
    )
  }

  render () {
    return (
      <div className={this.classNames()}>
        <h1>AtomBox :)</h1>
        <p>Prueba</p>
        <a href='#'>texto del link</a>
      </div>
    )
  }
}

AtomBox.displayName = 'AtomBox'

// Remove these comments if you need
// AtomBox.contextTypes = {i18n: React.PropTypes.object}
AtomBox.propTypes = {
  green: PropTypes.bool,
  red: PropTypes.bool
}
AtomBox.defaultProps = {
  green: false,
  red: true
}

export default AtomBox
