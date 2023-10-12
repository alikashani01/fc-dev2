import React, { useContext } from 'react';
import styles from './styles.module.css';
import { UsersContext } from '../../../../Users';
import { useDispatch } from 'react-redux';
import { ARTIST_ACCOUNT_REGISTRATION_MOBILE_ADD_RESET } from '../../../../../../../../../../redux/artist/account/registration/constants';


const Footer = () => {
    const dispatch = useDispatch();
    const { setArtist: setToggle } = useContext(UsersContext);
    const closeHandler = () => {
        dispatch({
            type: ARTIST_ACCOUNT_REGISTRATION_MOBILE_ADD_RESET,
        })
        setToggle({ add: false });
    }
    return (
        <div className = {styles.footer}>
            
            <button onClick = {closeHandler}>
                <span></span>
                <span></span>
            </button>
            
        </div>
    );
};

export default Footer;