import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFreeDates } from '../../../../../redux/booking/actions';


export const DateContext = createContext();

const DateProvider = ({ children }) => {
    
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
        <DateContext.Provider value = {contextValues}>
            {children}
        </DateContext.Provider>
    );
};

export default DateProvider;