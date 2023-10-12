import React from 'react';
import styles from './styles.module.css';
import Duration from './duration/Duration';


const Info = ({ item, edit }) => {

    return (
        <div className = {styles.info}>
            
            <div className={styles.right}>

                <span className={styles.title}>
                    {item.title}
                </span>

                <span className={styles.skill}>
                    {item.skill}
                </span>

            </div>
            
            <div className={styles.left}>

                <div className={styles.price}>
                    <span className={styles.value}>
                        {item.price.toLocaleString('fa')}
                    </span>
                    <span className={styles.unit}>
                        تومان
                    </span>
                </div>

                <Duration item = {item} />
                
            </div>

        </div>
    );
};

export default Info;