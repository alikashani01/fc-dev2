import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Profile from './_components/profile/Profile';
import ActiveBooks from './_components/active-books/ActiveBooks';


const Dashboard = () => {

    const { loading } = useSelector(state => state.artistAccountDetails);

    return (
        <main id = {styles.main}>
           
            {loading
            ? <span>Loading...</span>
            : <>
            <Profile />
            <ActiveBooks />
            </>
            }            

        </main>
    );
};

export default Dashboard;