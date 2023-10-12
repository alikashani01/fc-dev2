import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { getBooks } from '../../../../redux/artist/dashboard/book/list/actions';
import Navbar from './_components/navbar/Navbar';
import Body from './_components/body/Body';


const Books = () => {

    const dispatch = useDispatch();

    const [status, setStatus] = useState('فعال');

    useEffect(() => {
        dispatch(getBooks(status));
    }, [status]);
    

    return (
        <main id = {styles.main}>
            
            <Navbar status = {status} setStatus = {setStatus} />

            <Body status = {status} />

        </main>
    );
};

export default Books;