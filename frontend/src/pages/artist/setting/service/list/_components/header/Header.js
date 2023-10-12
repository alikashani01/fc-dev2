import React from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllServices } from '../../../../../../../redux/artist/dashboard/services/remove/actions';


const Header = ({ skill, setSkill, edit, setEdit }) => {

    const dispatch = useDispatch();

    const { artist: { services } } = useSelector(state => state.artistAccountDetails);

    const toggleHandler = () => setEdit(!edit);

    const removeHandler = () => {
        if (window.confirm('حذف تمام سرویس‌ها؟')) dispatch(removeAllServices());
    };

    return (
        services.length > 0 &&
        <header className = {styles.header}>
            
            <button onClick = {toggleHandler}>
                {edit ? 'لغو' : 'ویرایش'}
            </button>

            {edit
            ? <button className={styles.remove_btn} onClick = {removeHandler}>
                حذف تمام سرویس‌ها
            </button>
            : <div className = {styles.container}>
                    
                <button 
                id = {skill === 'همه' ? styles.selected : ''}
                onClick = {() => setSkill('همه')}
                >
                    همه
                </button>
                
                <button 
                id = {skill === 'میکاپ' ? styles.selected : ''}
                onClick = {() => setSkill('میکاپ')}
                >
                    میکاپ
                </button>
                
                <button 
                id = {skill === 'مو' ? styles.selected : ''}
                onClick = {() => setSkill('مو')}
                >
                    مو
                </button>

                <button 
                id = {skill === 'ناخن' ? styles.selected : ''}
                onClick = {() => setSkill('ناخن')}
                >
                    ناخن
                </button>
                
            </div>
            }
        </header>
    );
};

export default Header;