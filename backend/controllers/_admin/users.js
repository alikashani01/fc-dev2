import expressAsyncHandler from 'express-async-handler';
import Artist from '../../models/Artist.js';
import Customer from '../../models/Customer.js';


export const deleteArtists = expressAsyncHandler(async(req, res) => {
    
    await Artist.deleteMany();
    
    res.json('موفق');

});

export const deleteCustomers = expressAsyncHandler(async(req, res) => {
    
    await Customer.deleteMany();
    
    res.json('موفق');

});

// export const getCustomerBook = expressAsyncHandler(async(req, res) => {
    
//     const books = await Book.find({ customer: })
    
//     res.json('موفق');

// });