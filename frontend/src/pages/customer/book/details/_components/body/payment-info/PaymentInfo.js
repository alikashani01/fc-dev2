import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Price from './price/Price';


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

                <span className={styles.title}>
                    هزینه
                </span>

                <span className={styles.value}>
                    <Price value={total && total.price} />
                </span>

            </div>


        </div>
    );
};

export default PaymentInfo;