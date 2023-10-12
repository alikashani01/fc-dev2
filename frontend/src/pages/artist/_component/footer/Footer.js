import React from 'react';
import styles from './styles.module.css';
import { useLocation } from 'react-router-dom';
import { 
    DashboardIcon, 
    DashboardIconActive, 
    BooksIcon, 
    BooksIconActive, 
    ScheduleIcon, 
    ScheduleIconActive, 
    SettingIcon,
    SettingIconActive,
} from './icons/Icons';
import Item from './item/Item';


const Footer = () => {

    const location = useLocation();
    
    const dashboardActive = location.pathname === '/artist';
    const booksActive = location.pathname.includes('/books');
    const bookActive = location.pathname.includes('/books/book');
    const scheduleActive = location.pathname.includes('/schedule');
    const settingActive = location.pathname.includes('/artist/setting');
    
    return (    
        !bookActive &&    
        <div className={styles.footer}>
            
            <ul className={styles.list}>
                
                <Item
                title = 'داشبورد'
                icon = {<DashboardIcon />}
                activeIcon = {<DashboardIconActive />}
                path = '/artist'
                isActive = {dashboardActive ? true : false}
                />

                <Item
                title = 'نوبت‌ها'
                icon = {<BooksIcon />}
                activeIcon = {<BooksIconActive />}
                path = '/artist/books?status=فعال'
                isActive = {booksActive ? true : false}
                />
                
                <Item
                title = 'برنامه‌ی زمانی'
                icon = {<ScheduleIcon />}
                activeIcon = {<ScheduleIconActive />}
                path = '/artist/schedule'
                isActive = {scheduleActive ? true : false}
                />
                
                <Item
                title = 'تنظیمات'
                icon = {<SettingIcon />}
                activeIcon = {<SettingIconActive />}
                path = 'setting'
                isActive = {settingActive ? true : false}
                />

            </ul>

        </div>
    );
};

export default Footer;