import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop } from '@mui/material';
import { ARTIST_ACCOUNT_MOBILE_EDIT_RESET } from '../../../../../../redux/artist/account/mobile/constants';
import Container from './container/Container';


const VerifyMobile = () => {

    const dispatch = useDispatch();

    const { success } = useSelector(state => state.artistAccountMobileEdit);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        success && setOpen(true);
    }, [success]);
    

    const closeHandler = () => {
        dispatch({
            type: ARTIST_ACCOUNT_MOBILE_EDIT_RESET,
        });
        setOpen(false);
    }

    return (
        <Backdrop id = {styles.backdrop} open = {open} sx = {{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            
            <div className = {styles.hidden_back} onClick = {closeHandler} />
            
            <Container open = {open} />

        </Backdrop>
    );
};

export default VerifyMobile;