import React from 'react';
import styles from './styles.module.css';


const Skills = () => {
    return (
        <ul className={styles.skills}>
            
            <li className={styles.item}>
                <img src = '/images/makeup1.png' alt = 'میکاپ' />
                <span>میکاپ</span>
            </li>
        
            <li className={styles.item}>
                <img src = '/images/hair1.png' alt = 'مو' />
                <span>مو</span>
            </li>

            <li className={styles.item}>
                <img src = '/images/nail1.png' alt = 'ناخن' />
                <span>ناخن</span>
            </li>

        </ul>
    );
};

export default Skills;