import expressAsyncHandler from 'express-async-handler';
import Customer from '../../models/Customer.js';

export const getCustomerDetails = expressAsyncHandler(async(req, res) => {
    const customer = await Customer.findById(req.params.id);
    if (!customer) throw new Error('Customer not found');
    res.json(customer);
});