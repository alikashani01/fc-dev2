import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { getBookDetails } from '../../../redux/customer/dashboard/book/details/actions';
import Footer from './_components/footer/Footer';
import Body from './_components/body/Body';


const Result = () => {

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(getBookDetails(id));
    }, []);

    return (
        <main id = {styles.main}>
        
            <Body />
            
            <Footer />
            
        </main>
    );
};

export default Result;