import React, { createContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Backdrop } from '@mui/material';
import Container from './container/Container';


export const RegistrationContext = createContext();

const Registration = () => {
    
    const navigate = useNavigate();
    
    const { success } = useSelector(state => state.customerAccountRegistrationMobileAdd);
    const { success: successVerify } = useSelector(state => state.customerAccountRegistrationMobileVerify);
    const { customerInfo } = useSelector(state => state.customerAccountRegistrationMobileVerify);

    const [data, setData] = useState('');

    const [step, setStep] = useState({
        add: false,
        verify: false,
    });

    const [open, setOpen] = useState(false);

    useEffect(() => {
        !customerInfo && setOpen(true);
    }, [customerInfo]);
    
    useEffect(() => {
        successVerify && setOpen(false)
    }, [successVerify]);
    
    useEffect(() => {
        success && setStep({
            verify: true
        });
    }, [success]);
    
    const closeHandler = () => {
        navigate('/booking/services', { replace: true });
        setOpen(false);
    };

    const contextValues = {
        data, 
        setData,
        step,
        setStep,
        open,
        setOpen,
    };

    return (
        <Backdrop id = {styles.backdrop} open = {open} sx = {{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            
            <div className = {styles.hidden_back} onClick = {closeHandler} />
            <RegistrationContext.Provider value={contextValues}>
                
                <Container open = {open} />
            
            </RegistrationContext.Provider>

        </Backdrop>
    );
};

export default Registration;