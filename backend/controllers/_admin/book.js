import expressAsyncHandler from 'express-async-handler';
import Book from '../../models/Book.js';


export const deleteBooks = expressAsyncHandler(async(req, res) => {
    
    await Book.deleteMany();
    
    res.json('موفق');

});

export const getBooks = expressAsyncHandler(async(req, res) => {
    
    const books = await Book.find({});
    
    res.json(books);

});
