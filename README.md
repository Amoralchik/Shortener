## Description

```bash
Create account POST http://localhost:3000/user
  form: {
    username: 'string'
    email: 'string@example.com'
    password: 'password'
  };

Login POST http://localhost:3000/auth/login
  form: {
    username: 'string@example.com'
    password: 'password'
  };

Create shortlink POST http://localhost:3000/u
  form: {
    originalUrl: "https://github.com/Amoralchik/server"
  };
  response: {
    "shortName": "PlotgLFpfk",
    ...
  }

GET http://localhost:3000/u?n=PlotgLFpfk
  Redirect to "https://github.com/Amoralchik/server"
```

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# docker with postgresql and server with watch mode
yarn run docker:up
```

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
