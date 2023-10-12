import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Menu, Tooltip } from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { getCustomerDetails } from '../../../../../redux/customer/account/details/actions';
import Form from './location/Location';


const Header = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { state, city } = useSelector(state => state.booking);

    const { customerInfo } = useSelector(state => state.customerAccountRegistrationMobileVerify);
    
    const [anchorElUser, setAnchorElUser] = useState(null);

    useEffect(() => {
        customerInfo && dispatch(getCustomerDetails());
    }, []);

    useEffect(() => {
        (!state || !city) && navigate('/' , { replace: true });
    }, []);

    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);

    const handleCloseUserMenu = () => setAnchorElUser(null);

    return (
        <header className = {styles.header}>

            <Link to = '/'>
                <ArrowForwardIosRoundedIcon sx = {{ fontSize: '1.4rem', color: '#666' }} />
            </Link>

            <div>
                <Box sx = {{ flexGrow: 0 }}>
                    
                    <Tooltip title = "تغییر موقعیت مکانی">
                        <button className={styles.location} onClick = {handleOpenUserMenu} sx={{ p: 0 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width='20'height = '20' fill='#ff4444' class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                            <span>{city}</span>
                        </button>
                    </Tooltip>

                    <Menu
                    sx = {{ mt: '20px' }}
                    id = {styles.menu}
                    anchorEl = {anchorElUser}
                    anchorOrigin = {{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin = {{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open = {Boolean(anchorElUser)}
                    onClose = {handleCloseUserMenu}
                    >

                        <Form />

                    </Menu>

                </Box>
            </div>

        </header>
    );
};

export default Header;