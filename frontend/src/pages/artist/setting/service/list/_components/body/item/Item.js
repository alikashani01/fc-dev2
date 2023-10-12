import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import RemoveButton from './remove/Remove';
import Info from './info/Info';


const Item = ({ item, edit }) => {

    return (
        <li key = {item._id} className = {styles.item}>
            
            <RemoveButton item = {item} edit = {edit} />

            <Link className = {styles.link} to = {`service/${item._id}`}>

                <Info item = {item} />

                <ArrowBackIosRoundedIcon sx = {{ fontSize: '1rem', color: '#555c' }} />

            </Link>
            
        </li>
    );
};

export default Item;