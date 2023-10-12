import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import CurrentBook from './current-book/CurrentBook';
import List from './list/List';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../../../../redux/customer/dashboard/book/list/actions';
import { getCurrentBook } from '../../../../../redux/customer/dashboard/book/details/actions';


const ActiveBooks = () => {

    const dispatch = useDispatch();

    const { book } = useSelector(state => state.customerDashboardBookCurrentDetails);

    useEffect(() => {
        dispatch(getBooks());
    }, []);


    useEffect(() => {
        dispatch(getCurrentBook());
    }, []);
    
    return (
        <section className = {styles.section}>

            {book && book._id &&
            <CurrentBook />
            }
            <List />

        </section>
    );
};

export default ActiveBooks;