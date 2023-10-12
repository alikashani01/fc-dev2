import express from "express";
import { protect } from "../../middlewares/authentication.js";
import { addNumber, verifyNumber } from "../../controllers/customer/account/registration.js";
import { getCustomerDetails } from "../../controllers/customer/account/details.js";
import { deleteAccount } from "../../controllers/customer/account/remove.js";
import { editMobile, verifyMobile } from "../../controllers/customer/account/mobile.js";
import { editName } from "../../controllers/customer/account/name.js";
const router = express.Router();

// Registration:
router.route('/registration/add').post(addNumber)
router.route('/registration/verify').patch(verifyNumber);

// Details/Remove:
router.route('/details')
.get(protect, getCustomerDetails)
.delete(deleteAccount);

// Name:
router.route('/name').patch(protect, editName);

// Mobile:
router.route('/mobile/edit').patch(protect, editMobile);
router.route('/mobile/verify').patch(protect, verifyMobile);

export default router;