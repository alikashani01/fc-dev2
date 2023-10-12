import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const Details = () => {
    const { customer: { mobile, fullName } } = useSelector(state => state.customerAccountDetails);
    return (
        <div className = {styles.details}>

            <span className = {styles.name}>
                {fullName}
            </span>
            
            <span className = {styles.mobile}>
                {mobile}
            </span>

        </div>
    );
};

export default Details;