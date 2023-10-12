import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getArtistDetails } from '../../redux/artist/account/details/actions';
import Footer from './_component/footer/Footer';
import CompleteRegistration from './_component/complete-registeration/CompleteRegistration';


const Artist = () => {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getArtistDetails())
    }, []);
    
    return (
        <div>
            
            <Outlet />

            <Footer />

            <CompleteRegistration />

        </div>
    );
};

export default Artist;