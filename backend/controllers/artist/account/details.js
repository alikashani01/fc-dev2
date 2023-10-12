import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../models/Artist.js';


export const getArtistDetails = expressAsyncHandler(async(req, res) => {
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('Artist not found!');
    res.json(artist);
});