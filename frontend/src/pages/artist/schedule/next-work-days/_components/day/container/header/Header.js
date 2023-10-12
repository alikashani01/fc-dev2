import React, { useContext } from 'react';
import styles from './styles.module.css';
import { NextWorkDaysContext } from '../../../../NextWorkDays';


const Header = () => {

    const { day } = useContext(NextWorkDaysContext);

    return (
        <div className = {styles.header}>
            
            <span>
                {day}
            </span>
            
        </div>
    );
};

export default Header;