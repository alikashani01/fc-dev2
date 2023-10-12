import React, { createContext, useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFreeDates } from '../../../../../redux/booking/actions';
import Top from './top/Top';
import Days from './days/Days';
import Times from './times/Times';


export const DateContext = createContext()
const Date = () => {
    
    const dispatch = useDispatch();

    const { artist, services, date: { dayName, time } } = useSelector(state => state.booking);
    
    const [toggle, setToggle] = useState({
        editDay: true,
        editTime: false,
    });

    const [show, setShow] = useState(false);
    
    useEffect(() => {
        dispatch(getFreeDates(artist, services));
    }, []);
    
    useEffect(() => {
        if (dayName) {
            setToggle({
                ...toggle,
                editDay: false,
            });
        } else if (time > 0) {
            setToggle({
                ...toggle,
                editTime: false,
            });
        }
    }, []);

    const contextValues = {
        show,
        setShow,
    };

    return (
        <div className = {styles.part}>
        <DateContext.Provider value = {contextValues}>
            
            <Top />

            <Days />
            
            <Times />

        </DateContext.Provider>
        </div>
    );
};

export default Date;