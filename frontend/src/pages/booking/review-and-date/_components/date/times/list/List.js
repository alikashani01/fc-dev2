import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { editTime } from '../../../../../../../redux/booking/actions';
import { DateContext } from '../../Date';


const List = () => {
    
    const dispatch = useDispatch();
    
    const { setShow } = useContext(DateContext);

    const { date: { dayNumber, time: bookingTime } } = useSelector(state => state.booking);
    
    const { dates } = useSelector(state => state.bookingDateFree);

    const editHandler = (value) => {
        dispatch(editTime(value));
        setShow(false);
    };

    return (
        <ul className = {styles.list}>
            {dates?.map(day => (day.dayNumber === dayNumber) && day.times?.map(time => (
            <li className = {styles.item}>
                <button className = {styles.btn} 
                id = {time === bookingTime ? styles.time_selected : ''}
                onClick = {() => editHandler(time)}
                >
                    <span>
                        {Number(time).toLocaleString('fa')}
                    </span>
                </button>
            </li>
            )))}
        </ul>
    );
};

export default List;