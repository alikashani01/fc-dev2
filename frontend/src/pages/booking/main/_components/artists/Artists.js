import React from 'react';
import styles from './styles.module.css';
import List from './list/List';


const Artists = () => {
    return (
        <div className = {styles.artists}>

            <div className={styles.top}>
                <span className={styles.title}>
                    آرایشگران
                </span>
            </div>

            <List />

        </div>
    );
};

export default Artists;