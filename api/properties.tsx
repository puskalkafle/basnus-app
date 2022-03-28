import client from "./client";

const getProperties = (param) => client.get((!param) ? "/properties" : `/properties?${param}`);
const postProperty = (data) => client.post("/properties", data);
const putProperty = (data, id) => client.put(`/properties/${id}`, data);
const postPhotos = (data) => client.post("/upload", data);
const deletePhoto = (id) => client.delete(`/upload/files/${id}`);
//upload photo outside edit or create form
//content-manager/collectionType/api::property.property/1
{/* 
        
        <input type="file" name="files" />
                    <input type="hidden" name="ref" value="api::property.property" /> collection name
                    <input type="hidden" name="refId" value="1" /> collection > id 
                    <input type="hidden" name="field" value="photos" /> collection > id > field
          */}

export default {
    getProperties,
    postProperty,
    putProperty,
    postPhotos,
    deletePhoto
};
