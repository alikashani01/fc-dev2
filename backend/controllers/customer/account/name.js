import expressAsyncHandler from 'express-async-handler';
import Customer from '../../../models/Customer.js';


export const editName = expressAsyncHandler(async(req, res) => {
    const customer = await Customer.findById(req.customer._id);
    if (!customer) throw new Error('customer not found!');
    const { name } = req.body;
    customer.fullName = name;
    await customer.save();
    res.json('موفق');
});
