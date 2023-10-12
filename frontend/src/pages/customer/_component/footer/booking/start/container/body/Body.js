import React from 'react';
import styles from './styles.module.css';
import Location from './location/Location';


const Body = () => {
    return (
        <div className = {styles.body}>
            
            <Location />
            
        </div>
    );
};

export default Body;