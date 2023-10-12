import expressAsyncHandler from 'express-async-handler';
import Kavenegar from 'kavenegar';
import Artist from '../../../models/Artist.js';
import generateToken from '../../../utils/generateToken.js';

const api = Kavenegar.KavenegarApi({
    apikey: process.env.KAVENEGAR_API_KEY,
});


export const editMobile = expressAsyncHandler(async(req, res) => {
    
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('Artist not found!');
    
    // const { mobile } = req.body;
    const mobile = '09907687159';
    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
    
    artist.newMobile = mobile;
    artist.verificationCode = '';
    artist.verificationCode = verificationCode;
    artist.verificationCodeExpired = Date.now();

    api.VerifyLookup({
        receptor: mobile,
        token: verificationCode,
        template: "Verification"
    }, function(response, status) {
        console.log(response);
        console.log(status);
    });

    await artist.save();

    res.json({
        mobile: artist.mobile,
        verificationCode: artist.verificationCode,
    });

});
export const verifyMobile = expressAsyncHandler(async(req, res) => {
    const { mobile, verificationCode } = req.body;
    const artist = await Artist.findById(req.artist._id);
    if (!artist) throw new Error('کاربری پیدا نشد');
    const code = verificationCode.join('');
    if (artist.verificationCode === code) {
        artist.verificationCode = '';
        artist.mobile = artist.newMobile;
        const updatedArtist = await artist.save();
        res.json({
            _id: updatedArtist._id,
            mobile: updatedArtist.mobile,
            isVerified: updatedArtist.isVerified,
            token: generateToken(updatedArtist._id),
        })
    } else {
        throw new Error('کد وارد شده نامعتبر است');
    };
});