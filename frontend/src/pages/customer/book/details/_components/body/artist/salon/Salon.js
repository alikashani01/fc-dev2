import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const Salon = () => {

    const { artist: { salon } } = useSelector(state => state.bookingArtistDetails);

    return (
        <div className={styles.salon}>

            <div>
                <span className={styles.title}>
                    سالن
                </span>

                <span className={styles.name}>
                    {salon && salon.name}
                </span>
            </div>
            
            <span className={styles.address}>
                {salon && salon.street}
            </span>

        </div>
    );
};

export default Salon;