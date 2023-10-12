import React, { useContext, useEffect } from 'react';
import Button from './button/Button';
import Registration from './registration/Registration';
import { useSelector } from 'react-redux';
import { UsersContext } from '../Users';


const Artist = () => {
    const { artist, setArtist } = useContext(UsersContext);
    const { success, error } = useSelector(state => state.artistAccountRegistrationMobileAdd);
    useEffect(() => {
        if (success) setArtist({ ...artist, verify: true });
    }, [success]);
    
    return (
        <>
        <Button />
        <Registration />    
        </>
    );
};

export default Artist;