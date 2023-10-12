import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { Backdrop } from '@mui/material';
import { ARTIST_ACCOUNT_REGISTRATION_MOBILE_ADD_RESET } from '../../../../../../../../redux/artist/account/registration/constants';
import { UsersContext } from '../../Users';
import Container from './container/Container';


const Registration = () => {
    const dispatch = useDispatch();
    const { artist: { add }, setArtist } = useContext(UsersContext);
    const closeHandler = () => {
        dispatch({
            type: ARTIST_ACCOUNT_REGISTRATION_MOBILE_ADD_RESET,
        })
        setArtist({ add: false });
    }
    return (
        <Backdrop id = {styles.backdrop} open = {add} sx = {{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            
            <div className = {styles.hidden_back} onClick = {closeHandler} />
            
            <Container open = {add} />

        </Backdrop>
    );
};

export default Registration;