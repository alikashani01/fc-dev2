import React from 'react';
import styles from './styles.module.css';
import NavbarContainer from './_components/navbar/NavbarContainer';
import Body from './_components/body/Body';


const Setting = () => {
    return (
        <main id = {styles.main}>
                
            <NavbarContainer />
            
            <Body />

        </main>
    );
};

export default Setting;