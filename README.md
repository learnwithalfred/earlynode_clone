# earlynode_clone

earlynode clone 3

1 set up react app

mkdir earlyNode
mkdir server for database

`npx create-react-app frontend `

2.  lets set up our routes

home
details
admin

we will use react reouter dom for that

but befrore we do that we will like to set up our pages

in src

componets
pages

page setup is very crutial so that you can easily maintain your apps once they become big

admin
home
details

in home
index.js

rmb to use shortcuts

sfc
imr

rmb we are creating 3 pages cos the last apge admin will let us see the submitted applications

now lets use react router dom to do our routing

1 install react router dom

yarn add react-router-dom

or npm i react-router-dom

clean up app.js
and set up routing

in app.js lets import all the pages

follow the react router documentaion to set up routing

lets add 404 for error pages

now we have our front end setup

lets talk about seting up our server

we will use json server
follow the documentation
https://www.npmjs.com/package/json-server

1. set up a server directory and do npm init -y

add
it is in the documentation

    "start":"json-server --watch db.json --port 2021"

to jso file

lets play with the data with postman to see if everything is working

ok

everything setup succesffuly

lets start merging the backend with the fromend

there are sevearal ways

but i will like to keep things simple

so am going to create a folder in the react file and call in api

so in frontend/src create a folder called api
and add this file index.js

we will use axios for calling apis

install axios

come to the app.js

define a fucntion that calls the api

const fetchJobs = async () => {
const response = await api.get("/jobs");
console.log(response.data);
};
fetchJobs();

now lets add the data to our app
we will use react hooks for handling api calls

1 import useState

const [jobs, setJobs] = useState([]);

current state is jobs

thenn setJobs will handle the state change

now lets add details page

1.<Link to={{ pathname: `/jobs/${id}`, state: { jobs: props.job } }}>
    </>

this link to the details page

we will use withrouter component

lets now add the search functionality on the left of the details page

part 2

application from
crud
admin page view


