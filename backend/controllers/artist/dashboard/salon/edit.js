import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../../models/Artist.js';


export const editSalon = expressAsyncHandler(async(req, res) => {
    
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('Artist not found');
    const { name, state, city, street } = req.body;
    artist.salon.name = name;
    artist.salon.state = state;
    artist.salon.city = city;
    artist.salon.street = street;
    await artist.save();
    res.json('موفق');
});

