'use strict'
const Hapi = require('hapi')
const Boom = require('boom')
const Good = require('good')
const Inert = require('inert')

if (process.env.NODE_ENV !== 'production') {

  require('dotenv').config()

}

const server = new Hapi.Server()
server.connection({
  host: '0.0.0.0',
  port: process.env.PORT || 8000,
  routes: {
    cors: true,
  },
})

server.register([
  {
    register: Inert,
  },
  {
    register: Good,
    options: {
      ops: {
        interval: 5000,
      },
      reporters: {
        console: [{
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [{ log: '*', request: '*', response: '*', error: '*' }],
        }, {
          module: 'good-console',
        }, 'stdout'],
      },
    },
  },
], () => {

  server.route({
    method: 'GET',
    path: '/static/{param*}',
    handler: {
      directory: {
        path: 'static',
        lookupCompressed: true,
      },
    },
  })

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public',
        lookupCompressed: true,
      },
    },
  })

  server.start(() => {

    server.log(['info'], `Server running at: ${server.info.uri}`)

  })

})
