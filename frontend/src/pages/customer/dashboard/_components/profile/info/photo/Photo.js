import React, { useState } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';
import Edit from './edit/Edit';

const Photo = () => {
    const { artist: { photo } } = useSelector(state => state.artistAccountDetails);
    const [open, setOpen] = useState(false);
    const openHandler = () => setOpen(true);
    const { loading } = useSelector(state => state.artistAccountDetails);
    return (
        <>
        <picture className = {styles.photo} onClick = {openHandler}>
            {loading
            ? <Skeleton variant="circular" width={60} height={60} 
            sx={{ backgroundColor: '#0e0e0e' }}
            animation="wave"
            >
                <img />
            </Skeleton>
            : <>
            <img src = {photo} alt = '' />
            <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg"
                width = '12'
                height = '12' 
                fill = 'currentColor'
                class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </div>
            </>
            }
            
        </picture>
        <Edit open = {open} setOpen = {setOpen} />
        </>
    );
};

export default Photo;