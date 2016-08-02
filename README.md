# Gatsby Starter Hapi

Created with [Gatsby](https://github.com/gatsbyjs/gatsby)

#### Quick Start

```bash
# Install Gatsby globally
npm install -g gatsby

# Export ENV vars
echo MY_ENV_VAR=abc > .env

# Install dependencies
npm install

# Develop (with hot-reloading)
npm run dev

# Use `npm version` to cut new versions for deployments
# https://docs.npmjs.com/cli/version
npm version minor

# Build production assets
npm run build

# Serve production assets
npm start
```

The site will run on http://localhost:8000.

#### Deployment

Install the [Heroku Toolbelt CLI](https://toolbelt.heroku.com/).

```bash
# Init git remotes
heroku git:remote -a gatsby-starter-hapi -r prod
heroku git:remote -a gatsby-starter-hapi-staging -r staging

# Deploy to staging/dev remote
git push staging master

# Promote current staging to prod (if you setup a Heroku pipeline)
npm run deploy-prod

# Deploy current version on master to prod
git push prod master
```
