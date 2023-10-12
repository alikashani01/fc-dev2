import express from 'express';
import { protect } from '../../middlewares/authentication.js';
import { getBooks } from '../../controllers/customer/book/list.js';
import { getBookDetails, getCurrentBook } from '../../controllers/customer/book/details.js';
import { cancel } from '../../controllers/customer/book/edit.js';
const router = express.Router();


router.route('/list').get(protect, getBooks)
router.route('/details/current').get(protect, getCurrentBook);
router.route('/details/:id').get(protect, getBookDetails);
router.route('/details/:id/cancel').patch(protect, cancel);

export default router;