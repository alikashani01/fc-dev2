import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Booking from './main/Booking';
import Services from './services/Services';
import ReviewAndDate from './review-and-date/ReviewAndDate';
import Result from './result/Result';


const BookingRoutes = () => {

    return (
        <Routes>

            <Route path = '/booking' element = {<Booking />} />
            
            <Route path = '/booking/services' element = {<Services />} />

            <Route path = '/booking/review-and-date' element = {<ReviewAndDate />} />
            
            <Route path = '/booking/result/:id' element = {<Result />} />

        </Routes>
    );
};

export default BookingRoutes;