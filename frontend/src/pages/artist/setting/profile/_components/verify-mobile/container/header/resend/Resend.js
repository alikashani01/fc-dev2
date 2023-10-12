import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { editMobile } from '../../../../../../../../../redux/artist/account/mobile/actions';
import { ARTIST_ACCOUNT_MOBILE_VERIFY_RESET } from '../../../../../../../../../redux/artist/account/mobile/constants';
import Submit from './submit/Submit';


const Resend = () => {

    const dispatch = useDispatch();

    const { loading, success, artist } = useSelector(state => state.artistAccountMobileEdit);

    const [counter, setCounter] = useState(15);

    useEffect(() => {
        setCounter(15);
    }, [success]);

    useEffect(() => {
        setTimeout(() => {
            counter >= 1 && setCounter(counter - 1);
        }, 1000);
    }, [counter]);

    const resendHandler = () => {
        if (counter > 0) return;
        dispatch({ type: ARTIST_ACCOUNT_MOBILE_VERIFY_RESET });
        dispatch(editMobile(artist.mobile));
    };

    const Counter = () => counter >= 1 && (
        <span className = {styles.timer}>
            {counter.toLocaleString('fa')}
        </span>
    );

    return (
        <div className = {styles.resend}>
            
            <Submit title = 'ارسال مجدد' 
            onSubmit = {resendHandler}
            loading = {loading}
            counter = {counter}
            />
            
            <Counter />

        </div>
    );
};

export default Resend;