import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const Top = () => {

    const { artist: { phone, fullName, photo } } = useSelector(state => state.bookingArtistDetails);

    return (
        <div className={styles.top}>

            <span className={styles.title}>
                آرایشگر
            </span>

            <div>
                <div>
                    <img src = {photo} />
                    <span>
                        {fullName}
                    </span>
                </div>
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

export default Top;