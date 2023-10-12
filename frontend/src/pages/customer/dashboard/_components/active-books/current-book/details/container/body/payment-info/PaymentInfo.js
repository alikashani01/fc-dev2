import React from 'react';
import styles from './styles.module.css';
import Price from './price/Price';


const PaymentInfo = ({ total }) => {
    return (
        <div className={styles.part}>
            
            <div className={styles.type}>

                <span className={styles.title}>
                    نوع پرداخت
                </span>

                <span className={styles.value}>
                    حضوری
                </span>

            </div>

            <div className={styles.price}>

                <span className={styles.title}>
                    هزینه
                </span>

                <span className={styles.value}>
                    <Price value = {total && total.price} />
                </span>

            </div>


        </div>
    );
};

export default PaymentInfo;