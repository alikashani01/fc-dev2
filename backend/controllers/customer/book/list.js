import expressAsyncHandler from 'express-async-handler';
import Customer from '../../../models/Customer.js';
import Book from '../../../models/Book.js';


export const getBooks = expressAsyncHandler(async(req, res) => {

    const customer = await Customer.findById(req.customer._id);
    
    if (!customer) throw new Error('Customer not found');

    const { status } = req.query;

    const books = await Book.find({ customer: customer._id, status }).sort({ createdAt: -1 });
    
    res.json(books);


});
