import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../../models/Artist.js';


export const removeSalon = expressAsyncHandler(async(req, res) => {
    
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('Artist not found');
    artist.salon = {};
    await artist.save();
    res.json('موفق');

});