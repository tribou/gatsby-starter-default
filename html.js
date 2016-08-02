import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import Variables from './global-variables.js'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({

  propTypes () {

    return {
      title: React.PropTypes.string,
    }

  },
  render () {

    const title = DocumentTitle.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {

      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require('!raw!./public/styles.css'),
          }}
        />
      )

    }

    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0 maximum-scale=1.0'
          />
          <meta
            name='description'
            content={config.siteDescription}
          />
          <meta
            property='og:description'
            content={config.siteDescription}
          />
          <meta
            property='og:image'
            content={config.siteUrl + config.siteLogo}
          />
          <meta property='og:image:width' content={config.siteLogoWidth} />
          <meta property='og:image:height' content={config.siteLogoHeight} />
          <meta property='og:url' content={config.siteUrl} />
          <meta name='apple-mobile-web-app-title' content={config.appTitle} />
          <meta name='application-name' content={config.appTitle} />
          <meta name='msapplication-TileColor' content={Variables.colorTheme} />
          <meta name='msapplication-TileImage' content={config.siteLogo} />
          <meta name='theme-color' content={Variables.colorTheme} />
          <meta property='og:title' content={title} />
          <title>{title}</title>
          <link
            rel='shortcut icon'
            sizes={config.faviconSizes}
            href={config.favicon}
          />
          <link
            rel='shortcut icon'
            sizes={config.siteIconSize}
            href={config.siteIcon}
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href={config.siteLogo180}
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href={config.siteLogo152}
          />
          {css}
        </head>
        <body>
          <div
            id='react-mount'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )

  },

})
