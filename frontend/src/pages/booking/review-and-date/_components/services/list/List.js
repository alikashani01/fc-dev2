import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Item from './item/Item';
import Top from './top/Top';


const List = () => {
    
    const { services } = useSelector(state => state.booking);

    return (
        <ul className={styles.list}>
            
            <Top />
            
            {services.length < 1 &&
            <Link to = '/booking/services'>
                لطفا حداقل ۱ سرویس انتخاب کنید
            </Link>
            }
            {services?.map(item => <Item item = {item} />)}
            
        </ul>
    );
};

export default List;