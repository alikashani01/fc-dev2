import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getArtistDetails } from '../../../../../../redux/booking/artist/actions';


const Artist = () => {
    
    const dispatch = useDispatch();

    const { artist: { _id } } = useSelector(state => state.booking);
    
    const { artist } = useSelector(state => state.bookingArtistDetails);

    useEffect(() => {
        dispatch(getArtistDetails(_id));
    }, []);
    
    return (
        <div className = {styles.artist}>

            <img src = {artist.photo} />
            
            <div>

                <span className={styles.title}>
                    آرایشگر
                </span>

                <span className={styles.name}>
                    {artist.fullName}
                </span>
                
            </div>

        </div>
    )
}

export default Artist