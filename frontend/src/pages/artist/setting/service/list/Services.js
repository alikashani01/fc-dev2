import React, { useState } from 'react';
import styles from './styles.module.css';
import NavbarContainer from './_components/navbar/NavbarContainer';
import Body from './_components/body/Body';
import Header from './_components/header/Header';


const Services = () => {

    const [skill, setSkill] = useState('همه');

    const [edit, setEdit] = useState(false);

    return (
        <main id = {styles.main}>
                
            <NavbarContainer />

            <Header 
            skill = {skill} setSkill = {setSkill} 
            edit = {edit} setEdit = {setEdit} 
            />
            
            <Body 
            skill = {skill} setSkill = {setSkill} 
            edit = {edit} setEdit = {setEdit}
            />

        </main>
    );
};

export default Services;