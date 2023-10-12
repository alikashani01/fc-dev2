import multer from 'multer';
import path from 'path';

export default multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, callback) => {
        let ext = path.extname(file.originalname);
        console.log(file.originalname)
        // if (ext !== 'jpg' && ext !== 'png' && ext !== 'jpeg') {
        //     callback(new Error('File type does not supported'), false);
        //     return;
        // };
        callback(null, true);
    },
});