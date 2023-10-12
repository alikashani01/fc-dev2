import React, { createContext, useState, useEffect } from 'react';
import { validate } from './validate';
import { useDispatch } from 'react-redux';
import { addService } from '../../../../../../redux/artist/dashboard/services/add/actions';


export const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {

    const dispatch = useDispatch();

    const [data, setData] = useState({
        skill: '',
        title: '',
        description: '',
        hour: null,
        minute: null,
        price: null,
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {

    }, []);

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData({
            ...data,
            [name]: value,
        });
    };

    const submitHandler = () => {
        if (
            !data.skill ||
            !data.title || 
            !data.description ||
            data.hour == 0 ||
            data.minute == 0 ||
            data.price == 0
        ) {
            alert('تمام ورودی‌ها الزامیست');
        } else {
            dispatch(addService(data));
        };
    };

    const contextValues = {
        data,
        setData,
        changeHandler,
        errors,
        submitHandler,
    };

    return (
        <ServiceContext.Provider value = {contextValues}>

            {children}
            
        </ServiceContext.Provider>
    );
};

export default ServiceProvider;