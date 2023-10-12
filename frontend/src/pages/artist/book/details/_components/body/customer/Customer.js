import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistDetails, getCustomerDetails } from '../../../../../../../redux/booking/artist/actions';
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

    const { book: { customer } } = useSelector(state => state.artistDashboardBookDetails);
    
    const { customer: { phone, fullName } } = useSelector(state => state.bookingCustomerDetails);

    useEffect(() => {
        customer && dispatch(getCustomerDetails(customer));
    }, [customer]);
    

    return (
        <div className = {styles.artist}>

            <span className={styles.title}>
                مشتری
            </span>

            <div>
                <span>
                    {fullName}
                </span>
                <a id = {styles.phone}
                className={styles.phone} href = {`tel:${phone}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                </a>
            </div>

        </div>
    );
};

export default Artist;