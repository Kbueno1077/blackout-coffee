import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const menu_photos_prefix = "BLACKOUT_MENU_";
const menu_photos_cant = [1, 2, 3, 4, 5, 6, 7];

export default function Home() {
  return (
    <>
      <Head>
        <title>Black Coffee Menú</title>
        <meta name="description" content="Black Coffee Menú" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bcicon.ico" />
      </Head>
      <main className={styles.main}>
        {menu_photos_cant.map(photoNumber => {
          return (
            <div
              key={`${photoNumber}`}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
              }}
            >
              <img
                style={{ objectFit: "contain" }}
                src={`/menu_photos/${menu_photos_prefix}${photoNumber}.jpg`}
              />
            </div>
          );
        })}
      </main>
    </>
  );
}
