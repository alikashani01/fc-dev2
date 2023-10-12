import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import StateCity from './state-city/StateCity';
import SaveButton from './save-button/SaveButton';


const Form = ({  }) => {
            
    const { artist: { salon: { name, state, city, street } } } = useSelector(state => state.artistAccountDetails);
    
    const [data, setData] = useState({
        name: '',
        state: '',
        city: '',
        street: '',
    });
    
    useEffect(() => {
       setData({
            ...data,
            name,
            state,
            city,
            street,
       });
    }, [name, state, city, street]);
    
    const changeHandler = (event) => setData({
        ...data,
        [event.target.name]: event.target.value,
    });
    
    return (
        <form className = {styles.form}>
                
            <div>
                <label htmlFor='artistSalonFormName'>نام</label>
                <input className = 'form-control'
                id = 'artistSalonFormName'
                type='text' 
                placeholder='مثال: مهتاب'
                name = 'name'
                value = {data.name}
                onChange={changeHandler}
                />
            </div>

            <StateCity data = {data} changeHandler = {changeHandler} />

            <div className = {styles.street}>
                <label htmlFor='artistSalonFormStreet'>خیابان و محله</label>
                <input className = 'form-control'
                id = 'artistSalonFormStreet'
                type = 'text' 
                placeholder = 'مثال: مهتاب'
                name = 'street'
                value = {data.street}
                onChange={changeHandler}
                />
            </div>

            <SaveButton 
            data = {data}
            setData = {setData}
            />

        </form>
    );
};

export default Form;