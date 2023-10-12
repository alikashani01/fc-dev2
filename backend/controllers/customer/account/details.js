import expressAsyncHandler from 'express-async-handler';
import Customer from '../../../models/Customer.js';


export const getCustomerDetails = expressAsyncHandler(async(req, res) => {
    const customer = await Customer.findById(req.customer._id);
    if (!customer) throw new Error('Customer not found!');
    res.json(req.customer);
});

export const activation = expressAsyncHandler(async(req, res) => {
    const customer = await Customer.findById(req.customer._id);
    if (!customer) throw new Error('کاربری پیدا نشد');
    customer.isActive = !customer.isActive;
    await customer.save();
    res.json('موفق');
});