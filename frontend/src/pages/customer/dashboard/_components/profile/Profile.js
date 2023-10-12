import React from 'react';
import styles from './styles.module.css';
import Info from './info/Info';
import Menu from './menu/Menu';


const Profile = () => {
    return (
        <section className = {styles.section}>

            <Info />

            <Menu />

        </section>
    );
};

export default Profile;