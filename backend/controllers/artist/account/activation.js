import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../models/Artist.js';


export const activation = expressAsyncHandler(async(req, res) => {
    
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('Artist noot found');
    
    artist.isActive = !artist.isActive;

    const updatedArtist = await artist.save();

    const message = updatedArtist.isActive ? 'Activated' : 'Dectivated';
    res.json(message);

});