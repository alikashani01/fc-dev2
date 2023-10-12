import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Item from './item/Item';
import { Skeleton, Stack } from '@mui/material';


const List = () => {
    
    const { loading, artists } = useSelector(state => state.bookingArtistList);

    return (
        <ul className={styles.list}>
            
            {loading
            ? <Stack spacing={1}>
                <Skeleton 
                sx = {{ backgroundColor: '#151515', borderRadius: '10px' }}
                variant = "rounded" 
                width = {'100%'} 
                height = {120} 
                />
                <Skeleton 
                sx = {{ backgroundColor: '#151515', borderRadius: '10px' }}
                variant = "rounded" 
                width = {'100%'} 
                height = {120} 
                />
            </Stack>
            : artists?.map(item => <Item item = {item} />)
            }
            
        </ul>
    );
};

export default List;