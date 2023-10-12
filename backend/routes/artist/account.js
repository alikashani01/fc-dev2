import express from "express";
import { protectArtist as protect } from "../../middlewares/authentication.js";
import Artist from '../../models/Artist.js';
import upload from '../../utils/multer.js';
import cloudinaryV2 from "../../utils/cloudinary.js";
import { getArtistDetails } from "../../controllers/artist/account/details.js";
import { deleteAccount } from "../../controllers/artist/account/remove.js";
import { activation } from "../../controllers/artist/account/activation.js";
import { editName } from "../../controllers/artist/account/name.js";
import { editMobile, verifyMobile } from "../../controllers/artist/account/mobile.js";
import { addNumber, verifyNumber } from "../../controllers/artist/account/registration.js";
const router = express.Router();


router.route('/details')
.get(protect, getArtistDetails)
.delete(protect, deleteAccount);
// Activation
router.route('/activation').patch(protect, activation)
// Edit
router.route('/name').patch(protect, editName);
router.route('/mobile/edit').patch(protect, editMobile);
router.route('/mobile/verify').patch(protect, verifyMobile);
// Registration
router.route('/registration/add').post(addNumber)
router.route('/registration/verify').patch(verifyNumber);
// Photo
router.post('/photo', protect, upload.single('photo'), async(req, res) => {
    try {
        const artist = await Artist.findById(req.artist._id);
        if (!artist) throw new Error('Artist not found');

        const result = await cloudinaryV2.uploader.upload(req.file.path);
        if (artist.cloudinary_id) {
            await cloudinaryV2.uploader.destroy(artist.cloudinary_id);
            await cloudinaryV2.uploader.destroy(artist.photo);
            artist.cloudinary_id = '';
            artist.photo = '';
        };
        artist.cloudinary_id = result.public_id;
        artist.photo = result.secure_url;
        await artist.save();
        res.json('photo uploaded successfully');
    } catch (error) {
        throw new Error(error);
    };
});
router.delete('/photo', protect, upload.single('photo'), async(req, res) => {
    try {
        const artist = await Artist.findById(req.artist._id);
        if (!artist) throw new Error('Artist not found');

        if (artist.cloudinary_id) {
            await cloudinaryV2.uploader.destroy(artist.cloudinary_id);
            await cloudinaryV2.uploader.destroy(artist.photo);
            artist.cloudinary_id = '';
            artist.photo = '';
        };
        await artist.save();
        res.json('photo removed successfully');
    } catch (error) {
        throw new Error(error);
    };
});

export default router;