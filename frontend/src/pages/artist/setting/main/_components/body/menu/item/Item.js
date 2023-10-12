import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';


const Item = ({ path, title, icon, }) => {
    return (
        <li className = {styles.item}>
            <Link className = {styles.link} to = {path}>
                <div>
                    <div className={styles.icon}>
                        {icon}
                    </div>
                    <span className = {styles.title}>
                        {title}
                    </span>
                </div>
                <ArrowBackIosRoundedIcon sx = {{ fontSize: '1.1rem', color: '#333' }} />
            </Link>
        </li>
    );
};

export default Item;