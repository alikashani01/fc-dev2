import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import SaveButton from './save-button/SaveButton';


const Name = () => {
            
    const { artist: { firstName, lastName } } = useSelector(state => state.artistAccountDetails);
    
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
    });
    
    useEffect(() => {
       setData({
            ...data,
            firstName,
            lastName,
       });
    }, [firstName, lastName]);
    
    const changeHandler = (event) => setData({
        ...data,
        [event.target.name]: event.target.value,
    });
    
    return (
        <form className = {styles.form}>
                

            <div className={styles.part}>
                <label htmlFor = 'artistAccountEditFormFirstName'>نام کوچک</label>
                <input id = 'artistAccountEditFormFirstName'
                type='text' 
                name = 'firstName'
                value = {data.firstName}
                onChange = {changeHandler}
                />
            </div>

            <div className={styles.part}>
                <label htmlFor = 'artistAccountEditFormLastName'>نام خانوادگی</label>
                <input id = 'artistAccountEditFormLastName'
                type='text' 
                name = 'lastName'
                value = {data.lastName}
                onChange = {changeHandler}
                />
            </div>

            <SaveButton data={data} />

        </form>
    );
};

export default Name;