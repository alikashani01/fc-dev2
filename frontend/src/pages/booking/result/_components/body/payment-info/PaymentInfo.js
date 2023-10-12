import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const PaymentInfo = () => {
    
    const { book: { paymentInfo, total } } = useSelector(state => state.customerDashboardBookDetails);

    return (
        <div className={styles.part}>
            
            <div className={styles.type}>

                <span className={styles.title}>
                    نوع پرداخت
                </span>

                <span className={styles.value}>
                    {paymentInfo && paymentInfo.type}
                </span>

            </div>

            <div className={styles.price}>

                <span className={styles.value}>
                    {total && total.price.toLocaleString('fa')}
                </span>

            </div>


        </div>
    );
};

export default PaymentInfo;