import React from 'react';
import styles from './styles.module.css';


const Navbar = () => {
    return (
        <nav className={styles.nav}>

            <div className = {styles.right}>
                برنامه‌ی زمانی
            </div>

            <div className={styles.left}>
            </div>

        </nav>
    );
};

export default Navbar;