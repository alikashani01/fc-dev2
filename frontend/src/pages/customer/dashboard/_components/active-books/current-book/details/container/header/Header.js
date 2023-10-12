import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

const Header = () => {

    const { book, book: { services } } = useSelector(state => state.customerDashboardBookCurrentDetails);

    return (
        <div className = {styles.header}>
            
            <div>
            </div>
            <div>
                در حال انجام
            </div>
            <div>

            </div>
            
        </div>
    );
};

export default Header;