const cloudinary = require("cloudinary").v2;

export async function GetImagesService() {
    cloudinary.config({
        cloud_name: "das9jgkep",
        api_key: "859843263784411",
        api_secret: "SjpROD-jgfjX7NRlHcdO9yCZVZU",
        secure: true,
    });

    const resources = await cloudinary.search
        .expression(`folder:blackOut`)
        .execute();

    const jsonResources = JSON.stringify(resources);
    return jsonResources;
}
