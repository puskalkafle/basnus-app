import React, { useEffect, useState } from "react";
import Image from 'next/image';
import getpropertiesApi from "../../../api/properties";
import useApi from "../../../hooks/useApi";
import Container from "../../../src/components/common/Container";

interface Props { }
export async function getServerSideProps({ params }) {

    const data = await fetch(`http://localhost:1337/api/properties/${params.id}?populate=photos`);
    const getProperty = await data.json();
    return {
        props: { getProperty }
    }
}
export default function editProperty({ getProperty }) {
    const putPropertyApi = useApi(getpropertiesApi.putProperty);
    const deletePhotoApi = useApi(getpropertiesApi.deletePhoto);
    const [address, setAddress] = useState(getProperty.data.attributes.address);
    const [description, setDescription] = useState(getProperty.data.attributes.description);
    const [photos, setPhotos] = useState("");

    const onAddressChange = e => setAddress(e.target.value);
    const onDesciptionChange = e => setDescription(e.target.value);
    const onPhotoChange = e => setPhotos(e.target.files[0]);

    const handleSubmit = (e, id) => {
        e.preventDefault();
        const fd = new FormData();
        const data = { address, description };

        fd.append('files.photos', photos);
        fd.append('data', JSON.stringify(data));
        putPropertyApi.request(fd, id);


    };
    const handleRemove = (e, id) => {
        deletePhotoApi.request(id);
    };
    return (
        <>
            <Container>
                <form onSubmit={(e) => handleSubmit(e, getProperty.data.id)}>
                    <input placeholder="Address" defaultValue={getProperty.data.attributes.address}
                        onChange={onAddressChange} required /><br />
                    <textarea placeholder="Description" defaultValue={getProperty.data.attributes.description}
                        onChange={onDesciptionChange} required /><br />


                    <input type="file" onChange={onPhotoChange} /><br />

                    <button type="submit" >
                        Update Property
                    </button>
                </form>
                {putPropertyApi.data?.data?.id}
                {
                    getProperty.data.attributes.photos?.data?.map((photo, i) => (
                        <div key={i}>
                            <img key={i + 100} height={photo.attributes.formats.medium.height} width={photo.attributes.formats.medium.width} src={`http://localhost:1337${photo.attributes.formats.medium.url}`} />
                            <a onClick={(e) => handleRemove(e, photo.id)} style={{ 'cursor': 'pointer' }}> Remove Photo</a>
                        </div>
                    ))
                }
            </Container>
        </>)
}

