const multer = require('multer');
const Datauri = require('datauri/parser');
const path = require('path');
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single('file');

const dUri = new Datauri();
const dataUri =req=>dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

exports.multerUploads = multerUploads;
exports.dataUri = dataUri;