import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { getBookDetails } from '../../../../redux/customer/dashboard/book/details/actions';
import Header from './_components/header/Header';
import Body from './_components/body/Body';


const Details = () => {

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(getBookDetails(id));
    }, []);

    return (
        <main id = {styles.main}>
            
            <Header />

            <Body />
                        
        </main>
    );
};

export default Details;