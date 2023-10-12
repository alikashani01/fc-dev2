import expressAsyncHandler from 'express-async-handler';
import Kavenegar from 'kavenegar';
import Customer from '../../../models/Customer.js';
import generateToken from '../../../utils/generateToken.js';

const api = Kavenegar.KavenegarApi({
    apikey: process.env.KAVENEGAR_API_KEY,
});


export const editMobile = expressAsyncHandler(async(req, res) => {
    
    const customer = await Customer.findById(req.customer._id);
    if (!customer) throw new Error('Customer not found!');
    
    const { mobile } = req.body;

    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
    
    customer.newMobile = mobile;
    customer.verificationCode = '';
    customer.verificationCode = verificationCode;
    customer.verificationCodeExpired = Date.now();

    api.VerifyLookup({
        receptor: mobile,
        token: verificationCode,
        template: "Verification"
    }, function(response, status) {
        console.log(response);
        console.log(status);
    });

    await customer.save();

    res.json({
        mobile: customer.mobile,
        verificationCode: customer.verificationCode,
    });

});

export const verifyMobile = expressAsyncHandler(async(req, res) => {
    const { verificationCode } = req.body;
    const customer = await Customer.findById(req.customer._id);
    if (!customer) throw new Error('کاربری پیدا نشد');
    const code = verificationCode.join('');
    if (code) {
        if (customer.verificationCode === code) {
            customer.verificationCode = '';
            const updatedCustomer = await customer.save();
            res.json({
                _id: updatedCustomer._id,
                mobile: updatedCustomer.mobile,
                token: generateToken(updatedCustomer._id),
            })
        } else {
            throw new Error('کد وارد شده نامعتبر است');
        };
    }
});
