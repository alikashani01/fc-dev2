import React from 'react';
import styles from './styles.module.css';
import Name from './name/Name';
import Mobile from './mobile/Mobile';


const Body = () => {
    return (
        <div className = {styles.body}>

            <Name />
            
            <Mobile />

        </div>
    );
};

export default Body;