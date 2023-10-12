import React, { useContext } from 'react';
import styles from './styles.module.css';
import { RegistrationContext } from '../../Registration';
import { useNavigate } from 'react-router';


const Footer = () => {
        
    const navigate = useNavigate();
    
    const { setOpen } = useContext(RegistrationContext);
    
    const closeHandler = () => {
    
        navigate('/booking/services', { replace: true });

        setOpen(false);

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