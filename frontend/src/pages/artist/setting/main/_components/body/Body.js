import React from 'react';
import styles from './styles.module.css';
import Activation from './activation/Activation';
import Menu from './menu/Menu';
import RemoveButton from './remove-button/RemoveButton';


const Body = () => {
    return (
        <div className = {styles.body}>

            <Activation />
            
            <Menu />

            <RemoveButton />

        </div>
    );
};

export default Body;