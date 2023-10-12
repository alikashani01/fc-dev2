import React from 'react';
import styles from './styles.module.css';
import NavbarContainer from './_components/navbar/NavbarContainer';
import Activation from './_components/activation/Activation';
import Body from './_components/body/Body';


const Day = () => {
    return (
        <main id = {styles.main}>
                
            <NavbarContainer />
            
            <Activation />
        
            <Body />

        </main>
    );
};

export default Day;