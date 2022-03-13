import React, { useEffect, useState } from "react";
import getpropertiesApi from "../api/properties";
import useApi from "../hooks/useApi";
import Container from "../src/components/common/Container";
import Image from 'next/image';
import Link from "next/link";

export default function showProperty() {
    const getPropertiesApi = useApi(getpropertiesApi.getProperties);
    useEffect(() => {
        getPropertiesApi.request("populate=photos");
    }, []);
    return (
        <>
            <Container>
                <ul>
                    {


                        getPropertiesApi.data?.data?.map((post, i) => (
                            (<li key={post.id}>

                                {(() => {
                                    let thumbnail = post.attributes.photos.data[0]?.attributes.formats.thumbnail;
                                    return <Image width={thumbnail.width} height={thumbnail.height} src={`http://localhost:1337${thumbnail.url}`} />
                                })()}
                                <span>{post.attributes.address}</span> <Link key={i} href={`/property/${post.id}`}>Edit</Link> <Link href={`/delete/${post.id}`}>Delete</Link>
                            </li>)
                        ))
                    }
                </ul>
            </Container>
        </>
    )
}