import React from 'react';
import styles from './styles.module.css';
import Navbar from '../../../../_component/navbar/Navbar';


const NavbarContainer = () => {
    return (
        <Navbar>

            <div className = {styles.right}>
                پروفایل
            </div>

            <div className={styles.left}>

            </div>
            
        </Navbar>
    );
};

export default NavbarContainer;