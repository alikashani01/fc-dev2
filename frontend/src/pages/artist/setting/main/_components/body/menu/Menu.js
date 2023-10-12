import React from 'react';
import styles from './styles.module.css';
import Item from './item/Item';
import { DashboardIconActive, ServicesIconActive, SkillsIconActive } from './icons';


const Menu = () => {
    return (
        <ul className = {styles.menu}>
            
            <Item 
            title = 'پروفایل آرایشگر'
            path = 'profile'
            icon = {<DashboardIconActive />}
            />
            
            <Item 
            title = 'سالن'
            path = 'salon'
            icon = {<SkillsIconActive />}
            />
            
            <Item 
            title = 'مهارت‌ها'
            path = 'skills'
            icon = {<SkillsIconActive />}
            />
            
            <Item 
            title = 'سرویس‌ها'
            path = 'services'
            icon = {<ServicesIconActive />}
            />

        </ul>
    );
};

export default Menu;