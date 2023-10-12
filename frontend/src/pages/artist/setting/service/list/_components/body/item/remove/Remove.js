import React from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { removeService } from '../../../../../../../../../redux/artist/dashboard/services/remove/actions';


const RemoveButton = ({ item, edit }) => {

    const dispatch = useDispatch();

    const removeHandler = () => {
        if (window.confirm('حذف سرویس؟')) dispatch(removeService(item._id));
    };

    return (
        <button className = {styles.remove_btn} id = {edit ? styles.edit : ''}
        onClick = {removeHandler}
        >
            -
        </button>
    );
};

export default RemoveButton;