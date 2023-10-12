import React, { useContext, useState } from 'react';
import styles from './styles.module.css';
import { ServiceContext } from '../../../../scripts/context';


const Container = () => {

    const { 
        data, 
        changeHandler,
        errors: { hour, minute },
    } = useContext(ServiceContext);
    
    return (
        <div className={styles.container}>
        
            <div className = {`${hour && 'is-invalid'}`}>
                
                <label for="artistServiceFormDurationHour" className = "">ساعت</label>
                
                <select className = "" id="artistServiceFormDurationHour" 
                name = 'hour'
                value = {data.hour}
                onChange = {changeHandler}
                required
                >
                    <option selected disabled value="">ساعت</option>
                    <option value = {0}>۰۰</option>
                    <option value = {1}>۱</option>
                    <option value = {2}>۲</option>
                </select>
                
                {hour && 
                <div className = 'invalid-feedback'>
                    لطفا ساعت را انتخاب کنید
                </div>
                }

            </div>

            <div className = {`${hour && 'is-invalid'}`}>
                
                <label for="artistServiceFormDurationMinute" className = "">دقیقه</label>
                
                <select className = "" id="artistServiceFormDurationMinute" 
                name = 'minute'
                value = {data.minute}
                onChange = {changeHandler}
                required
                >
                    <option selected disabled value="">دقیقه</option>
                    <option value = {0}>۰۰</option>
                    <option value = {15}>۱۵</option>
                    <option value = {30}>۳۰</option>
                    <option value = {45}>۴۵</option>
                </select>
                
                {hour && 
                <div className = 'invalid-feedback'>
                    لطفا دقیقه را انتخاب کنید
                </div>
                }

            </div>

        </div>
    );
};

export default Container;