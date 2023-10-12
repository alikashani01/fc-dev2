import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { getBooks } from '../../../../redux/customer/dashboard/book/list/actions';
import NavbarContainer from './_components/navbar/NavbarContainer';
import Body from './_components/body/Body';


const Books = () => {

    const dispatch = useDispatch();

    const [status, setStatus] = useState('فعال');

    useEffect(() => {
        dispatch(getBooks(status));
    }, [status]);

    return (
        <main id = {styles.main}>
            
            <NavbarContainer status = {status} setStatus = {setStatus} />

            <Body status = {status} />

        </main>
    );
};

export default Books;