import React, { useState } from 'react';
import styles from './styles.module.css';
import List from './list/List';


const Services = () => {
    return (
        <div className = {styles.final_review}>

            <div className={styles.top}>

                <svg xmlns="http://www.w3.org/2000/svg" 
                width="20" height="20" fill="orange" class="bi bi-collection" viewBox="0 0 16 16">
                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"/>
                </svg>

                <span className={styles.title}>
                    سرویس‌های انتخاب شده
                </span>

            </div>

            <List />

        </div>
    );
};

export default Services;