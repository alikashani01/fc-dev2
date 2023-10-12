import React from 'react';
import styles from './styles.module.css';
import Title from './title/Title';
import Info from './info/Info';


const Date = ({ date }) => {
    return (
        <div className = {styles.date}>

            <Title />
            
            <Info date = {date} />

        </div>
    );
};

export default Date;