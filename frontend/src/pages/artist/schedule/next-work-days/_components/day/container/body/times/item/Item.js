import React from 'react';
import styles from './styles.module.css';


const Item = ({ time, onEdit }) => {
    return (
        <li className = {styles.item}>
            <button className = {styles.btn} onClick = {() => onEdit(time)}>
                {time.toLocaleString('fa')}
            </button>
        </li>
    );
};

export default Item;