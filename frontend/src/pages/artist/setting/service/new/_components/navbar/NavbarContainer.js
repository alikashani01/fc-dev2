import React, { useContext } from 'react';
import styles from './styles.module.css';
import Navbar from '../../../../../_component/navbar/Navbar';
import { Link } from 'react-router-dom';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { ServiceContext } from '../../scripts/context';


const NavbarContainer = () => {

    const { submitHandler } = useContext(ServiceContext);


    return (
        <Navbar>

            <div className={styles.container}>
            
                <div className = {styles.right}>
                    <Link to = '/artist/setting/services'>
                        <ArrowForwardIosRoundedIcon sx = {{ fontSize: '1.3rem', color: '#555c' }} />
                        <span className={styles.back_title}>
                            سرویس‌ها
                        </span>
                    </Link>
                    
                </div>
                
                <div className = {styles.center}>
                    <span>جدید</span>
                </div>

                <div className={styles.left}>
                    <button onClick={submitHandler}>
                        ذخیره
                    </button>
                </div>

            </div>

        </Navbar>
    );
};

export default NavbarContainer;