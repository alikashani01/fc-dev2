import expressAsyncHandler from 'express-async-handler';
import Kavenegar from 'kavenegar';
import Customer from '../../../models/Customer.js';
import generateToken from '../../../utils/generateToken.js';

const api = Kavenegar.KavenegarApi({
    apikey: process.env.KAVENEGAR_API_KEY,
});
export const addNumber = expressAsyncHandler(async(req, res) => {

    const { mobile } = req.body;
    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
    const customerExists = await Customer.findOne({ mobile });
    
    if (customerExists) {
        
        customerExists.verificationCode = '';
        customerExists.verificationCode = verificationCode;
        customerExists.verificationCodeExpired = Date.now();
   
        api.VerifyLookup({
            receptor: mobile,
            token: verificationCode,
            template: "Verification"
        }, function(response, status) {
            console.log(response);
            console.log(status);
        });

        await customerExists.save();

        res.json({
            mobile: customerExists.mobile,
            verificationCode: customerExists.verificationCode,
        });

    } else {

        const customer = new Customer({
            mobile,
            verificationCode,
        });

        api.VerifyLookup({
            receptor: mobile,
            token: verificationCode,
            template: "Verification"
        }, function(response, status) {
            console.log({ response, verificationCode });
            console.log(status);
        });

        const createdCustomer = await customer.save();
        res.json({
            mobile: createdCustomer.mobile,
            verificationCode: createdCustomer.verificationCode
        });
        
    };

});
export const verifyNumber = expressAsyncHandler(async(req, res) => {
    const { mobile, verificationCode } = req.body;
    const customer = await Customer.findOne({ mobile });
    if (!customer) throw new Error('کاربری پیدا نشد');
    const code = verificationCode.join('');
    if (customer.verificationCode === code) {
        
        customer.isVerified = true;
        customer.verificationCode = '';

        const updatedCustomer = await customer.save();

        res.json({
            _id: updatedCustomer._id,
            mobile: updatedCustomer.mobile,
            isVerified: updatedCustomer.isVerified,
            token: generateToken(updatedCustomer._id),
        });

    } else {
        throw new Error('کد وارد شده نامعتبر است');
    };
});



