import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

export default class Index extends React.Component {

  render () {

    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <h1>
            Hi people
          </h1>
          <p>Welcome to your new Gatsby site</p>
        </div>
      </DocumentTitle>
    )

  }

}
