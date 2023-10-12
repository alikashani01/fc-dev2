import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getArtists } from '../../../redux/booking/artist/actions';
import Header from './_components/header/Header';
import Artists from './_components/artists/Artists';


const Booking = () => {

    const dispatch = useDispatch();
    
    const { state, city } = useSelector(state => state.booking);

    useEffect(() => {
        dispatch(getArtists({ state, city }));
    }, [state, city]);

    return (
        <main id = {styles.main}>
            
            <Header />
                        
            <Artists />
            
        </main>
    );
};

export default Booking;