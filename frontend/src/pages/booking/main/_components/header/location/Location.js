import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from './locations';
import { editLocation } from '../../../../../../redux/booking/actions';


const Location = () => {
    
    const dispatch = useDispatch();
    
    const { state, city } = useSelector(state => state.booking);
    
    const [locationState, setLocationState] = useState('');
    
    const [locationCity, setLocationCity] = useState('');
    
    let [cities, setCities] = useState([]);
    
    useEffect(() => {
        fetchCities(locationState, setCities);
    }, [locationState, setCities]);
    
    useEffect(() => {
        setLocationState(state);
        setLocationCity(city);
    }, [state, city]);
    
    const editLocationHandler = (e) => {
        dispatch(editLocation({
            state: locationState,
            city: e.target.value,
        }));
    };
    
    return (
        <form className = {styles.form}>

            <div>
                
                <div className={styles.container}>
                    <label hidden htmlFor = 'userEditShippingAddressFormState'>استان</label>
                    <select id = 'userEditShippingAddressFormState'
                    name = "state" 
                    onChange = {e => setLocationState(e.target.value)}
                    value = {locationState}
                    >
                        <option value="">استان</option>
                        <option value="تهران">تهران</option>
                        <option value="گیلان">گیلان</option>
                        <option value="آذربایجان شرقی">آذربایجان شرقی</option>
                        <option value="خوزستان">خوزستان</option>
                        <option value="فارس">فارس</option>
                        <option value="اصفهان">اصفهان</option>
                        <option value="خراسان رضوی">خراسان رضوی</option>
                        <option value="قزوین">قزوین</option>
                        <option value="سمنان">سمنان</option>
                        <option value="قم">قم</option>
                        <option value="مرکزی">مرکزی</option>
                        <option value="زنجان">زنجان</option>
                        <option value="مازندران">مازندران</option>
                        <option value="گلستان">گلستان</option>
                        <option value="اردبیل">اردبیل</option>
                        <option value="آذربایجان غربی">آذربایجان غربی</option>
                        <option value="همدان">همدان</option>
                        <option value="کردستان">کردستان</option>
                        <option value="کرمانشاه">کرمانشاه</option>
                        <option value="لرستان">لرستان</option>
                        <option value="بوشهر">بوشهر</option>
                        <option value="کرمان">کرمان</option>
                        <option value="هرمزگان">هرمزگان</option>
                        <option value="چهارمحال و بختیاری">چهارمحال و بختیاری</option>
                        <option value="یزد">یزد</option>
                        <option value="سیستان و بلوچستان">سیستان و بلوچستان</option>
                        <option value="ایلام">ایلام</option>
                        <option value="کهگلویه و بویراحمد">کهگلویه و بویراحمد</option>
                        <option value="خراسان شمالی">خراسان شمالی</option>
                        <option value="خراسان جنوبی">خراسان جنوبی</option>
                        <option value="البرز">البرز</option>
                    </select>
                </div>

                <div className={styles.container}>
                    <label hidden htmlFor = 'userEditShippingAddressFormCity'>شهر</label>
                    <select id = 'userEditShippingAddressFormCity' 
                    name = 'city'
                    onChange = {editLocationHandler}
                    value = {locationCity}
                    >
                        {cities.map(city => <option key = {city} value = {city}>{city}</option>)}
                    </select>
                </div> 

            </div>

        </form>
    )
}

export default Location;