import React from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { editService } from '../../../../../../../redux/booking/actions';
import Price from './price/Price';


const Item = ({ item }) => {

    const dispatch=  useDispatch();

    const selectHandler = () => {
        dispatch(editService(item));
    };
    
    return (
        <li key = {item._id} className = {styles.item}>
            
            <span className={styles.title}>
                {item.title}
            </span>

            <Price value = {item.price} />

        </li>
    );
};

export default Item;