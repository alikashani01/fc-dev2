import React from 'react';
import styles from './styles.module.css';
import Add from './add/Add';
import Verify from './verify/Verify';


const Body = () => {
    return (
        <div className = {styles.body}>
            
            <Add /> 
            
            <Verify />
            
        </div>
    );
};

export default Body;