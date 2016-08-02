import React from 'react'

import '../css/app.css'


module.exports = React.createClass({

  propTypes () {

    return {
      children: React.PropTypes.any,
    }

  },

  render () {

    return this.props.children

  },

})
