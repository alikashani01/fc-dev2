import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Submit from './submit/SubmitButton';


const Header = () => {

    const location = useLocation();

    const urlParams = new URLSearchParams(location.search);

    const lastPath = urlParams.get('lastPath');

    const { book: { status } } = useSelector(state => state.artistDashboardBookDetails);

    return (
        <header className = {styles.header}>

            <div>
                <Link to = {lastPath ? `/${lastPath}` : '/artist/books'}>
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