import React from 'react';
import styles from './styles.module.css';
import Title from './title/Title';
import Info from './info/Info';


const Date = () => {
    return (
        <div className = {styles.date}>

            <Title />
            
            <Info />

        </div>
    );
};

export default Date;