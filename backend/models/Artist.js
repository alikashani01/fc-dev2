import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const ServiceSchema = new Schema({
    skill: { type: String, },
    title: { type: String, }, 
    description: { type: String, }, 
    price: { type: Number, },
    duration: {
        hour: { type: Number, },
        minute: { type: Number, },
    },
});
const ScheduleSchema = new Schema({
    day: { type: String },
    times: [{ type: String }],
    isClosed: { type: Boolean, default: false },
});

const ArtistSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    fullName: { type: String },
    photo: { type: String },
    cloudinary_id: { type: String },
    mobile: { type: String },
    newMobile: { type: String },
    verificationCode: { type: String },
    verificationCodeExpired: { type: Date },
    isVerified: { type: Boolean, default: false },

    skills: {
        main: { type: String },
        sub: [],
    },
    salon: {
        name: { type: String },
        skills: [],
        state: { type: String },
        city: { type: String },
        street: { type: String },
        zipCode: { type: String },
    },
    schedule: [ScheduleSchema],
    services: [ServiceSchema],
    books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
    isActive: { type: Boolean, default: false },

}, { timestamps: true });

const Artist = model('Artist', ArtistSchema);
export default Artist;