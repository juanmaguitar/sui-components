import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ListBasic extends Component {
  render () {
    const { items } = this.props

    return (
      <ul className='sui-ListBasic sui-ListBasic-justify'>
        {
          items.map((item) => <li>{item}</li>)
        }
      </ul>
    )
  }
}

ListBasic.displayName = 'ListBasic'

// Remove these comments if you need
// ListBasic.contextTypes = {i18n: React.PropTypes.object}
ListBasic.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}
// ListBasic.defaultProps = {}

export default ListBasic
