import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Navbar from '../../../../_component/navbar/Navbar';
// import RemoveButton from './remove-button/RemoveButton';


const NavbarContainer = () => {
    return (
        <Navbar>

            <div className={styles.right}>
                مهارت‌ها
            </div>
            
            <div className={styles.left}>
            </div>

        </Navbar>
    );
};

export default NavbarContainer;