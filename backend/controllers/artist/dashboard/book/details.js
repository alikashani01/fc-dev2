import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../../models/Artist.js';
import Book from '../../../../models/Book.js';


export const getBookDetails = expressAsyncHandler(async(req, res) => {
    
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('Artist not found');
    const book = await Book.findById(req.params.id);
    res.json(book);

});
export const getCurrentBook = expressAsyncHandler(async(req, res) => {
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('artist not found');
    const book = await Book.findOne({ artist: artist._id, status: 'در حال انجام' });
    if (book) {
        res.json(book);
    } else {
        res.json({});
    };
});
