import React from 'react';
import styles from './styles.module.css';
import Navbar from '../../../_component/navbar/Navbar';
import SubmitButton from './submit-btn/SubmitButton';


const NavbarContainer = () => {
    return (
        <Navbar>

            <div className = {styles.right}>
                اطلاعات مشتری
            </div>

            <div className={styles.left}>
                <SubmitButton />
            </div>
            
        </Navbar>
    );
};

export default NavbarContainer;