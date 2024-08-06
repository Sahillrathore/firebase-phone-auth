import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { auth } from './firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const Auth = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const sentOtp = async () => {
    try {
      if (!auth) {
        throw new Error('Firebase auth is not initialized');
      }

      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: 'visible',
        
      }, auth);
      
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(auth, phone, appVerifier);
      console.log(confirmationResult);
      // SMS sent. Prompt user to type the code from the message, then sign the user in with confirmationResult.confirm(code).
    } catch (error) {
      console.error('Error during OTP sending', error);
    }
  }

  return (
    <div>
      <PhoneInput 
        country={'in'}
        value={phone}
        onChange={(phone) => setPhone("+" + phone)}
      />
      <button onClick={sentOtp}>Send OTP</button>
      <div id='recaptcha-container'></div>
      <input 
        type="text" 
        placeholder='Verify OTP' 
        value={otp} 
        onChange={(e) => setOtp(e.target.value)} 
      />
      <button>Verify</button>
    </div>
  );
}

export default Auth;
