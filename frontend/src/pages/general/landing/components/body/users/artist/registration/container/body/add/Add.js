import React, { useContext } from 'react';
import styles from './styles.module.css';
import { UsersContext } from '../../../../../Users';


const Add = () => {
    
    const { artist: { verify }, setData, data } = useContext(UsersContext);
    
    return (
        <form className = {styles.form} id = {!verify ? styles.show : styles.hide}>
            
            <label htmlFor = 'registrationArtistAddForm'>
                لطفا شماره‌ موبایل خود را وارد کنید
            </label>
            
            <input id = 'registrationArtistAddForm'
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