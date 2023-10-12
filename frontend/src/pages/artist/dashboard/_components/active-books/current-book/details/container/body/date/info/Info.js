import React from 'react';
import styles from './styles.module.css';


const Info = ({ date }) => {
    return (
        <div className={styles.info}>
                
            <div className={styles.day}>
                
                <span className={styles.name}>
                    {date && date.dayName}
                </span>
                <span className={styles.number}>
                    {date && Number(date.dayNumber).toLocaleString('fa')}
                </span>

                <span className={styles.month}>
                    {date && date.month}
                </span>

            </div>
            
            <div className={styles.time}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" fill="orange" class="bi bi-clock-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                </svg>
                <span className={styles.value}>
                {date && date.time.toLocaleString('fa')}
                </span>
            </div>

        </div>
    );
};

export default Info;