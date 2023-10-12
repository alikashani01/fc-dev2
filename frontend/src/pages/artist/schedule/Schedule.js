import React from 'react';
import styles from './styles.module.css';
import Navbar from './_components/navbar/Navbar';
import Body from './_components/body/Body';


const Schedule = () => {
    return (
        <main id = {styles.main}>
                
            <Navbar />

            <Body />

        </main>
    );
};

export default Schedule;