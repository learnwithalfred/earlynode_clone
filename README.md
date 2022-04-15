# Early Node Website clone

![Early Node](apply.png)

## Description

Early Node is a job site. Admins post jobs and applicant apply for those jobs.
We are going to clone this site.

### Technologies

- Express.js
- Next.js

### Features

- Admin Dashboard
  - Admins post jobs
  - Admins receive submitted applications
- Home page
  - Visitors see job posts
  - Visitors can apply for any of these jobs
  - We can click on any job to see the details about any of the posted jobs

### Installation

You need to install node.js, npm and next.js locally.

##### Backend setup

- Change directory into the backend folder and install npm packages. You can do it with this command `cd backend && npm install `
- We are using mongo DB as database so you need to set it up

  - First create a mongo database locally or using atlas
  - Then in you root directory of your application create a .env file. You can do it with this`touch .env` command
  - Set the CONNECTION_URL for the mongoDB example

  ```
  CONNECTION_URL : YOUR_CONNECTION_URL_GOES_HERE
  ```

- You can now stat your application with this command `npm run start`

  - ( If you encounter any challenges, it might come from MongoDB. You can debug and fix it )

##### Frontend setup

Remember to keep the backend running whiles you run the frontend. You can open a different terminal for the frontend

- Change directory into the front end folder and install the npm packages and run the app.
  - I am using npm instead of yarn so my command is `cd frontend && npm i && npm run start `
    - You can also run the code with yarn

> We are all set, everything is running. You need to add some data for testing

If you had any issues please debug.

[JSON SERVER is live on heroku](https://early-node-json-server.herokuapp.com/)

[Website is also live on github pages](https://learnwithalfred.github.io/earlynode_clone)
