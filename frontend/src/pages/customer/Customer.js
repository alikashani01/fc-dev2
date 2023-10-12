import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCustomerDetails } from '../../redux/customer/account/details/actions';
import Footer from './_component/footer/Footer';
import CompleteRegistration from './_component/complete-registeration/CompleteRegistration';


const Customer = () => {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCustomerDetails())
    }, []);
    
    return (
        <div>
            
            <Outlet />

            <Footer />

            <CompleteRegistration />

        </div>
    );
};

export default Customer;