import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
    
    code: { type: String, required: true },
    status: { type: String, default: 'فعال', },
    
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', },
    customerInfo: {
        fullName: { type: String, require: true },
        mobile: { type: String, require: true },
    },
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', },
    artistInfo: {
        fullName: { type: String, require: true },
        mobile: { type: String, require: true },
    },   
    model: { type: mongoose.Schema.Types.ObjectId, ref: 'Model', },
    modelInfo: {
        fullName: { type: String, require: true },
        mobile: { type: String, require: true },
    },
    
    date: { 
        dayName: { type: String },
        dayNumber: { type: String },
        month: { type: String },
        time: { type: Number },
    },
    startedDate: {
        dayName: { type: String },
        dayNumber: { type: String },
        month: { type: String },
        time: {
            hour: { type: Number },
            minute: { type: Number },
        },
    },
    finalDate: {
        dayName: { type: String },
        dayNumber: { type: String },
        month: { type: String },
        time: {
            hour: { type: Number },
            minute: { type: Number },
        },
    },
    elapsedTime: {
        hour: { type: Number },
        minute: { type: Number },
    },
    canceledBy: { type: String },

    services: [],
    
    total: {
        time: {
            hour: { type: Number },
            minute: { type: Number },
        },
        price: { type: Number },
    },
    
    paymentInfo: {
        type: { type: String, default: 'حضوری' },
        result: {},
    },

}, { timestamps: true });


const Book = mongoose.model('Book', BookSchema);
export default Book;