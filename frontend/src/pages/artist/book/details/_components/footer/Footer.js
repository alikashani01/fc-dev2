import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Submit from './submit/SubmitButton';


const Footer = () => {

    const { loading, book } = useSelector(state => state.artistDashboardBookDetails);

    return (
        !loading && book && book._id && book.status === 'فعال' &&
        <footer className = {styles.footer}>

            <Submit />

        </footer>
    );
};

export default Footer;