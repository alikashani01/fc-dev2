import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Artist from './artist/Artist';


const Header = () => {

    return (
        <header className = {styles.header}>

            <Link to = '/booking/services'>
                <ArrowForwardIosRoundedIcon sx = {{ fontSize: '1.4rem', color: '#666' }} />
                <span>سرویس‌ها</span>
            </Link>

            <Artist />

        </header>
    );
};

export default Header;