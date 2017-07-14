var express = require('express');
var cloudinary = require('cloudinary');
var fs = require('fs');
var dotenv = process.env.NODE_ENV == "production"
    ? null // Heroku already has its own way of reading config vars
    : require('dotenv').config(); // read .env file (.gitignore-d)

var imagesApi = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

imagesApi.post('/', function (req, res) {
    console.log(req.files)
    // fs.writeFile(path, new Buffer(req.body.data, "base64"), function (result, err) {
    //     cloudinary.uploader.upload(path, function (result) {
    //         cake.image = result.url;
    //         cake.croppedImage = cake.image.replace("image/upload/", "image/upload/c_fill,h_480,w_480/");
    //         cake.save(function (err, cake) {
    //             res.json(cake);
    //             fs.unlink(path);
    //         });
    //     });
    // });
});

module.exports = imagesApi;
