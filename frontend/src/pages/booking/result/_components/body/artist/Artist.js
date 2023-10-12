import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistDetails } from '../../../../../../redux/booking/artist/actions';
import Info from './info/Info';
import Top from './top/Top';

const Artist = () => {
    
    const dispatch = useDispatch();

    const { book: { artist } } = useSelector(state => state.customerDashboardBookDetails);
    
    useEffect(() => {
        artist && dispatch(getArtistDetails(artist));
    }, [artist]);
    

    return (
        <div className = {styles.artist}>

            <Top />
            
            <Info />
            
        </div>
    );
};

export default Artist;