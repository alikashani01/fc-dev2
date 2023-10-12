import express from 'express';
import { protectArtist } from '../../../middlewares/authentication.js';
import { addService } from '../../../controllers/artist/dashboard/service/add.js';
import { editService } from '../../../controllers/artist/dashboard/service/edit.js';
import { removeAllServices, removeService } from '../../../controllers/artist/dashboard/service/remove.js';

const router = express.Router();

router.route('/add').post(protectArtist, addService);
router.route('/details/:id')
.patch(protectArtist, editService)
.delete(protectArtist, removeService);
router.route('/remove-all').delete(protectArtist, removeAllServices);


export default router;