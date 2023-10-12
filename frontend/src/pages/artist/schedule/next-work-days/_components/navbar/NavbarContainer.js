import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Navbar from '../../../../_component/navbar/Navbar';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';


const NavbarContainer = () => {

    const { dayName } = useParams();

    return (
        <Navbar>

            <div className={styles.container}>
            
                <div className = {styles.right}>
                    <Link to = '/artist/schedule'>
                        <ArrowForwardIosRoundedIcon sx = {{ fontSize: '1.3rem', color: '#555c' }} />
                        <span className = {styles.back_title}>
                            برنامه‌ی زمانی
                        </span>
                    </Link>
                    
                </div>
                
                <div className = {styles.center}>
                </div>

                <div className={styles.left}>
                    تقویم ۱۰ روز کاری آینده
                </div>

            </div>

        </Navbar>
    );
};

export default NavbarContainer;