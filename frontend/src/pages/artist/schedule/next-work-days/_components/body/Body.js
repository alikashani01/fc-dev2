import React, { useState } from 'react';
import styles from './styles.module.css';
import { futureDates } from '../../getNextDays';
import Item from './item/Item';


const Body = ({ onOpen }) => {
    return (
        <div className = {styles.body}>
            
            <ul className = {styles.times}>
                {futureDates.map(item => <Item item = {item} onOpen = {onOpen} />)}
            </ul>

        </div>
    );
};

export default Body;