import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const Info = () => {

    const { artist: { fullName, photo } } = useSelector(state => state.bookingArtistDetails);

    return (
        <div className={styles.info}>

            <img src = {photo} alt = {fullName} />

            <span className={styles.name}>
                {fullName}
            </span>

        </div>
    );
};

export default Info;