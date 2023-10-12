import React from 'react';
import styles from './styles.module.css';
import NavbarContainer from './_components/navbar/NavbarContainer';
import Body from './_components/body/Body';
import Message from './_components/message/Message';


const Salon = () => {
    return (
        <main id = {styles.main}>
                
            <NavbarContainer />
            
            <Body />
            
            <Message />

        </main>
    );
};

export default Salon;