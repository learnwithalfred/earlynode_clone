const express = require('express');
const jsonServer = require('json-server')
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


const server = jsonServer.create()
const router = jsonServer.router('db.json')



server.use(router)

const port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})