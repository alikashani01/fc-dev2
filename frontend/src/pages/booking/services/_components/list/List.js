import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Item from './item/Item';


const List = () => {
    
    const { artist } = useSelector(state => state.bookingArtistDetails);

    return (
        <ul className={styles.list}>
            
            {artist.services?.map(item => <Item item = {item} services = {artist.services} />)}
            
        </ul>
    );
};

export default List;