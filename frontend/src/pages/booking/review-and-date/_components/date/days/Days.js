import React from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { editDay } from '../../../../../../redux/booking/actions';


const Days = () => {
    
    const dispatch = useDispatch();
    
    const { date } = useSelector(state => state.booking);
    
    const { dates } = useSelector(state => state.bookingDateFree);
    
    const editHandler = (day) => {
        dispatch(editDay({
            dayName: day.dayName,
            dayNumber: day.dayNumber,
            month: day.month,
        }));
    };

    return (
        <Swiper id = {styles.days}
        slidesPerView = {'auto'}
        spaceBetween = {10}
        
        >
            {dates?.map((day => (
            <SwiperSlide id = {styles.slider}>
                <button className = {styles.item} 
                id = {(date.dayNumber === day.dayNumber) && (date.month === day.month) ? styles.selected : ''}
                onClick = {() => editHandler(day)}
                >
                    
                    <span className={styles.name}>
                        {day.dayName}
                    </span>

                    <div>
                        <span className={styles.number}>
                            {Number(day.dayNumber).toLocaleString('fa')}
                        </span>

                        <span className={styles.month}>
                            {day.month}
                        </span>

                    </div>

                </button>
            </SwiperSlide>
            )))}
        </Swiper>
    );
};

export default Days;