import React from 'react';
import styles from './styles.module.css';

const Duration = ({ item }) => {

    return (
        <div className = {styles.duration}>
            <div className={styles.part}>
                {item.duration.hour > 0 && 
                <>
                <span>
                    {Number(item.duration.hour).toLocaleString('fa')}
                </span>
                <span className={styles.unit}>
                    ساعت
                </span>
                </>
                }
            </div>
            <div className={styles.part}>
                {item.duration.minute > 0 && 
                <span className={styles.part}>
                    <span className={styles.and}>
                        {item.duration.hour > 0 && 'و'}
                    </span>
                    <>
                    <span>
                        {Number(item.duration.minute).toLocaleString('fa')}
                    </span>
                    <span className={styles.unit}>
                        دقیقه
                    </span>
                    </>
                </span>
                }
            </div>
        </div>
    );
};

export default Duration;