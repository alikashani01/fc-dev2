import React from 'react';
import styles from './styles.module.css';


const Banner = () => {
    return (
        <div className = {styles.banner}>
            
            <div>

                <span>رزرو نوبت ویژه‌ی مهارت‌های</span>
                
                <strong>زیبایی</strong>

            </div>

            <span className = {styles.beta}>
                نسخه‌ی آزمایشی
            </span>

        </div>
    );
};

export default Banner;