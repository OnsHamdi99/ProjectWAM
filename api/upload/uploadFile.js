
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
function to test the upload
*/
function test(req, res) {

        if (req.mimetype != 'zip') {
            return new Error('Wrong file type');
        }
        else {
    res.send('test');
           let unziped = unzipFile(req, res);
            //TODO add Ambre's work to test the file

            uploadFile(unziped, res);
        }
}

/* 
Function upload the received file to the server.
// then load to the database if right
*/

function uploadFile(req, res) {

//this const storage is used to specify the destination and filename of the uploaded file.

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '../plugins/uploads/');//path to save file
    },
    // then change the name of the file and make sure there are no spaces
    filename: (req, file, cb) => {
        const name = file.originalname.split(' ').join('');
        cb(null, file.originalname);
    }
});
//this const upload is used to specify the file type and size of the uploaded file.

const upload = multer({ storage: storage });
}


module.exports = uploadFile; 