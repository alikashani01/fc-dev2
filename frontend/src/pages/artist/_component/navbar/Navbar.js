import React from 'react';
import styles from './styles.module.css';


const Navbar = ({ children }) => {
    return (
        <nav className={styles.nav}>
            
            {children}

        </nav>
    )
}

export default Navbar