/* eslint-disable import/no-extraneous-dependencies */
import multer from 'multer';
import uniqid from 'uniqid';
import path from 'path';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (file.mimetype.includes('video')) {
      cb(null, 'uploads/videos');
    } else {
      cb(null, 'uploads/images');
    }
  },
  filename(_, file, cb) {
    cb(null, `${Date.now()}-${uniqid()}${path.extname(file.originalname)}`);
  },
});
const uploadMidleware = multer({ storage });

export default uploadMidleware;
