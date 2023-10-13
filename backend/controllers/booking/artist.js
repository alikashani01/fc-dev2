import expressAsyncHandler from 'express-async-handler';
import Artist from '../../models/Artist.js';


export const getArtistDetails = expressAsyncHandler(async(req, res) => {
    const artist = await Artist.findById(req.params.id);
    if (!artist) throw new Error('Artist not found');
    res.json(artist);
});

export const getArtists = expressAsyncHandler(async(req, res) => {
    const artists = await Artist.find({});
    res.json(artists)
});