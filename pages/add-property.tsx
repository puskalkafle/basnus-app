import React, { useEffect, useState } from "react";
import getpropertiesApi from "../api/properties";
import useApi from "../hooks/useApi";
import Container from "../src/components/common/Container";



export default function addProperty() {
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState("");

  const onAddressChange = e => setAddress(e.target.value);
  const onDesciptionChange = e => setDescription(e.target.value);
  const onPhotoChange = e => setPhotos(e.target.files[0]);

  const postPropertyApi = useApi(getpropertiesApi.postProperty);

  const handleSubmit = e => {
    e.preventDefault();
    const fd = new FormData();
    const data = { address, description };

    fd.append('files.photos', photos);
    fd.append('data', JSON.stringify(data));
    postPropertyApi.request(fd);
  };
  return (
    <>
      <Container>
        <form>
          <input placeholder="Address" value={address}
            onChange={onAddressChange} required /><br />
          <textarea placeholder="Description" value={description}
            onChange={onDesciptionChange} required /><br />
          <input type="file" onChange={onPhotoChange} /><br />
          <button type="submit" onClick={handleSubmit}>
            Create Property
          </button>
        </form>
      </Container>
    </>)
}