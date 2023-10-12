import express from "express";
import { deleteArtists, deleteCustomers } from "../../controllers/_admin/users.js";
const router = express.Router();


router.route('/artist/list').delete(deleteArtists);

router.route('/customer/list').delete(deleteCustomers);


export default router;