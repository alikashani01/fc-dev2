import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentBook } from '../../../../../../redux/customer/dashboard/book/details/actions';
import Details from './details/Details';


const CurrentBook = () => {

    const dispatch = useDispatch();

    const { book, book: { services } } = useSelector(state => state.customerDashboardBookCurrentDetails);

    const [open, setOpen] = useState(false);
    
    return (
        book && book._id &&
        <>
        <div className = {styles.current_book} onClick={() => setOpen(true)}>
            
            <div className = {styles.top}>
                
                <div className = {styles.title}>
                    <span className = {styles.circle}></span>
                    <span className = {styles.text}>
                        در حال انجام
                    </span>
                </div>

                <div className = {styles.date}>
                    <span>شروع در</span>
                    <div>
                        <span>
                            {book && book.startedDate && book.startedDate.time.hour.toLocaleString('fa')}
                        </span>
                        :
                        <span>
                            {book && book.startedDate && book.startedDate.time.minute.toLocaleString('fa')}
                        </span>
                    </div>
                </div>

            </div>

            <ul className = {styles.services}>
                {services?.map(item => (
                <li key = {item._id} className = {styles.item}>
                    {item.title}
                </li>
                ))}
            </ul>

        </div>
        <Details open = {open} setOpen = {setOpen} />
        </>
    );
};

export default CurrentBook;