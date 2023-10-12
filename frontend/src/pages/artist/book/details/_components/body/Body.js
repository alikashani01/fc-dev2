import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { getArtistDetails } from '../../../../../../redux/booking/artist/actions';
import Code from './code/Code';
import Date from './date/Date';
import Services from './services/Services';
import PaymentInfo from './payment-info/PaymentInfo';
import Customer from './customer/Customer';
import Status from './status/Status';


const Body = () => {
    
    const dispatch = useDispatch();

    const { loading, book: { artist } } = useSelector(state => state.artistDashboardBookDetails);

    useEffect(() => {
        artist && dispatch(getArtistDetails(artist));
    }, [artist]);
    

    return (
        <div className={styles.body}>
            
            {loading
            ? <div className={styles.loader}>
                <CircularProgress size = {16} sx = {{ color: '#aaa' }} />
            </div>
            : <>
            <div className={styles.code_status}>
                <Code />

                <Status />  
            </div>
            
            <Date />
   
            <Customer />
   
            <Services />
           
            <PaymentInfo />
            </>
            }
            
        </div>
    );
};

export default Body;