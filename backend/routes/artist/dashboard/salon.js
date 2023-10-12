import express from 'express';
import { protectArtist as protect } from '../../../middlewares/authentication.js';
import { editSalon } from '../../../controllers/artist/dashboard/salon/edit.js';
import { removeSalon } from '../../../controllers/artist/dashboard/salon/remove.js';
const router = express.Router();


router.route('/')
.patch(protect, editSalon)
.delete(protect, removeSalon);



export default router;