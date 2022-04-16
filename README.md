# Early Node Website clone

![Early Node](apply.png)

## Description

Early Node is a job site. Admins post jobs and applicant apply for those jobs.
We are going to clone this site.

### Technologies

- Express.js, [JSON Server](https://www.npmjs.com/package/json-server)
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

We are using a json server which can found in the home directory. Just run `npm install && npm run start`
This can be found on `localhost:5000`
start the JSON server

But I have hosted the JSON server `https://early-node-json-server.herokuapp.com/` and it has been linked to the Next.js app in the api folder


##### Frontend setup

Remember to keep the backend running whiles you run the frontend if you want to use the local setup. You can open a different terminal for the frontend

- Change directory into the front end folder and install the npm packages and run the app.
  - I am using npm instead of yarn so my command is `cd frontend && npm i && npm run start `
    - You can also run the code with yarn

> We are all set, everything is running. You need to add some data for testing

If you had any issues please debug.

[JSON SERVER is live on heroku](https://early-node-json-server.herokuapp.com/)

[Website is also live on github pages](https://learnwithalfred.github.io/earlynode_clone)
