import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Details from './details/Details';
import { getCurrentBook } from '../../../../../../redux/artist/dashboard/book/details/actions';


const CurrentBook = () => {

    const dispatch = useDispatch();

    const { success } = useSelector(state => state.artistAccountDetails);
    
    const { book, book: { services } } = useSelector(state => state.artistDashboardBookCurrentDetails);

    const { success: successEnd } = useSelector(state => state.artistDashboardBookEnd);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch(getCurrentBook());
    }, [success, successEnd]);
    
    useEffect(() => {
        successEnd && setOpen(false);
    }, [successEnd, setOpen]);
    
    
    const openHandler = () => setOpen(true);

    return (
        book && book._id &&
        <>
        <div className = {styles.current_book} onClick = {openHandler}>
            
            <div className={styles.top}>
                
                <div className={styles.title}>
                    <span className={styles.circle}></span>
                    <span className={styles.text}>
                        در حال انجام
                    </span>
                </div>

                <div className={styles.date}>
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

            <ul className={styles.services}>
                {services?.map(item => (
                <li key={services._id} className={styles.item}>
                    {item.title}
                </li>
                ))}
            </ul>
            
        </div>
        <Details open={open} setOpen={setOpen} />
        </>
    );
};

export default CurrentBook;