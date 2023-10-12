import React, { createContext, useState } from 'react';
import styles from './styles.module.css';
import NavbarContainer from './_components/navbar/NavbarContainer';
import Body from './_components/body/Body';
import Day from './_components/day/Day';


export const NextWorkDaysContext = createContext();

const NextWorkDays = () => {

    const [open, setOpen] = useState(false);

    const [day, setDay] = useState('');

    const openHandler = (day) => {
        setDay(day);
        setOpen(true);
    };

    const contextValue = {
        open,
        setOpen,
        day,
        setDay,
        openHandler,
    };

    return (
        <main id = {styles.main}>
        <NextWorkDaysContext.Provider value = {contextValue}>

            <NavbarContainer />
        
            <Body onOpen = {openHandler} />

            <Day open = {open} setOpen = {setOpen} day = {day} />

        </NextWorkDaysContext.Provider>
        </main>
    );
};

export default NextWorkDays;