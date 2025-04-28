import multer from 'multer';
import path from 'path';

// Set the destination folder for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads'); // Files will be saved here
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name with extension
  },
});

// Initialize multer with storage configuration
const upload = multer({ storage });

export default upload;
