const cloudinary = require('cloudinary').v2;
require('dotenv').config(); 

if (
    !process.env.CLOUDINARY_CLOUD_NAME ||
    !process.env.CLOUDINARY_API_KEY ||
    !process.env.CLOUDINARY_API_SECRET
) {
    console.error('Error: Cloudinary environment variables (CLOUD_NAME, API_KEY, API_SECRET) are missing!');
}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true 
});

module.exports = cloudinary;