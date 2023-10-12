import React from 'react';
import styles from './styles.module.css';
import CurrentBook from './current-book/CurrentBook';
import Books from './books/Books';


const Body = ({ status, setStatus }) => {
    return (
        <div className = {styles.body}>

            <CurrentBook />

            <Books status = {status} setStatus = {setStatus} />

        </div>
    );
};

export default Body;