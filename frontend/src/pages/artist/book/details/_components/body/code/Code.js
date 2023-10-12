import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const Code = () => {

    const { book: { code } } = useSelector(state => state.artistDashboardBookDetails);

    const [persianCode, setPersianCode] = useState('');

    useEffect(() => {
        code && setPersianCode(convertToPersianNumbers(code));
    }, [code]);

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

    return (
        <div className = {styles.part}>
            <span className={styles.title}>
                شناسه‌
            </span>

            <span className={styles.value}>
                {persianCode}
            </span>
        </div>
    );
};

export default Code;