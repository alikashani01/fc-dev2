import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Item from './item/Item';


const Body = ({ skill, edit }) => {

    const { artist: { services } } = useSelector(state => state.artistAccountDetails);

    return (
        <ul className = {styles.body}>

            <span className={styles.msg}>
                {!services.length && 'بدون سرویس'}
            </span>

            {services?.map(item => (skill === 'همه') 
            ? <Item item = {item} edit = {edit} />
            : (item.skill === skill) && <Item item = {item} edit = {edit} />)}

        </ul>
    );
};

export default Body;