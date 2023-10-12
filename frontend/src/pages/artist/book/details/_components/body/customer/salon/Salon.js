import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const Salon = () => {

    const { artist: { salon } } = useSelector(state => state.bookingArtistDetails);

    return (
        <div className={styles.salon}>

            <span className={styles.title}>
                سالن
            </span>

            <span className={styles.name}>
                {salon && salon.name}
            </span>
            
            <div className={styles.address}>
                <span className={styles.title}>آدرس</span>
                <div>
                    <span className={styles.city}>
                        {salon && salon.city}
                    </span>
                    <span className={styles.street}>
                        {salon && salon.street}
                    </span>
                </div>
            </div>

        </div>
    );
};

export default Salon;