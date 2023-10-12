import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { activation } from '../../../../../../redux/artist/account/activation/actions';
import { getArtistDetails } from '../../../../../../redux/artist/account/details/actions';
import Requirement from './requirement/Requirement';
import { useParams } from 'react-router';

const Activation = () => {

    const dispatch = useDispatch();

    const { dayName } = useParams();

    const { artist: { isActive, skills: { main }, services, salon, schedule } } = useSelector(state => state.artistAccountDetails);
    const { loading, success } = useSelector(state => state.artistAccountActivation);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (success) dispatch(getArtistDetails());
    }, [success]);
    const requirementHandler = !main || !services.length || !salon.name;
    const activationHandler = () => {
        requirementHandler 
        ? setOpen(true)
        : dispatch(activation());
    };
    return (
        <>
        <section className = {styles.section}>

            <span className={styles.dayName}>
                {dayName}‌ها
            </span>
            <div className={styles.title}>
                <span>
                    {isActive ? 'باز است' : 'تعطیل است'}
                </span>

            <button className={styles.btn} onClick={activationHandler}>
                {loading
                ? <CircularProgress size = {15} sx = {{ color: '#333333' }} />
                : <span className = {styles.circle} id = {isActive ? styles.active : ''}></span>}
            </button>

            </div>
        </section>
        <Requirement open = {open} setOpen = {setOpen} />
        </>
    );
};

export default Activation;