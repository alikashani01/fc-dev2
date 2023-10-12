import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { verifyMobile } from '../../../../../../../../../../../../redux/customer/account/registration/actions';


const VerificationCodeInput = () => {
    
    const dispatch = useDispatch();

    const { customer } = useSelector(state => state.customerAccountRegistrationMobileAdd);

    const [verificationCode, setVerificationCode] = useState(['', '', '', '']);

    const inputRefs = useRef([]);

    useEffect(() => {
        const updated = 
            verificationCode[0] !== ''  
            && verificationCode[1] !== ''
            && verificationCode[2] !== ''
            && verificationCode[3] !== ''
        if (updated) {
            dispatch(verifyMobile(customer.mobile, verificationCode));
        } 
    }, [verificationCode])

    const handleChange = (index, value) => {
        const updatedCode = [...verificationCode];
        updatedCode[index] = value;
        setVerificationCode(updatedCode);
        if (index < 3 && value !== '') {
            inputRefs.current[index + 1].focus();
        } else if (index === 3 && value !== '') {
            dispatch(verifyMobile(customer.mobile, updatedCode.join('')));
        };
    };
    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && index > 0 && verificationCode[index] === '') {
            inputRefs.current[index - 1].focus();
        };
    };
    const handlePaste = async(e) => {
        e.preventDefault();
        
        const pastedData = e.clipboardData.getData('text/plain');
        const updatedCode = [...verificationCode];

        for (let i = 0; i < pastedData.length && i < 4; i++) {
            updatedCode[i] = pastedData[i];
        }

        setVerificationCode(updatedCode);
        inputRefs.current[0].focus();

    };

    return (
        <div className={styles.container}>

            {verificationCode.map((code, index) => (
            <input
            key = {index}
            type = "number"
            maxLength = {1}
            inputMode = 'numeric'
            autoComplete = 'one-time-code'
            value = {code}
            onChange = {(e) => handleChange(index, e.target.value)}
            onKeyDown = {(e) => handleKeyDown(index, e)}
            onPaste = {handlePaste}
            ref = {(ref) => (inputRefs.current[index] = ref)}
            />
            ))}

        </div>
    );
};

export default VerificationCodeInput;
