import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistDetails } from '../../../../../../../redux/booking/artist/actions';
import Salon from './salon/Salon';
import Info from './info/Info';
import Top from './top/Top';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Artist = () => {
    
    const dispatch = useDispatch();

    const { book: { artist } } = useSelector(state => state.customerDashboardBookDetails);
    
    const { artist: { phone, fullName } } = useSelector(state => state.bookingArtistDetails);

    useEffect(() => {
        artist && dispatch(getArtistDetails(artist));
    }, [artist]);
    

    return (
        <div className = {styles.artist}>

            <Top />

            <Salon />

        </div>
    );
};

export default Artist;