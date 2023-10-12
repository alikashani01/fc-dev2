import React, { createContext, useState, useEffect } from 'react';
import { validate } from './validate';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { editService } from '../../../../../../redux/artist/dashboard/services/edit/actions';


export const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {

    const dispatch = useDispatch();

    const { id } = useParams();

    const { artist: { services } } = useSelector(state => state.artistAccountDetails);

    const currentService = services && services.find(x => x._id === id);

    

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
        
        if (currentService) {
            const { skill, title, description, duration: { hour, minute }, price } = currentService;
            setData({
                skill,
                title,
                description,
                hour,
                minute,
                price,
            });
        }
    }, [currentService]);

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
            dispatch(editService(id, data));
        };
    };

    const contextValues = {
        data,
        setData,
        changeHandler,
        errors,
        submitHandler,
        currentService,
    };

    return (
        <ServiceContext.Provider value = {contextValues}>

            {children}
            
        </ServiceContext.Provider>
    );
};

export default ServiceProvider;