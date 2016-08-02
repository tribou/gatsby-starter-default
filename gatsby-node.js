import Path from 'path'
import Autoprefixer from 'autoprefixer'
import PreCSS from 'precss'
import Calc from 'postcss-calc'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import GlobalVariables from './global-variables.js'

exports.modifyWebpackConfig = function modifyWebpackConfig (config, env) {

  let cssLoader
  let imageLoader

  if (env === 'develop') {

    cssLoader = 'style!css?modules&camelCase&importLoaders=1'
              + '&localIdentName=[name]__[local]__[hash:base64:3]'
              + '!postcss'

    imageLoader = 'url-loader?limit=10000'

  }
  else {

    cssLoader = 'css?modules&camelCase&minimize&importLoaders=1!postcss'
    cssLoader = ExtractTextPlugin.extract(cssLoader)

    config.plugin('extract-text', ExtractTextPlugin, (plugins) => {

      return [
        'styles.css',
      ]

    })

    // imageLoader = 'file-loader!image-webpack'
    imageLoader = 'url-loader?limit=10000'

  }

  config._config.postcss = () => {

    return [
      PreCSS({
        variables: {
          variables: GlobalVariables,
        },
        mixins: {
          mixinsFiles: Path.resolve(__dirname, './css/mixins.css'),
        },
      }),
      Calc(),
      Autoprefixer,
    ]

  }

  config.removeLoader('css')
  config.loader('css', {
    test: /\.css$/,
    loader: cssLoader,
  })

  config.removeLoader('images')
  config.loader('images', {
    test: /\.(gif|jpeg|jpg|png|svg)$/,
    loader: imageLoader,
  })

  config.loader('mp4', {
    test: /\.mp4$/,
    loader: 'file',
  })

  config.loader('otf', {
    test: /\.otf$/,
    loader: 'file',
  })

  config.plugin('compression', CompressionPlugin, (plugins) => {

    return [{
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|json|ico|map|xml|txt|svg|eot|otf|ttf|woff|woff2)$/,
      threshold: 10000,
      minRatio: 0.8,
    }]

  })

  return config

}
