import React, {Component} from 'react'
import cx from 'classnames'
import Button from '@schibstedspain/sui-button-basic'
import PropTypes from 'prop-types'

class MoleculeNotification extends Component {
  classNames () {
    return cx(
      'sui-MoleculeNotification',
      this.props.success && 'sui-MoleculeNotification--success',
      this.props.warning && 'sui-MoleculeNotification--warning'
    )
  }

  // <MoleculeNotification success warning showButton />

  render () {
    return (
      <div role='alert' className={this.classNames()}>
        {/* Role es igual para todas las notificaciones */}
        <div className='sui-MoleculeNotification-body'>
          <span className='' />
          <p>
            Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget.
            <a href='#' className=''>Link underline</a>
          </p>

          <button type='button' aria-label='Close'><span aria-hidden='true' hidden=''>Close</span></button>
        </div>

        {
          this.props.showFooter &&
          <div className='sui-MoleculeNotification-footer'>
            <Button
              text='Botón'
              size='medium'
              type='primary'
            />
          </div>
        }
      </div>
    )
  }
}

MoleculeNotification.displayName = 'MoleculeNotification'

// Remove these comments if you need
// MoleculeNotification.contextTypes = {i18n: React.PropTypes.object}
MoleculeNotification.propTypes = {
  success: PropTypes.bool,
  warning: PropTypes.bool,
  showFooter: PropTypes.bool
}
// MoleculeNotification.defaultProps = {}

export default MoleculeNotification
