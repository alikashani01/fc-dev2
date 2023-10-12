import React from 'react';
import styles from './styles.module.css';
import Activation from './activation/Activation';
import Times from './times/Times';


const Body = () => {
    return (
        <div className = {styles.body}>
            
            <Activation />
            
            <Times />
            
        </div>
    );
};

export default Body;