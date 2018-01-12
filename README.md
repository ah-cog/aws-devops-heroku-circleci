# AWS & DevOps: Buggy Heroku App Exercise

This repository contains an applicaiton that has some issues that need to be fixed before it can be deployed to Heroku.

* Dependency missing from `package.json`.

  Removed `express`:

  ```
  "express": "~4.15.5",
  ```

* Production dependency marked as dev dependency.

  Moved `body-parser` into `devDependencies`:

  ```
  "devDependencies": {
    "body-parser": "~1.18.2"
  }
  ```

* Missing start script.

  Removed both the `Procfile` and the `start` script field in `package.json`. This can be corrected by adding at least the `start` field, but a `Procfile` should be included to meet best practices for deploying on Heroku.

* Application listens to static port instead of reading `process.env.PORT`.

  In `index.js`, removed the line:

  ```
  var port = normalizePort(process.env.PORT || "5000")
  ```

  Replaced it with:

  ```
  var port = 5000
  ```
