import React, { useState } from 'react';
import MenuContainer from './menu/Menu';
import Edit from './edit/Edit';


const Actions = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
        <MenuContainer toggle = {toggle} setToggle = {setToggle} />
        <Edit toggle = {toggle} setToggle = {setToggle} />
        </>
    );
};

export default Actions;