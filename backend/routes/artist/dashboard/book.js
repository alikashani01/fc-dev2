import express from 'express';
import { protectArtist as protect } from '../../../middlewares/authentication.js';
import { getBooks } from '../../../controllers/artist/dashboard/book/list.js';
import { getBookDetails, getCurrentBook } from '../../../controllers/artist/dashboard/book/details.js';
import { start, end, cancel } from '../../../controllers/artist/dashboard/book/edit.js';

const router = express.Router();

router.route('/').get(protect, getBooks);
router.route('/details/current-book').get(protect, getCurrentBook);
router.route('/details/:id').get(protect, getBookDetails);
router.route('/:id/start').patch(protect, start);
router.route('/:id/end').patch(protect, end);
router.route('/:id/cancel').patch(protect, cancel);


export default router;