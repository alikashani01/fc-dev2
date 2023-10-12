import express from 'express';
import { protectArtist } from '../../../middlewares/authentication.js';
import { editMainSkill } from '../../../controllers/artist/dashboard/skill/main.js';
import { editSubSkill } from '../../../controllers/artist/dashboard/skill/sub.js';
const router = express.Router();

router.route('/main').patch(protectArtist, editMainSkill);
router.route('/sub').patch(protectArtist, editSubSkill);


export default router;