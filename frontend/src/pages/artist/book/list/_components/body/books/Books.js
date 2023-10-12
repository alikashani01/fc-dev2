import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Item from './item/Item';


const Books = ({ status }) => {

    const { loading, books } = useSelector(state => state.artistDashboardBookList);

    return (
        <ul className={styles.list}>
            {loading
            ? <Stack spacing={1}>
                <Skeleton 
                sx = {{ backgroundColor: '#151515', borderRadius: '10px' }}
                variant = "rounded" 
                width = {'100%'} 
                height = {60} 
                />
                <Skeleton 
                sx = {{ backgroundColor: '#151515', borderRadius: '10px' }}
                variant = "rounded" 
                width = {'100%'} 
                height = {60} 
                />
                <Skeleton 
                sx = {{ backgroundColor: '#151515', borderRadius: '10px' }}
                variant = "rounded" 
                width = {'100%'} 
                height = {60} 
                />
                <Skeleton 
                sx = {{ backgroundColor: '#151515', borderRadius: '10px' }}
                variant = "rounded" 
                width = {'100%'} 
                height = {60} 
                />
                <Skeleton 
                sx = {{ backgroundColor: '#151515', borderRadius: '10px' }}
                variant = "rounded" 
                width = {'100%'} 
                height = {60} 
                />
                <Skeleton 
                sx = {{ backgroundColor: '#151515', borderRadius: '10px' }}
                variant = "rounded" 
                width = {'100%'} 
                height = {60} 
                />
            </Stack>
            : books?.map(item => <Item item = {item} />)
            }
            <span className={styles.msg}>
                {!loading && status === 'فعال' && books.length < 1
                ? 'نوبت فعالی ندارید'
                : !loading && status === 'انجام شده' && books.length < 1 
                ? 'نوبت انجام شده‌ای ندارید'
                : !loading && status === 'لغو شده' && books.length < 1
                && 'نوبت لغو شده‌ای ندارید'}
            </span>
        </ul>
        
    );
};

export default Books;