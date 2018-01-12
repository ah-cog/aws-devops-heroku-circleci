# AWS & DevOps: Buggy Heroku App Exercise

This repository contains an applicaiton that has some issues that need to be fixed before it can be deployed to Heroku.

* Dependency missing from `package.json`.

  Removed `ejs`:

  ```
  "ejs": "~2.5.7",
  ```

  Produces error and stacktrace:

  ```
  Error: Cannot find module 'ejs'
    at Function.Module._resolveFilename (module.js:469:15)
    at Function.Module._load (module.js:417:25)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at new View (/Users/mgub/Workspace/Checkouts/Horizons/aws-devops-heroku-buggy/node_modules/express/lib/view.js:79:30)
    at EventEmitter.render (/Users/mgub/Workspace/Checkouts/Horizons/aws-devops-heroku-buggy/node_modules/express/lib/application.js:570:12)
    at ServerResponse.render (/Users/mgub/Workspace/Checkouts/Horizons/aws-devops-heroku-buggy/node_modules/express/lib/response.js:971:7)
    at /Users/mgub/Workspace/Checkouts/Horizons/aws-devops-heroku-buggy/app.js:43:7
    at Layer.handle_error (/Users/mgub/Workspace/Checkouts/Horizons/aws-devops-heroku-buggy/node_modules/express/lib/router/layer.js:71:5)
    at trim_prefix (/Users/mgub/Workspace/Checkouts/Horizons/aws-devops-heroku-buggy/node_modules/express/lib/router/app.js:315:13)
  ```

* Production dependency marked as dev dependency.

  Moved `express` into `devDependencies`:

  ```
  "devDependencies": {
    "express": "~4.15.5",
  }
  ```

  Runs fine locally, but when deployed, produces "Internal Server Error" error.

* Missing start script.

  Removed both the `Procfile` and the `start` script field in `package.json`. This can be corrected by adding at least the `start` field, but a `Procfile` should be included to meet best practices for deploying on Heroku.

* Application listens to static port instead of reading `process.env.PORT`.

  In `app.js`, removed the line:

  ```
  var port = parseInt(process.env.PORT, 10) || 5000
  ```

  Replaced it with:

  ```
  var port = 5000
  ```
