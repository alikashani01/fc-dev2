import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useSelector } from 'react-redux';
import Submit from './submit/SubmitButton';


const Header = () => {

    const location = useLocation();

    const urlParams = new URLSearchParams(location.search);

    const lastPath = urlParams.get('lastPath');

    const { book: { code, status } } = useSelector(state => state.customerDashboardBookDetails);

    return (
        <header className = {styles.header}>

            <div>
                <Link to = {lastPath ? `/${lastPath}` : '/customer/books'}>
                    <ArrowForwardIosRoundedIcon sx = {{ fontSize: '1.4rem', color: '#555c' }} />
                </Link>
            </div>

            <div className={styles.center}>
                جزییات 
            </div>

            <div className = {styles.left}>
                {status === 'فعال' &&
                <Submit />
                }
            </div>

        </header>
    );
};

export default Header;