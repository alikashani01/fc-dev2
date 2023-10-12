import React from 'react';
import styles from './styles.module.css';
import Navbar from '../../../../_component/navbar/Navbar';


const NavbarContainer = ({ status, setStatus }) => {

    return (
        <Navbar>

            <div className = {styles.right}>
                نوبت‌ها
            </div>

            <div className={styles.left}>
                <div className={styles.container}>
                    
                    <button 
                    id = {status === 'فعال' ? styles.selected : ''}
                    onClick = {() => setStatus('فعال')}
                    >
                        فعال
                    </button>
                    
                    <button 
                    id = {status === 'انجام شده' ? styles.selected : ''}
                    onClick = {() => setStatus('انجام شده')}
                    >
                        انجام شده
                    </button>

                    <button 
                    id = {status === 'لغو شده' ? styles.selected : ''}
                    onClick = {() => setStatus('لغو شده')}
                    >
                        لغو شده
                    </button>
                    
                </div>
            </div>

        </Navbar>
    );
};

export default NavbarContainer;