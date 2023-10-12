import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop } from '@mui/material';
import Container from './container/Container';


const Message = () => {

    const dispatch = useDispatch();
    
    const { success, error } = useSelector(state => state.customerDashboardSalonEdit);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (success || error) {
            setTimeout(() => {
                setOpen(true);
            }, 200);
        };
    }, [success, error]);
    
    const closeHandler = () => {
        

        setOpen(false);
        
    };

    return (
        <Backdrop id = {styles.backdrop} open = {open} sx = {{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                        
            <Container 
            open = {open} 
            success = {success}
            error = {error}
            closeHandler = {closeHandler}
            />

        </Backdrop>
    );
};

export default Message;