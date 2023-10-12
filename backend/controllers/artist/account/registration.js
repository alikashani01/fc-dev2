import expressAsyncHandler from 'express-async-handler';
import Kavenegar from 'kavenegar';
import Artist from '../../../models/Artist.js';
import generateToken from '../../../utils/generateToken.js';

const api = Kavenegar.KavenegarApi({
    apikey: process.env.KAVENEGAR_API_KEY,
});


export const addNumber = expressAsyncHandler(async(req, res) => {

    const { mobile } = req.body;

    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
    const artistExists = await Artist.findOne({ mobile });
    
    if (artistExists) {
        
        artistExists.verificationCode = '';
        artistExists.verificationCode = verificationCode;
        artistExists.verificationCodeExpired = Date.now();
   
        api.VerifyLookup({
            receptor: '09907687159',
            // token: verificationCode,
            token: `Code:${verificationCode}`,
            template: "Verification"
        }, function(response, status) {
            console.log(response);
            console.log(status);
        });

        await artistExists.save();

        res.json({
            mobile: artistExists.mobile,
            verificationCode: artistExists.verificationCode,
        });

    } else {

        const artist = new Artist({
            mobile,
            verificationCode,
        });

        api.VerifyLookup({
            receptor: '09907687159',
            token: verificationCode,
            template: "Verification"
        }, function(response, status) {
            console.log({ response, verificationCode });
            console.log(status);
        });

        const createdArtist = await artist.save();
        res.json({
            mobile: createdArtist.mobile,
            verificationCode: createdArtist.verificationCode
        });

    };
});

export const verifyNumber = expressAsyncHandler(async(req, res) => {
    const { mobile, verificationCode } = req.body;
    
    const artist = await Artist.findOne({ mobile });
    
    if (!artist) throw new Error('کاربری پیدا نشد');
    
    const code = verificationCode.join('');
    
    if (artist.verificationCode === code) {
        
        artist.isVerified = true;
        
        artist.verificationCode = '';

        const updatedArtist = await artist.save();

        res.json({
            _id: updatedArtist._id,
            mobile: updatedArtist.mobile,
            isVerified: updatedArtist.isVerified,
            token: generateToken(updatedArtist._id),
        });

    } else {
        throw new Error('کد وارد شده نامعتبر است');
    };

});



