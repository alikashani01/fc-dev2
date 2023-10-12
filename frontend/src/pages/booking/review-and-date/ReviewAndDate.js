import React from 'react';
import styles from './styles.module.css';
import Header from './_components/header/Header';
import Date from './_components/date/Date';
import Footer from './_components/footer/Footer';
import Services from './_components/services/Services';
import Registration from './_components/registration/Registration';


const ReviewAndDate = () => {

    return (
        <main id = {styles.main}>
        
            <Header />
            
            <Services />

            <Date />

            <Footer />

            <Registration />
            
        </main>
    );
};

export default ReviewAndDate;