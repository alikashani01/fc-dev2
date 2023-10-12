import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { editService } from '../../../../../../redux/booking/actions';
import Price from './price/Price';


const Item = ({ item }) => {

    const dispatch=  useDispatch();

    const { services } = useSelector(state => state.booking);

    const selectHandler = () => {
        dispatch(editService(item));
    };

    const itemSelected = services.find(x => x._id === item._id) ? true :  false;

    return (
        <li key = {item._id} className = {styles.item} id = {itemSelected ? styles.selected : ''}>
            
            <button className={styles.btn} onClick = {selectHandler}>

                <div>

                    <span className={styles.title}>
                        {item.title}
                    </span>
                    
                    <p className={styles.description}>
                        {item.description}
                    </p>

                </div>

                <div className={styles.left}>

                    <div className={styles.duration}>
                        <span>مدت زمان</span>
                        <div className={styles.value}>
                            <span>{item.duration.hour.toLocaleString('fa')}</span>
                            :
                            <span>{item.duration.minute.toLocaleString('fa')}</span>
                        </div>
                    </div>
                    
                    <Price value = {item.price} />

                </div>

            </button>

        </li>
    );
};

export default Item;