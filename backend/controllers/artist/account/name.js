import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../models/Artist.js';


export const editName = expressAsyncHandler(async(req, res) => {
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('Artist not found!');
    const { firstName, lastName } = req.body;
    artist.firstName = firstName;
    artist.lastName = lastName;
    artist.fullName = `${firstName} ${lastName}`;
    await artist.save();
    res.json('موفق');
});