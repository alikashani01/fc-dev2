import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../../models/Artist.js';


export const removeService = expressAsyncHandler(async(req, res) => {
    
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('Artist noot found');
    const id = req.params.id;
    const service = artist.services.find(x => x._id.toString() === id);
    if (!service) throw new Error('No service');
    artist.services = artist.services.filter(x => x._id.toString() !== id);
    await artist.save();
    res.json('موفق');

});
export const removeAllServices = expressAsyncHandler(async(req, res) => {  
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('Artist noot found');
    artist.services = [];
    await artist.save();
    res.json('موفق');
});