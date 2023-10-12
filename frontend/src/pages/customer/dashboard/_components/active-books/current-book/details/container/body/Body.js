import React, { createContext, useEffect } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { getCustomerDetails } from '../../../../../../../../../redux/booking/artist/actions';
import Code from './code/Code';
import Date from './date/Date';
import Services from './services/Services';
import PaymentInfo from './payment-info/PaymentInfo';
import Status from './status/Status';


const Body = () => {
    
    const dispatch = useDispatch();

    const { loading, book: { customer, code, status, total, date, services, finalDate } } = useSelector(state => state.customerDashboardBookCurrentDetails);

    useEffect(() => {
        customer && dispatch(getCustomerDetails(customer));
    }, [customer]);

    return (
        <div className={styles.body}>

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