# Backend Developer Technical Assessment

## Config Enviroment

1. **.env**: Configure your .env file using .env.example file and use your personal credentials to can use offline aws

2. **Install**: Use `npm i` to install app dependencies.

3. **Database**: Use `npm run knex:migration` to execute migration, this command will create database using your PG_CONNECTION_STRING URL on .env file

3. **DEV Enviroment**: Use `npm run dev` to raise the app on your local machine

4. **tests**: Use `npm run test` to run tests, this project will run only unit tests, but exist integration tests implementd, however integration tests enviroment is not so good for that, then I would need to enhance this enviroment.

## Online APP

- **API:** This app is online on `https://wso3gn93sb.execute-api.us-east-1.amazonaws.com/`, test all business rules there

## **Documentation:**

- **API Documentation:** https://documenter.getpostman.com/view/3980071/2sA2r7zNaT