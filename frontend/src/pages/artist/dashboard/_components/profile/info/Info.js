import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const Info = () => {

    const { artist: { mobile, fullName } } = useSelector(state => state.artistAccountDetails);

    return (
        <div className = {styles.details}>

            <span className = {styles.name}>
                {fullName}
            </span>
            
            <span className = {styles.mobile}>
                {mobile}
            </span>

        </div>
    );
};

export default Info;