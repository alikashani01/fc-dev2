import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Item from './item/Item';


const Books = () => {

    const { loading, books } = useSelector(state => state.customerDashboardBookList);

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
            :books?.map(item => <Item item = {item} />)
            }
        </ul>
        
    );
};

export default Books;