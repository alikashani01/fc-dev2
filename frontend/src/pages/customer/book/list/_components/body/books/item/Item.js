import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';


const Item = ({ item }) => {
    return (
        <li key = {item._id} className = {styles.item}>
            <Link className = {styles.link} to = {`book/${item._id}`}>
                
                <div className = {styles.right}>
                    
                    <span className={styles.artist}>
                        {item.artistInfo.fullName}
                    </span>

                    <ul className = {styles.services}>
                        {item.services.map(service => (
                        <li className = {styles.service}>
                            {service.title}
                        </li>
                        ))}
                    </ul>

                </div>
                
                <div className={styles.left}>
                    
                    <div className={styles.date}>

                        
                        <div className={styles.time}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width="16" height="16" fill="orange" class="bi bi-stopwatch" viewBox="0 0 16 16">
                            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
                            <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
                            </svg>

                            <span className={styles.value}>
                                {item.date.time.toLocaleString('fa')}
                            </span>

                        </div>

                        <div className={styles.day}>
                            
                            <span className={styles.name}>
                                {item.date.dayName}
                            </span>
                            
                            <span className={styles.number}>
                                {Number(item.date.dayNumber).toLocaleString('fa')}
                            </span>
                            
                            <span className={styles.month}>
                                {item.date.month}
                            </span>

                        </div>
                        
                        

                    </div>

                    {/* <ArrowBackIosRoundedIcon sx = {{ fontSize: '1rem', color: '#555c' }} /> */}
                
                </div>

            </Link>
        </li>
    );
};

export default Item;