'use server';

import { Buffer } from 'buffer'; // Import Buffer from the 'buffer' module
import ImageKit from "imagekit";

const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY,
    urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT,
});

export const shareAction = async (formData) => {
    const file = formData.get("file");
    // const desc = formData.get("desc");

    // Convert the file to a buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes); // Convert the arrayBuffer to a Buffer instance

    // Upload the file to ImageKit
    imagekit.upload(
        {
            file: buffer,
            fileName: file.name,
            folder: "/posts", // Specify a folder path in ImageKit for better organization
            transformation: {
                pre: "w-600", // Optional transformation to resize the image
            },
        },
        function (error, result) {
            if (error) {
                console.error("Error uploading image:", error);
            } else {
                console.log("Image uploaded successfully:", result);
            }
        }
    );
};
