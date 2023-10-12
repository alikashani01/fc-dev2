import React from 'react';
import styles from './styles.module.css';
import Navbar from '../../../../../_component/navbar/Navbar';
import { Link } from 'react-router-dom';


const NavbarContainer = () => {
    return (
        <Navbar>

            <div className = {styles.right}>
                سرویس‌ها
            </div>

            <div className={styles.left}>
                <Link to = 'new'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                    width = '30'
                    height = '30' 
                    fill = 'currentColor'
                    class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </Link>
            </div>

        </Navbar>
    );
};

export default NavbarContainer;