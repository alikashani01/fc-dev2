import React from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { editArtist } from '../../../../../../../redux/booking/actions';


const Item = ({ item }) => {

    const dispatch=  useDispatch();

    const selectHandler = () => dispatch(editArtist(item._id));

    return (
        <li key = {item._id} className = {styles.item}>
            
            <button className = {styles.btn} onClick = {selectHandler}>
            
                <img src = {item.photo} />
            
                <span className = {styles.name}>
                    {item.fullName}
                </span>

            </button>

        </li>
    );
};

export default Item;