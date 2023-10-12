import React from 'react';
import styles from './styles.module.css';
import NavbarContainer from './_components/navbar/NavbarContainer';
import Body from './_components/body/Body';
import ServiceProvider from './scripts/context';


const EditService = () => {
    return (
        <main id = {styles.main}>
                
            <ServiceProvider>
                
                <NavbarContainer />
            
                <Body />

            </ServiceProvider>

        </main>
    );
};

export default EditService;