import expressAsyncHandler from 'express-async-handler';
import Customer from '../../../models/Customer.js';
import Book from '../../../models/Book.js';


export const getBookDetails = expressAsyncHandler(async(req, res) => {
    
    const customer = await Customer.findById(req.customer._id);
    
    if (!customer) throw new Error('customer not found');
    
    const book = await Book.findById(req.params.id);
    
    res.json(book);

});

export const getCurrentBook = expressAsyncHandler(async(req, res) => {

    const customer = await Customer.findById(req.customer._id);

    if (!customer) throw new Error('customer not found');

    const book = await Book.findOne({ customer: customer._id, status: 'در حال انجام' });

    res.json(book);

});
