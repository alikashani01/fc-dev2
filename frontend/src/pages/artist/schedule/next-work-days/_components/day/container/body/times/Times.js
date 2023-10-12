import React, { useState } from 'react';
import styles from './styles.module.css';
import Status from './status/Status';
import Item from './item/Item';


const morning = [9, 10, 11];
const evening = [12, 13, 14, 15, 16];
const night = [18, 19, 20];

const Times = () => {

    const [status, setStatus] = useState('صبح');

    const editHandler = () => {

    };

    return (
        <div className = {styles.times}>

            <div className={styles.top}>
                <span>
                    ساعات کاری
                </span>
                <Status status = {status} setStatus = {setStatus} />
            </div>

            <ul className = {styles.times}>
                {status === 'صبح'
                ? morning.map(time => <Item time = {time} onEdit = {editHandler} />)
                : status === 'عصر'
                ? evening.map(time => <Item time = {time} onEdit = {editHandler} />)
                : status === 'شب'
                && night.map(time => <Item time = {time} onEdit = {editHandler} />)
                }
            </ul>

        </div>
    );
};

export default Times;