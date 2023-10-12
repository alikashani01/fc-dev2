import React from 'react';
import styles from './styles.module.css';
import Details from './details/Details';
// import Photo from './photo/Photo';


const Info = () => {
    return (
        <div className = {styles.info}>

            {/* <Photo /> */}

            <Details />

        </div>
    );
};

export default Info;