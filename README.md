# Interview Authentication Service

# Setup and run

Ensure you are running the correct version of Node.js either by running `nvm install` (if you use NVM) or by installing the correct binary from [https://nodejs.org/](https://nodejs.org/) that matches the `.nvmrc` file.

### In 'sparkol-test' dir

`npm install` --> `npm start`

### In 'sparkol-login-client' dir

`npm install` --> `npm run dev`.

# Tests

`npm test`

`npm run test:watch`

# Linting & Formatting

This repo has pre-commit hooks to run linting formatting and package auditing checks

To manually run them you can do:

`npm run lint`

`npm run prettier`

`npm audit`

# Endpoints

## POST /login

Requires the following body:

`{ username: 'username', password: 'password' }`

Usernames and passwords are hardcoded for this example, they are:

```
{
  jeff1967: 'hotdog',
  suefrank1234: 'lightbulb',
}
```

## GET /verifyToken

This endpoint is added for convenience - usually the JWT would be checked on each service with the service knowing the AUTH_SECRET

This endpoint requires an `Authorization` header including the JWT

If this route returns a 200 OK the token is valid and you can proceed with executing authenticated behaviour
