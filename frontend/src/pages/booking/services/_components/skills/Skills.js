import React from 'react';
import styles from './styles.module.css';


const Skills = ({ skill, setSkill }) => {
    return (
        <div className = {styles.skills}>

            <div className = {styles.container}>
                    
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

        </div>
    );
};

export default Skills;