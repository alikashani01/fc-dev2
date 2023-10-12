import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistDetails } from '../../../../../redux/booking/artist/actions';


const Body = () => {
    
    const dispatch = useDispatch();

    const { book: { 
        code,
        artist,
        artistInfo,
    } } = useSelector(state => state.customerDashboardBookDetails);

    const { artist: { fullName, photo, phone, salon, } } = useSelector(state => state.bookingArtistDetails);

    useEffect(() => {
        artist && dispatch(getArtistDetails(artist));
    }, [artist]);
    

    return (
        <div className={styles.body}>
            
            <div className = {styles.msg}>

                <svg xmlns="http://www.w3.org/2000/svg" 
                width = '35'
                height = '35' 
                fill = '#00d166'
                class="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg>
                
                <span>موفق</span>

            </div>

            <div className = {styles.code}>

                <span className={styles.title}>
                    شناسه‌ی نوبت
                </span>

                <span className={styles.value}>
                    {code}
                </span>

            </div>
            
            <div className = {styles.artist}>

                <div className={styles.top}>

                    <span className={styles.title}>
                        آرایشگر
                    </span>

                    <a className={styles.phone} href = {`tel:${phone}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                    </a>

                </div>

                <div className={styles.info}>

                    <img src = {photo} alt = {fullName} />

                    <span className={styles.name}>
                        {fullName}
                    </span>

                </div>
                
                <div className={styles.salon}>

                    <span className={styles.title}>
                        سالن
                    </span>

                    <span className={styles.name}>
                        {salon && salon.name}
                    </span>
                    
                    <div className={styles.address}>
                        <span>آدرس</span>
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

            </div>

            
        </div>
    );
};

export default Body;