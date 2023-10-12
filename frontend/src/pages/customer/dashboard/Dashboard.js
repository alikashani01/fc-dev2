import React from 'react';
import styles from './styles.module.css';
import Profile from './_components/profile/Profile';
import ActiveBooks from './_components/active-books/ActiveBooks';


const Dashboard = () => {
    return (
        <main id = {styles.main}>
                
            <Profile />
            
            <ActiveBooks />

        </main>
    );
};

export default Dashboard;