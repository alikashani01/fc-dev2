import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../../models/Artist.js';

export const addService = expressAsyncHandler(async(req, res) => {
    
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('Artist noot found');

    const { skill, title, description, price, hour, minute } = req.body;
    
    const titleExists = artist.services.find(x => x.title === title);

    if (titleExists) {
        throw new Error('این عنوان را قبلا به ثبت رسانده‌اید');
    } else {
        
        const service = {
            skill, 
            title, 
            description, 
            price, 
            duration: {
                hour, 
                minute,
            },
        };

        artist.services.push(service);

        await artist.save();

        res.json('موفق');

    };

});
