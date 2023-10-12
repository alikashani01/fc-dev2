import React, { useContext } from 'react';
import styles from './styles.module.css';
import Container from './container/Container';
import { ServiceContext } from '../../../scripts/context';


const Duration = () => {

    const { data: { hour, minute } } = useContext(ServiceContext);

    return (
        <div className={styles.duration}>

            <div className={styles.header}>
                <span className={styles.title}>
                    مدت زمان
                </span>
                <div className={styles.values}>
                    <div className={styles.part}>
                        {hour > 0 && 
                        <>
                        <span>
                            {Number(hour).toLocaleString('fa')}
                        </span>
                        <span className={styles.unit}>
                            ساعت
                        </span>
                        </>
                        }
                    </div>
                    <div className={styles.part}>
                        {minute > 0 && 
                        <span className={styles.part}>
                            <span className={styles.and}>
                                {hour > 0 && 'و'}
                            </span>
                            <>
                            <span>
                                {Number(minute).toLocaleString('fa')}
                            </span>
                            <span className={styles.unit}>
                                دقیقه
                            </span>
                            </>
                        </span>
                        }
                    </div>
                </div>
            </div>

            <Container />

        </div>
    );
};

export default Duration;