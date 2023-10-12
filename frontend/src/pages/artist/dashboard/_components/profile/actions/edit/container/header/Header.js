import React from 'react';
import styles from './styles.module.css';
import SubmitButton from './submit-btn/SubmitButton';


const Header = () => {
    return (
        <div className = {styles.header}>
            
            <span>ویرایش اطلاعات</span>

            <SubmitButton title = 'حذف حساب آرایشگری'
            
            />
            
        </div>
    );
};

export default Header;