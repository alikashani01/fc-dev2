import React, { useContext } from 'react';
import styles from './styles.module.css';
import { UsersContext } from '../../Users';


const Button = () => {
    const { setArtist } = useContext(UsersContext);
    const openHandler = () => setArtist({
        add: true,
    });
    return (
        <button className={styles.btn} onClick = {openHandler}>
            <span>آرایشگر</span>
        </button>
    );
};

export default Button;