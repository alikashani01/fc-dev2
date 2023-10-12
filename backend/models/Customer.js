import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const CustomerSchema = new Schema({
    fullName: { type: String },
    photo: { type: String },
    cloudinary_id: { type: String },
    mobile: { type: String },
    newMobile: { type: String },
    verificationCode: { type: String },
    verificationCodeExpired: { type: Date },
    isVerified: { type: Boolean, default: false },
    books: [],
}, { timestamps: true });

const Customer = model('Customer', CustomerSchema);
export default Customer;