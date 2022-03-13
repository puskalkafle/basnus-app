import client from "./client";

const getProperties = (param) => client.get((!param) ? "/properties" : `/properties?${param}`);
const postProperty = (data) => client.post("/properties", data);
const putProperty = (data, id) => client.put(`/properties/${id}`, data);
const postPhotos = (data) => client.post("/upload", data);

export default {
    getProperties,
    postProperty,
    putProperty,
    postPhotos
};
