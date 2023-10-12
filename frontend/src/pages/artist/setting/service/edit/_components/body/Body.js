import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ServiceContext } from '../../scripts/context';
import Duration from './duration/Duration';
import Price from './price/Price';


const Body = () => {

    const { data, changeHandler } = useContext(ServiceContext);
    
    return (
        <form className = {styles.form}>

            <div className = {styles.part}>
                
                <label for="validationCustom04" className = "">دسته‌ بندی</label>
                
                <select 
                className = "form-control" 
                id="validationCustom04"
                name = 'skill'
                value = {data.skill}
                onChange = {changeHandler}
                required
                >
                    <option value= "">دسته‌ی مناسب را انتخاب کنید</option>
                    <option value = 'میکاپ'>میکاپ</option>
                    <option value = 'مو'>مو</option>
                    <option value = 'ناخن'>ناخن</option>
                </select>

            </div>

            <div className = {styles.part}>
                
                <label htmlFor = 'artistServiceFormTitle'>عنوان</label>

                <input className = 'form-control'
                id = 'artistServiceFormTitle'
                type = 'text'
                placeholder = 'عنوان'
                name = 'title'
                value = {data.title}
                onChange = {changeHandler}
                />

            </div>

            <div className = {styles.part}>
                
                <label htmlFor = 'artistServiceFormDescription'>توضیحات</label>

                <textarea className = 'form-control'
                id = 'artistServiceFormDescription'
                placeholder = 'توضیحات'
                name = 'description'
                value = {data.description}
                onChange = {changeHandler}
                />

            </div>

            <Price />

            <Duration />

        </form>
    );
};

export default Body;