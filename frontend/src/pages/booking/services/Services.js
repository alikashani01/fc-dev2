import React, { useState } from 'react';
import styles from './styles.module.css';
import Header from './_components/header/Header';
import List from './_components/list/List';
import Skills from './_components/skills/Skills';
import Footer from './_components/footer/Footer';


const Services = () => {

    const [skill, setSkill] = useState('همه');

    return (
        <main id = {styles.main}>
        
            <Header />

            <Skills skill = {skill} setSkill = {setSkill} />

            <div className={styles.top}>
                <span className={styles.title}>
                    حداقل ۱ سرویس انتخاب کنید
                </span>
            </div>
            
            <List />
            
            <Footer />
            
        </main>
    );
};

export default Services;