import express from 'express';
import { protectArtist as protect } from '../../../middlewares/authentication.js';
import { closingDay } from '../../../controllers/artist/dashboard/schedule/day.js';
import { editTime } from '../../../controllers/artist/dashboard/schedule/time.js';
const router = express.Router();

router.route('/day').patch(protect, closingDay);
router.route('/day/time').patch(protect, editTime);


export default router;