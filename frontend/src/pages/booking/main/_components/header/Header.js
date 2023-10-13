import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { getCustomerDetails } from '../../../../../redux/customer/account/details/actions';


const Header = () => {

    const dispatch = useDispatch();

    const { customerInfo } = useSelector(state => state.customerAccountRegistrationMobileVerify);
    
    useEffect(() => {
        customerInfo && dispatch(getCustomerDetails());
    }, []);

    return (
        <header className = {styles.header}>

            <Link to = '/'>
                <ArrowForwardIosRoundedIcon sx = {{ fontSize: '1.4rem', color: '#666' }} />
            </Link>

        </header>
    );
};

export default Header;