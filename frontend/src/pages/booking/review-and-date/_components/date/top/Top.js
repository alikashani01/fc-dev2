import React from 'react';
import styles from './styles.module.css';


const Top = () => {

    return (
        <div className = {styles.top}>
            
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width = '18' height = '18' fill="orange" class="bi bi-calendar-event" viewBox="0 0 16 16">
                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>
                <span className={styles.title}>
                    تاریخ نوبت
                </span>
            </div>
            
            <div className = {styles.value}>
                <span className = {styles.day}></span>
                <span className = {styles.time}></span>
            </div>

        </div>
    );
};

export default Top;