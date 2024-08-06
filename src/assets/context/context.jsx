
import React, { createContext, useContext, useState } from 'react';
import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { auth } from '../../confit/firebase';
// import { auth } from '../firebase'; // Adjust the path as necessary

const AuthContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const setUpRecaptcha = async (number) => {
    setLoading(true);
    setError(null);

    try {
      // Check if reCAPTCHA is already initialized
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear(); // Clear any existing reCAPTCHA verifier
      }

      // Initialize the reCAPTCHA verifier
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'normal',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log('reCAPTCHA solved', response);
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          setError('Recaptcha expired. Please try again.');
          setLoading(false);
        }
      });

      const appVerifier = window.recaptchaVerifier;

      // Sign in with phone number
      const confirmationResult = await signInWithPhoneNumber(auth, number, appVerifier);
      
      // SMS sent. Store confirmation result for later verification
      window.confirmationResult = confirmationResult;
      console.log('OTP sent');
    } catch (error) {
      console.error('Error during sign-in:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async (otp) => {
    setLoading(true);
    setError(null);

    try {
      const result = await window.confirmationResult.confirm(otp);
      setUser(result.user);
      return result.user;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, setUpRecaptcha, verifyOTP }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthentication() {
  return useContext(AuthContext);
}