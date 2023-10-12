import React, { createContext, useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArtists } from '../../../../redux/booking/artist/actions';


const BookingContext = createContext();

const BookingProvider = ({ children }) => {

    const dispatch = useDispatch();

    const { artists } = useSelector(state => state.bookingArtistList);
    
    const { artist, skill, state, city, services } = useSelector(state => state.booking);

    const [queryData, setQueryData] = useState({
        keyword: '',
        skill: 'میکاپ',
        state: '',
        city: '',
    });

    useEffect(() => {
        setQueryData({
            ...queryData,
            skill, 
            state, 
            city, 
        });
    }, [skill, state, city]);
    

    useEffect(() => {
        dispatch(getArtists(queryData));
    }, [queryData]);
    

    const contextValues = {
        artists,
        queryData,
        setQueryData,
    };

    return (
        <BookingContext.Provider value = {contextValues}>
            {children}
        </BookingContext.Provider>
    );
};


export default BookingProvider;