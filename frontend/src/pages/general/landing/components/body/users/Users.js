import React, { createContext, useState } from 'react';
import styles from './styles.module.css';
import Artist from './artist/Artist';
import Customer from './customer/Customer';


export const UsersContext = createContext();
const Users = () => {
    const [data, setData] = useState('');
    const [artist, setArtist] = useState({
        add: false,
        verify: false,
    });
    const [customer, setCustomer] = useState({
        add: false,
        verify: false,
    });
    const contextValues = {
        data,
        setData,
        artist,
        setArtist,
        customer,
        setCustomer,
    };
    return (
        <div className={styles.users}>
        <UsersContext.Provider value = {contextValues}>
            
            <Artist />
                
            <Customer />
    
        </UsersContext.Provider>
        </div>
    );
};

export default Users;