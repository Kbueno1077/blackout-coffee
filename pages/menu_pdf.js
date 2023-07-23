import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

export default function Menu_PDF() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <Head>
        <title>Black Coffee Menú</title>
        <meta name="description" content="Black Coffee Menú" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bcicon.ico" />
      </Head>

      <main className={styles.main}>
        <div
          style={{
            height: "120px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{ fontFamily: "monospace", fontSize: 100, color: "silver" }}
          >
            THIS IS AN OUTDATED MENU
          </h1>
        </div>
        <div style={{ height: "100vh" }}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
            <Viewer
              fileUrl="BLACKOUT_MENU.pdf"
              plugins={[defaultLayoutPluginInstance]}
            />
            ;
          </Worker>
        </div>
      </main>
    </>
  );
}
