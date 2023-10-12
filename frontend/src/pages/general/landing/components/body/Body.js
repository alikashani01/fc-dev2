import React from 'react';
import styles from './styles.module.css';
import Banner from './banner/Banner';
import Skills from './skills/Skills';
import Users from './users/Users';


const Body = () => {
    return (
        <div className={styles.body}>

            <Banner />
            
            <Skills />
            
            <Users />
            
        </div>
    );
};

export default Body;