import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../../models/Artist.js';


export const editMainSkill = expressAsyncHandler(async(req, res) => {
    
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('Artist noot found');
    
    const skill = req.body.skill;
    artist.skills.main = skill;
    const isSubSkill = artist.skills.sub.find(x => x === skill);
    if (isSubSkill) {
        artist.skills.sub = artist.skills.sub.filter(x => x !== skill);
    };
    await artist.save();
    res.json('موفق');

});

