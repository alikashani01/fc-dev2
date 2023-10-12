import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import SaveButton from './save-button/SaveButton';


const Mobile = () => {
            
    const { artist: { mobile } } = useSelector(state => state.artistAccountDetails);
    
    const [data, setData] = useState('');
    
    useEffect(() => {
       setData(mobile);
    }, [mobile]);
    
    const changeHandler = (event) => setData(event.target.value);
    
    return (
        <form className = {styles.form}>
                
            <div className={styles.part}>
                <label htmlFor = 'artistAccountEditFormMobile'>موبایل</label>
                <input id = 'artistAccountEditFormMobile'
                type = 'number' 
                inputMode = 'numeric'
                name = 'mobile'
                value = {data}
                onChange = {changeHandler}
                />
            </div>

            <SaveButton data = {data} />

        </form>
    );
};

export default Mobile;