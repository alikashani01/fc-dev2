import expressAsyncHandler from 'express-async-handler';
import Artist from '../../../../models/Artist.js';


export const editSubSkill = expressAsyncHandler(async(req, res) => {
    
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('Artist noot found');
    
    const skill = req.body.skill;
    const alreadyAdded = artist.skills.sub.find(x => x === skill);
    
    if (alreadyAdded) {
        
        artist.skills.sub = artist.skills.sub.filter(x => x !== skill);
        await artist.save();
        res.json('موفق');

    } else {

        artist.skills.sub.push(skill);
        await artist.save();
        res.json('موفق');

    };

});