import axios from 'axios';

export default axios.create({
    baseURL: 'https://early-node-json-server.herokuapp.com',
});