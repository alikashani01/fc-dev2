import React from 'react';
import styles from './styles.module.css';
import Info from './info/Info';
import Actions from './actions/Actions';

const Profile = () => {
    return (
        <section className = {styles.section}>

            <Info />

            <Actions />

        </section>
    );
};

export default Profile;