import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop } from '@mui/material';
import { ARTIST_DASHBOARD_SALON_EDIT_RESET } from '../../../../../../redux/artist/dashboard/salon/edit/constants';
import Container from './container/Container';


const Message = () => {

    const dispatch = useDispatch();
    
    const { success, error } = useSelector(state => state.artistDashboardSalonEdit);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (success || error) {
            setTimeout(() => {
                setOpen(true);
            }, 200);
        };
    }, [success, error]);
    
    const closeHandler = () => {
        
        dispatch({
            type: ARTIST_DASHBOARD_SALON_EDIT_RESET,
        });

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