import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'


class NotFound extends Component {

  render () {

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>
          The page you are looking for was not found.
        </h2>
        <h4>
          ( Hint: try
          <Link
            to={prefixLink('/')}
          >
            &nbsp;this one.
          </Link>
          &nbsp; ;-)
        </h4>
      </div>
    )

  }

}


export default NotFound
