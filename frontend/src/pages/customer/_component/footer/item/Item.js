import React from 'react'
import styles from './styles.module.css';
import { Link } from 'react-router-dom';


const Item = ({ hide = false, icon, activeIcon, title, path, ordersNum = null, isActive = false }) => {
    return (
        <li className = {styles.item} id = {hide ? styles.hide : ''}>
            <Link to = {path}>
                <div className = {styles.icon}>
                    {isActive ? activeIcon : icon}
                </div>
                <span className={styles.title}>
                    {title}
                </span>
            </Link>
        </li>
    )
}

export default Item