import axios from "axios";

// const url = "  http://localhost:5000/jobsList";

// export const fetchPosts = () => axios.get(url);
// export const createPost = (newJob) => axios.post(url, newJob);
// export const updatePost = (id, updatedPost) =>
//   axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
 

export default axios.create({
  baseURL: "http://localhost:5000/jobsList",
});