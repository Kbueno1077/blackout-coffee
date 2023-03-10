import Head from "next/head";
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

      <div style={{ maxWidth: "1200px", margin: "0 auto 0" }}>
        {menu_photos_cant.map(photoNumber => {
          return (
            <Image
              key={`${photoNumber}`}
              src={`/menu_photos/${menu_photos_prefix}${photoNumber}.jpg`}
              width={200}
              loading="eager"
              height={160}
              priority
              alt={"Menu Image"}
              sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw"
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "20px",
                padding: "5px"
              }} //The point is right there!
              //OR className='w-100 h-100'
            />
          );
        })}
      </div>
    </>
  );
}
