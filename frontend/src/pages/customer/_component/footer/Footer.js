import React from 'react';
import styles from './styles.module.css';
import { useLocation } from 'react-router-dom';
import { 
    DashboardIcon, 
    DashboardIconActive, 
    BooksIcon, 
    BooksIconActive,
} from './icons/Icons';
import Item from './item/Item';
import Booking from './booking/Booking';


const Footer = () => {

    const location = useLocation();
    
    const dashboardActive = location.pathname === '/customer';
    const booksActive = location.pathname.includes('/books');
    
    return (        
        <div className={styles.footer}>
            
            <ul className={styles.list}>
                
                <Item
                title = 'داشبورد'
                icon = {<DashboardIcon />}
                activeIcon = {<DashboardIconActive />}
                path = '/customer'
                isActive = {dashboardActive ? true : false}
                />

                {dashboardActive &&
                <Booking />
                }

                <Item
                title = 'نوبت‌ها'
                icon = {<BooksIcon />}
                activeIcon = {<BooksIconActive />}
                path = '/customer/books?status=فعال'
                isActive = {booksActive ? true : false}
                />

            </ul>

        </div>
    );
};

export default Footer;