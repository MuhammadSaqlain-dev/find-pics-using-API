import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID ux8NVxXIAV2qj0mDfK0rcQ5JlXvE9IsJ2WeNVPnWkLk",
  },
});
