import Head from "next/head";
import Image from "next/image";
import React from "react";
import {GetImagesService} from "@/helpers/services";

export default function Home({assets}) {
    return (
        <>
        <Head>
            <title>Black Coffee Menú</title>
            <meta name="description" content="Black Coffee Menú"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/bcicon.ico"/>
        </Head>
        <div style={{maxWidth: "1200px", margin: "0 auto 0"}}>
            {assets.resources.map((asset, number) => {
                return (<Image
                    key={`${number}`}
                    src={asset.secure_url}
                    width={200}
                    loading="eager"
                    height={160}
                    priority
                    quality={100}
                    alt={"Menu Image"}
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw, 33vw"
                    style={{
                        height: "100%", width: "100%", borderRadius: "20px", padding: "5px",
                    }}
                    //The point is right there!
                    //OR className='w-100 h-100'
                />);
            })}
        </div>
    </>);
}

export async function getServerSideProps() {
    const jsonResponse = await GetImagesService();
    const parseResponse = JSON.parse(jsonResponse);

    parseResponse.resources.sort((a, b) => {
        if (a.filename < b.filename) {
            return -1;
        }

        if (a.filename > b.filename) {
            return 1;
        }
        return 0;
    });

    return {props: {assets: parseResponse}};
}
