// Libraries
import express from "express";
import passport from "passport";
import multer from "multer";

// Database modal
import { ImageModel } from "../../database/allModels";

// utilities
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

// multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });


/*
Route     /
Des       upload given image to S3 bucket and return saves file link to mongodb   
Params    id
Access    Public
Method    POST
*/

Router.post("/", upload.single("file"), async (req, res) => {
    try {
      const file = req.file;
  
    // s3 bucket options 
    const bucketOptions={
      Bucket: "zomatoproject221",
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read", // Access Control List
      };

      const uploadImage = await s3Upload(bucketOptions);
  
      return res.status(200).json({ uploadImage });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

export default Router;






