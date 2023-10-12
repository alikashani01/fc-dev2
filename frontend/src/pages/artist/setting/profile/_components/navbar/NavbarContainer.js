import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Navbar from '../../../../_component/navbar/Navbar';
import RemoveButton from './remove-button/RemoveButton';
import SubmitButton from './submit-btn/SubmitButton';


const NavbarContainer = () => {
    return (
        <Navbar>

            <div className = {styles.right}>
                پروفایل
            </div>

            <div className={styles.left}>
                <SubmitButton />
            </div>
            
        </Navbar>
    );
};

export default NavbarContainer;