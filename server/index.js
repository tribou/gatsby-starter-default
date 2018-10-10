// @flow

"use strict";

const Hapi = require("hapi");
const inert = require("inert");
const vision = require("vision");

// Plugins
const httpsRedirectPlugin = require("./plugins/httpsRedirect");
const logger = require("./plugins/logger");
const staticContent = require("./plugins/staticContent");

const { NODE_ENV, PORT, SPARKPOST_API_KEY } = process.env;

// Register Hapi plugins
const plugins = [inert, vision, httpsRedirectPlugin, logger, staticContent];

async function startServer() {
  const server = new Hapi.Server({
    host: "0.0.0.0",
    port: PORT || 8000,
    routes: {
      cors: true,
      security: true,
    },
  });

  await server.register(plugins);

  await server.start();

  // Using console.log for server logs for simplicity
  /* eslint-disable no-console */
  console.log("\n");
  console.log(`Server running at ${server.info.uri}`);
  if (NODE_ENV) console.log(`NODE_ENV: ${NODE_ENV}`);
  console.log("\n");
  /* eslint-enable no-console */
}

startServer();

module.exports = startServer;
