import express from "express";
import { protect } from "../middlewares/authentication.js";
import { getArtistDetails, getArtists } from "../controllers/booking/artist.js";
import { getCustomerDetails } from "../controllers/booking/customer.js";
import { getFreeDate } from "../controllers/booking/date.js";
import { submitBook } from "../controllers/booking/submit.js";
const router = express.Router();

router.route('/artist/list').get(getArtists);
router.route('/artist/details/:id').get(getArtistDetails);
router.route('/customer/details/:id').get(getCustomerDetails);
router.route('/date').post(protect, getFreeDate);
router.route('/submit').post(protect, submitBook);

export default router;