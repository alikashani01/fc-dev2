import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import CurrentBook from './current-book/CurrentBook';
import List from './list/List';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../../../../redux/artist/dashboard/book/list/actions';


const ActiveBooks = () => {

    const dispatch = useDispatch();

    const { success } = useSelector(state => state.artistAccountDetails);

    const status = 'فعال';

    useEffect(() => {
        success &&dispatch(getBooks(status));
    }, [success]);
    
    return (
        <section className = {styles.section}>

            <CurrentBook />

            <List />

        </section>
    );
};

export default ActiveBooks;