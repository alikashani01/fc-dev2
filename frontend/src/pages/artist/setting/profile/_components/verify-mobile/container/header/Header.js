import React from 'react';
import styles from './styles.module.css';
import Resend from './resend/Resend';


const Header = ({ setOpen }) => {

    const closeHandler = () => {
        setOpen(false);
    };
    
    return (
        <div className = {styles.header}>
            
            <button>
                لغو یا تغییر شماره
            </button>

            <Resend />
            
        </div>
    );
};

export default Header;