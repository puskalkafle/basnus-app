import client from "./client";

const getProperties = () => client.get("/properties");
const postProperty = (data) => client.post("/properties", data);
const postPhotos = (data) => client.post("/upload", data);

export default {
    getProperties,
    postProperty,
    postPhotos
};
