import React from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { editSubSkill } from '../../../../../../../redux/artist/dashboard/skills/sub/actions';
import { CircularProgress } from '@mui/material';
import Item from './item/Item';


const Sub = () => {
    
    const dispatch = useDispatch();
        
    const { loading } = useSelector(state => state.artistDashboardSkillMainEdit);
    
    const editHandler = (value) => {
        dispatch(editSubSkill(value));
    };

    return (
        <div className = {styles.sub}>
            
            <span className = {styles.title}>دیگر مهارت‌ها</span>
            
            <ul className = {styles.list}>
                
                <Item 
                title = 'میکاپ'
                onEdit = {editHandler}
                />
                
                <Item 
                title = 'مو'
                onEdit = {editHandler}
                />
                
                <Item 
                title = 'ناخن'
                onEdit = {editHandler}
                />
                
            </ul>
            
        </div>
    );
};

export default Sub;