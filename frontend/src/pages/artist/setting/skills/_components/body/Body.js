import React from 'react';
import styles from './styles.module.css';
import Main from './main/Main';
import Sub from './sub/Sub';


const Body = () => {
    return (
        <div className = {styles.body}>

            <Main />

            <Sub />

        </div>
    );
};

export default Body;