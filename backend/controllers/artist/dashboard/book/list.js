import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../../models/Artist.js';
import Book from '../../../../models/Book.js';


export const getBooks = expressAsyncHandler(async(req, res) => {
    
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('Artist not found');
    try {     
        const { status, sort, current } = req.query;
        const newest = sort === 'newest';
        const oldest = sort === 'oldest';
        let sortQuery = {};
        if (newest) {
            sortQuery.createdAt = -1;
        } else if (oldest) {
            sortQuery.createdAt = +1;
        };
        if (!status) {
            const books = await Book.find({ artist: artist._id })
            res.json(books);
        } else if (status && !current) {
            const books = await Book.find({ artist: artist._id, status }).sort(sortQuery);
            res.json(books);
        };
        
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', error: err.message });
    };
});
