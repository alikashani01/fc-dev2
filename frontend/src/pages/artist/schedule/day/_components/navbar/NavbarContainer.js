import React, { useContext } from 'react';
import styles from './styles.module.css';
import Navbar from '../../../../_component/navbar/Navbar';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
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
                    {/* <span>{dayName}</span> */}
                </div>

                <div className={styles.left}>
                    
                </div>

            </div>

        </Navbar>
    );
};

export default NavbarContainer;