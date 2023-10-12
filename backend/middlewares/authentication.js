import expressAsyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import Artist from '../models/Artist.js';
import Customer from '../models/Customer.js';


export const protectArtist = expressAsyncHandler(async(req, res, next) => {
    
    let token;
    
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.artist = await Artist.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not authorized');
        };
    };

    if (!token) {
        res.status(401);
        throw new Error('Authorization Token not found!');
    };
    
});

export const protect = expressAsyncHandler(async(req, res, next) => {
    
    let token;
    
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.customer = await Customer.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not authorized');
        };
    };

    if (!token) {
        res.status(401);
        throw new Error('Authorization Token not found!');
    };
    
});

