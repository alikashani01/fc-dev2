import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const Item = ({ title, onEdit }) => {

    const { artist: { skills: { main, sub } } } = useSelector(state => state.artistAccountDetails);

    const isSelected = sub && sub.includes(title);

    return (
        main !== title && 
        <li key = {sub}
        className = {styles.item} 
        id = {isSelected ? styles.selected : ''} 
        onClick = {() => onEdit(title)}
        >    
            <span className = {styles.name}>
                {title}
            </span>
        </li>
    );
};

export default Item;