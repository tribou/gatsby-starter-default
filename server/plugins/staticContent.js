// @flow

module.exports = {
  name: "staticContent",
  version: "1.0.0",
  register: (server /* : Object */) => {
    server.route({
      method: "GET",
      path: "/{param*}",
      handler: {
        directory: {
          path: "public",
          lookupCompressed: true,
        },
      },
    });
  },
};
