import express from "express";
import { deleteBooks, getBooks } from "../../controllers/_admin/book.js";
const router = express.Router();


router.route('/list')
.get(getBooks)
.delete(deleteBooks);


export default router;