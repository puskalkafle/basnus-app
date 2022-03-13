import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import getpropertiesApi from "../../api/properties";
import useApi from "../../hooks/useApi";
import Container from "../../src/components/common/Container";



export default function detailProperty() {
    const rounter = useRouter();
    const pid = rounter.query.propertyDetailId;
    console.log(pid);
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
                property detail id {pid}
            </Container>
        </>)
}