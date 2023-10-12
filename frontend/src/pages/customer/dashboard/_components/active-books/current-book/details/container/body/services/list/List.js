import React from 'react';
import styles from './styles.module.css';
import Top from './top/Top';
import Item from './item/Item';


const List = ({ services }) => {
    return (
        <ul className={styles.list}>
            
            <Top services = {services} />

            {services?.map(item => <Item item = {item} />)}
            
        </ul>
    );
};

export default List;