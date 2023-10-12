import React from 'react';
import styles from './styles.module.css';


const Top = ({ services }) => {

    const totalDuration = {
        hour: 0,
        minute: 0,
    };

    services.forEach(obj => {
        totalDuration.hour += obj.duration.hour;
        totalDuration.minute += obj.duration.minute;
    });

    if (totalDuration.minute >= 60) {
        totalDuration.hour += Math.floor(totalDuration.minute / 60);
        totalDuration.minute %= 60;
    }

    return (
        <div className={styles.top}>

            <div className={styles.numbers}>

                <span className={styles.value}>
                    {services.length.toLocaleString('fa')}
                </span>
                
                <span className={styles.title}>سرویس</span>

            </div>

            <div className={styles.total_duration}>
                
                <span className={styles.title}>
                    مجموع زمان 
                </span>
                
                <span className={styles.value}>
                    {totalDuration.hour.toLocaleString('fa')}
                    :
                    {totalDuration.minute.toLocaleString('fa')}
                </span>
                
            </div>

        </div>
    );
};

export default Top;