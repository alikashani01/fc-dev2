import React from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import Code from './code/Code';
import Date from './date/Date';
import Services from './services/Services';
import PaymentInfo from './payment-info/PaymentInfo';
import Status from './status/Status';


const Body = () => {
    
    const { loading, book: { code, status, total, date, services, finalDate } } = useSelector(state => state.artistDashboardBookCurrentDetails);

    return (
        <div className = {styles.body}>

            {loading
            ? <div className={styles.loader}>
                <CircularProgress size = {16} sx = {{ color: '#aaa' }} />
            </div>
            : <>
            <div className = {styles.code_status}>

                <Code code = {code} />

                <Status status = {status} finalDate = {finalDate} /> 
                
            </div>
            
            <Date date = {date} />
      
            <Services services = {services} />
           
            <PaymentInfo total = {total} />
            </>
            }
            
        </div>
    );
};

export default Body;