import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';


// Hardcode:
const days = [
    {
        day: 'شنبه',
        times: [
            '۹-۱۵',
            '۱۸-۲۳',
        ],
        status: 'باز است',
    },
    {
        day: 'یک‌شنبه',
        times: [
            '۹-۱۵',
            '۱۸-۲۳',
        ],
        status: 'باز است',
    },
    {
        day: 'دوشنبه',
        times: [
            '۹-۱۵',
            '۱۸-۲۳',
        ],
        status: 'باز است',
    },
    {
        day: 'سه‌شنبه',
        times: [
            '۹-۱۵',
            '۱۸-۲۳',
        ],
        status: 'باز است',
    },
    {
        day: 'چهارشنبه',
        times: [
            '۶-۲۳',
        ],
        status: 'تعطیل است',
    },
    {
        day: 'پنج‌شنبه',
        times: [
            '۶-۲۳',
        ],
        status: 'باز است',
    },
    {
        day: 'جمعه',
        times: [],
        status: 'تعطیل است',
    },
];

const Body = () => {
    return (
        <ul className = {styles.body}>

            {days.map(item => (
            <li key = {item.day} className = {styles.item}>
                <Link className = {styles.link} to = {`day/${item.day}`}>
                    
                    <div className = {styles.right}>
                        <span className = {styles.day}>
                            {item.day}‌ها
                        </span>
                    </div>

                    <div className = {styles.left}>
                        
                        <span className = {styles.status}>
                            {item.status}
                        </span>
                        <ArrowBackIosRoundedIcon sx = {{ fontSize: '1rem', color: '#555c' }} />
                    </div>

                </Link>
            </li>
            ))}          

        </ul>
    );
};

export default Body;