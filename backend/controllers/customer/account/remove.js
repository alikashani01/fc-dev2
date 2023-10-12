import expressAsyncHandler from 'express-async-handler';
import Customer from '../../../models/Customer.js';


export const deleteAccount = expressAsyncHandler(async(req, res) => {
    
    const customer = await Customer.findById(req.customer._id);
    
    if (!customer) throw new Error('Customer not found!');
    
    await customer.remove();
    
    res.json('موفق');

});
