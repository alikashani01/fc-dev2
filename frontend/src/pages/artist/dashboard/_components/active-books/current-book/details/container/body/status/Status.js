import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';


const Status = ({ status, finalDate }) => {

    const [persianCode, setPersianCode] = useState('');

    useEffect(() => {
        finalDate && finalDate.time && setPersianCode(convertToPersianNumbers(finalDate.time));
    }, [finalDate && finalDate.time]);

    const convertToPersianNumbers = (value) => {
        
        const persianNumbers = {
            '0': '۰',
            '1': '۱',
            '2': '۲',
            '3': '۳',
            '4': '۴',
            '5': '۵',
            '6': '۶',
            '7': '۷',
            '8': '۸',
            '9': '۹',
        };

        let result = '';

        for (let index = 0; index < value.length; index++) {
            
            const character = value[index];

            result += persianNumbers[character] || character;
            
        };

        return result;

    };

    const stylingStatus = status === 'فعال'
        ? '#0288e0'
        : status === 'لغو شده'
        ? '#ff5555'
        : status === 'انجام شده'
        ? '#00d166'
        : 'orange'

    return (
        <div id = {styles.part}>

            <span className={styles.status} style = {{ color: stylingStatus }}>
                {status}
            </span>

            {status !== 'فعال' &&
            <div className={styles.info}>

                <div className={styles.date}>
                    <span className={styles.dayName}>
                        {finalDate && finalDate.dayName}
                    </span>
                    <span className={styles.dayNumber}>
                        {finalDate && Number(finalDate.dayNumber).toLocaleString('fa')}
                    </span>
                    <span className={styles.dayNumber}>
                        {finalDate && finalDate.month}
                    </span>
                </div>

                <span className={styles.time}>
                    {persianCode}
                </span>

            </div>
            }

        </div>
    );
};

export default Status;