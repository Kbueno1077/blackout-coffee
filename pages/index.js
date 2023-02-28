import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

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
        <div style={{ height: "100vh" }}>
          <embed
            src="BLACKOUT_MENU.pdf#view=fitW&zoom=80"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>
      </main>
    </>
  );
}
