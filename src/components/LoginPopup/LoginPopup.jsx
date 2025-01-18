import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Login'); // "Login" or "Sign Up"
  const [loginMethod, setLoginMethod] = useState('email'); // "email" or "contact"
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNumericInput = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      handleChange(e);
    }
  };

  const validate = () => {
    if (currState === 'Sign Up') {
      if (!/^[A-Za-z]+$/.test(formData.firstName.trim())) {
        alert('First name is required');
        return false;
      }
      if (!/^[A-Za-z]+$/.test(formData.lastName.trim())) {
        alert('Last name is required');
        return false;
      }
      if (!/^\d{10}$/.test(formData.contactNumber)) {
        alert('Enter valid contact number');
        return false;
      }
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
        alert('Invalid email address');
        return false;
      }
      if (formData.password.length < 8) {
        alert('Password must be at least 8 characters');
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return false;
      }
    } else if (currState === 'Login') {
      if (
        loginMethod === 'contact' &&
        !/^\d{10}$/.test(formData.contactNumber)
      ) {
        alert('Contact number must be exactly 10 digits');
        return false;
      }
      if (formData.password.length < 8) {
        alert('Password must be at least 8 characters');
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      if (currState === 'Login') {
        axios
          .post("http://localhost:3001/api/auth/login", { formData })
          .then((response) => {
            alert(JSON.stringify(response.data));
          })
          .catch((error) => {
            alert("Error submitting data:" + error);
          });

      } else {
        axios
          .post("http://127.0.0.1:3001/api/auth/register", { formData })
          .then((response) => {
            alert(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.error("Error submitting data:" + error);
          });
      }
      console.log('Form submitted:', formData);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default behavior
      handleSubmit(e); // Trigger form submission
    }
  };

  return (
    <div className="login-popup">
      <form
        className="login-popup-container"
        onSubmit={handleSubmit}
        onKeyDown={handleKeyPress} // Listen for Enter key
      >
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === 'Sign Up' && (
            <>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="contactNumber"
                placeholder="Contact number"
                value={formData.contactNumber}
                onChange={handleNumericInput}
                maxLength={10}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                minLength={8}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </>
          )}
        </div>

        {currState === 'Login' && (
          <>
            <div className='login-part'>
              <input
                type="text"
                name="contactNumber"
                placeholder="Contact number"
                value={formData.contactNumber}
                onChange={handleNumericInput}
                maxLength={10}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                minLength={8}
                required
              />
            </div>
          </>
        )}

        {currState === 'Sign Up' && (
          <div className="login-popup-condition">
            <input type="checkbox" required /> I agree to the terms of use & privacy policy.
          </div>
        )}
        <button type="submit">{currState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        <div>
          {currState === 'Login' ? (
            <p>
              <b>Don't have an account?</b>{' '}
              <span onClick={() => setCurrState('Sign Up')}>Sign up here</span>
            </p>
          ) : (
            <p>
              <b>Already have an account?</b>{' '}
              <span onClick={() => setCurrState('Login')}>Login here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
