const cloudinary = require("cloudinary").v2;

export async function GetImagesService() {
  cloudinary.config({
    cloud_name: "dub477vzt",
    api_key: "763641954252769",
    api_secret: "Qs2_7_dklt-9I8yskgkoSqELxhA",
    secure: true,
  });

  const resources = await cloudinary.search
    .expression(`folder:blackOut`)
    .execute();

  const jsonResources = JSON.stringify(resources);

  return jsonResources;
}
