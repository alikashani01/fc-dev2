import React from 'react';
import styles from './styles.module.css';


const Item = ({ item, onOpen }) => {
    return (
        <li className = {styles.item}>
            <button className = {styles.btn} 
            onClick = {() => onOpen(
                `${item.dayName} ${Number(item.dayNumber).toLocaleString('fa')} ${item.month}`
            )}
            >
                {item.dayName}
                {Number(item.dayNumber).toLocaleString('fa')}
                {item.month}
            </button>
        </li>
    );
};

export default Item;