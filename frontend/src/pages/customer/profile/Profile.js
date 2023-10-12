import React from 'react';
import styles from './styles.module.css';
import NavbarContainer from './_components/navbar/NavbarContainer';
import Body from './_components/body/Body';
// import Message from './_components/message/Message';
import VerifyMobile from './_components/verify-mobile/VerifyMobile';


const Profile = () => {
    return (
        <main id = {styles.main}>
                
            <NavbarContainer />
            
            <Body />
            
            {/* <Message /> */}
            
            <VerifyMobile />

        </main>
    );
};

export default Profile;