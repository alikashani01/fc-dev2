import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { editMainSkill } from '../../../../../../../redux/artist/dashboard/skills/main/actions';
import { CircularProgress } from '@mui/material';


const Main = () => {
    
    const dispatch = useDispatch();
    
    const { artist: { skills: { main } } } = useSelector(state => state.artistAccountDetails);
    
    const { loading } = useSelector(state => state.artistDashboardSkillMainEdit);
    
    const [data, setData] = useState('');
    
    useEffect(() => {
        main && setData(main)
    }, [main]);

    const changeHandler = (event) => {
        const value = event.target.value;
        dispatch(editMainSkill(value));
    };
    
    return (
        <div className = {styles.part}>
            
            <label htmlFor='artistMainSkillForm'>مهارت اصلی</label>
            
            <div>
                <select className = 'form-control'
                id = 'artistMainSkillForm'
                value = {data}
                onChange = {changeHandler}
                >
                    <option value = ''>یک مهارت انتخاب کنید</option>
                    <option value = 'میکاپ'>میکاپ</option>
                    <option value = 'مو'>مو</option>
                    <option value = 'ناخن'>ناخن</option>
                </select>
                {loading && 
                <div className={styles.loader}>
                    <CircularProgress size = {18} sx = {{ color: '#aaa' }} />    
                </div>
                }
            </div>

        </div>
    );
};

export default Main;