import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../../models/Artist.js';


export const editService = expressAsyncHandler(async(req, res) => {
    
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('Artist noot found');

    const id = req.params.id;
    const service = artist.services.find(x => x._id.toString() === id);
    if (!service) throw new Error('No service');
    const { skill, title, description, price, hour, minute } = req.body;
    service.skill = skill;
    service.title = title;
    service.description = description;
    service.price = price;
    service.duration = {
        hour,
        minute,
    };
    await artist.save();
    res.json('موفق');

});
