import expressAsyncHandler from 'express-async-handler';
import Artist from '../../models/Artist.js';


export const getArtistDetails = expressAsyncHandler(async(req, res) => {
    const artist = await Artist.findById(req.params.id);
    if (!artist) throw new Error('Artist not found');
    res.json(artist);
});
export const getArtists = expressAsyncHandler(async(req, res) => {
    const { state, city, skill } = req.query;
    const query = {
        'salon.state': state,
        'salon.city': city,
        // 'skills.main': skill,
        // 'skills.sub': [skill],
    };
    Artist.find(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(results);
        }
    });
});