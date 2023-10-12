import React, { useContext } from 'react';
import styles from './styles.module.css';
import { UsersContext } from '../../../../../Users';


const Add = () => {
    
    const { customer: { verify }, setData, data } = useContext(UsersContext);
    
    return (
        <form className = {styles.form} id = {!verify ? styles.show : styles.hide}>
            
            <label htmlFor = 'registrationCustomerAddForm'>
                لطفا شماره‌ موبایل خود را وارد کنید
            </label>
            
            <input id = 'registrationCustomerAddForm'
            placeholder = 'مثال: ۰۹۱۲۲۲۲۳۳۳۴'
            type = 'number'
            inputMode = 'numeric'
            value = {data}
            onChange = {e => setData(e.target.value)}
            />
            
        </form>
    );
    
};

export default Add;