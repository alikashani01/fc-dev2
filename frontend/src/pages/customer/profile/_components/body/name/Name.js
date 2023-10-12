import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import SaveButton from './save-button/SaveButton';


const Name = () => {
            
    const { customer: { fullName } } = useSelector(state => state.customerAccountDetails);
    
    const [data, setData] = useState('');
    
    useEffect(() => {
       setData(fullName);
    }, [fullName]);
    
    const changeHandler = (event) => setData(event.target.value);
    
    return (
        <form className = {styles.form}>
                

            <div className={styles.part}>
                <label htmlFor = 'customerAccountEditFormFullName'>نام کامل</label>
                <input id = 'customerAccountEditFormFullName'
                type = 'text' 
                name = 'fullName'
                value = {data}
                onChange = {changeHandler}
                />
            </div>

            <SaveButton data={data} />

        </form>
    );
};

export default Name;