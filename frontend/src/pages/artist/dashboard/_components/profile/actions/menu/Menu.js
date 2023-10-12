import React, { useState } from 'react'
import styles from './styles.module.css';
import { Box, Tooltip, Menu } from '@mui/material';
import Container from './container/Container';

const MenuContainer = ({ toggle, setToggle }) => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <div className={styles.menu}>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title = "ویرایش">
                    <button className={styles.btn} onClick = {handleOpenUserMenu} sx={{ p: 0 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="14" height="14" fill="#888" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                        </svg>
                    </button>
                </Tooltip>
                <Menu
                sx = {{ mt: '25px' }}
                id = {styles.menu}
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open = {Boolean(anchorElUser)}
                onClose = {handleCloseUserMenu}
                >
                    <Container onClose = {handleCloseUserMenu} toggle = {toggle} setToggle = {setToggle} />
                </Menu>
            </Box>
        </div>
    );
}

export default MenuContainer;