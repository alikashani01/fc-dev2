import React, { useContext } from 'react';
import styles from './styles.module.css';
import { UsersContext } from '../../../../Users';
import { useDispatch } from 'react-redux';
import { CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_RESET } from '../../../../../../../../../../redux/customer/account/registration/constants';


const Footer = () => {
    
    const dispatch = useDispatch();
    
    const { setModel: setToggle } = useContext(UsersContext);
    
    const closeHandler = () => {

        dispatch({
            type: CUSTOMER_ACCOUNT_REGISTRATION_MOBILE_ADD_RESET,
        });

        setToggle({ add: false });
    };

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