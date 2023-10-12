import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const CurrentBook = () => {

    const { books } = useSelector(state => state.artistDashboardBookList);

    const currentBook = books && books.find(x => x.status === 'در حال انجام');
    
    return (
        currentBook &&
        <div className = {styles.book}>

            CurrentBook

        </div>
    );
};

export default CurrentBook;