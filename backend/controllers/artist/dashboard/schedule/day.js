import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../../models/Artist.js';


export const closingDay = expressAsyncHandler(async(req, res) => {

    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('Artist not found');

    const { day } = req.body;
    const currentDay = artist.schedule.find(x => x.day === day);
    if (!currentDay) throw new Error('Day not found');

    currentDay.isClosed = !currentDay.isClosed
    await artist.save();

    res.json('موفق');

});