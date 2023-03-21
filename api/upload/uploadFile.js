
const multer = require('multer'); //multer is a middleware for handling multipart/form-data, which is primarily used for uploading files.
const fs = require('fs');


/*
Function to upzip the file
*/
function unzipFile(req, res) {
    const AdmZip = require('adm-zip');
    const zip = new AdmZip('./plugins/uploads/' + req.file.originalname);
    zip.extractAllTo('./plugins/uploads/', true);
    res.send('file uploaded');
}
/* 
Function upload the received file to the server.
*/

function uploadFile(req, res) {

//this const storage is used to specify the destination and filename of the uploaded file.

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './plugins/uploads/');//path to save file
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
//this const upload is used to specify the file type and size of the uploaded file.

const upload = multer({ storage: storage });
}


module.exports = uploadFile; 