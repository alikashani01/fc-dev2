import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../../models/Artist.js';



export const editTime = expressAsyncHandler(async(req, res) => {
    
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('Artist not found');
    const { day, time } = req.body;
    const currentDay = artist.schedule.find(x => x.day === day);
    const timeExists = currentDay.times.find(x => x === time);
    if (timeExists) {
        currentDay.times.filter(x => x !== time);
    } else {
        currentDay.times = [...currentDay.times, time];
    };
    artist.schedule = {
        ...artist.schedule,
        currentDay,
    };
    const updatedArtist = await artist.save(); 
    res.json(updatedArtist.schedule[0]);

});
