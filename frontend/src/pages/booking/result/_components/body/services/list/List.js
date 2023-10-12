import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Item from './item/Item';
import Top from './top/Top';


const List = () => {
    
    const { book: { services } } = useSelector(state => state.customerDashboardBookDetails);

    return (
        <ul className={styles.list}>
            
            <Top />

            {services?.map(item => <Item item = {item} />)}
            
        </ul>
    );
};

export default List;