import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadImage = async (pdf_path) => {
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    resource_type: "auto",
  };

  try {
    // Upload the image
    if (!pdf_path) {
      return;
    }
    const result = await cloudinary.uploader.upload(pdf_path, options);
    console.log(result);
    console.log(result.url);
    return result;
  } catch (error) {
    console.error(error);
    fs.unlinkSync(pdf_path); // remove the locally saved file path
  }
};

export { uploadImage };
