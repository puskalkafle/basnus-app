import React, { useEffect, useState } from "react";
import getpropertiesApi from "../api/properties";
import useApi from "../hooks/useApi";
import Container from "../src/components/common/Container";

export default function showProperty() {
    const getPropertiesApi = useApi(getpropertiesApi.getProperties);
    useEffect(() => {
        getPropertiesApi.request();
    }, []);
    return (
        <>
            <Container>
                <ul>
                    {

                        getPropertiesApi.data?.data?.map((post) => (
                            <li key={post.id}>{post.attributes.address}</li>
                        ))
                    }
                </ul>
            </Container>
        </>
    )
}