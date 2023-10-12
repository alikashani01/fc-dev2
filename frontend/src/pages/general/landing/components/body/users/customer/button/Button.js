import React, { useContext } from 'react';
import styles from './styles.module.css';
import { UsersContext } from '../../Users';


const Button = () => {
    const { setCustomer } = useContext(UsersContext);
    const openHandler = () => setCustomer({
        add: true,
    });
    return (
        <button className={styles.btn} onClick = {openHandler}>
            <span className={styles.title}>مشتری</span>
        </button>
    );
};

export default Button;