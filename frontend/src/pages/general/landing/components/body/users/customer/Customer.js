import React, { useContext, useEffect } from 'react';
import Button from './button/Button';
import Registration from './registration/Registration';
import { useSelector } from 'react-redux';
import { UsersContext } from '../Users';


const Customer = () => {
    
    const { customer, setCustomer } = useContext(UsersContext);
    
    const { success, error } = useSelector(state => state.customerAccountRegistrationMobileAdd);
    
    useEffect(() => {
        if (success) setCustomer({ ...customer, verify: true });
    }, [success]);
    
    return (
        <>
        <Button />
        <Registration />    
        </>
    );
};

export default Customer;