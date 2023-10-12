import React, { createContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import Body from './components/body/Body';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';


export const LandingContext = createContext();
const Landing = () => {
    
    const navigate = useNavigate();
    
    const { artistInfo } = useSelector(state => state.artistAccountRegistrationMobileVerify);
    
    const { customerInfo } = useSelector(state => state.customerAccountRegistrationMobileVerify);
    
    const [toggle, setToggle] = useState('');
    
    useEffect(() => {
        artistInfo && navigate('/artist', { replace: true });
    }, [artistInfo]);
    
    useEffect(() => {
        customerInfo && navigate('/customer', { replace: true });
    }, [customerInfo]);

    const contextValues = {
        toggle,
        setToggle,
    };
    
    return (
        <main id = {styles.main}>
        <LandingContext.Provider value={contextValues}>
                
            <span className={styles.logo}>Fashion Ceremony</span>
            
            <Body />

        </LandingContext.Provider>
        </main>
    );
};

export default Landing;