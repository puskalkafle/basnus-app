import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:1337/api",
    onUploadProgress: progressEvent => console.log(progressEvent)
});

export default apiClient;