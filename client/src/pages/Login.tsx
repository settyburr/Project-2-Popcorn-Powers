import { useState, type FormEvent, type ChangeEvent } from 'react';

import Auth from '../utils/auth';
import { login } from '../api/authAPI';
import type { UserLogin } from '../interfaces/UserLogin';
import deadpool from "../assets/images/deadpool.png"
import marvel from "../assets/images/CaptainMarvel.jpg"
import ironman from "../assets/images/IronMan.jpg"
import spiderman from "../assets/images/spidermanjacket.jpg"

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: '',
    password: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  return (
    <div className='form-container'>
      <form className='form login-form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='form-group'>
          <label>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            value={loginData.username || ''}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            value={loginData.password || ''}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-primary' type='submit'>
            Login
          </button>
        </div>
      </form>
      {/* Add temp image to the Aside part of the page */}
      <aside>
      <div className="LoginContainer">
       <img src={ironman} alt="Iron Man Image"/>
      </div>
      <div className="LoginContainer">
       <img src={marvel} alt="Captain Marvel Image"/>
      </div>
      <div className="LoginContainer">
       <img src={deadpool} alt="Deadpool Image"/>
      </div>
      <div className="LoginContainer">
       <img src={spiderman} alt="Spiderman Image"/>
      </div>
      </aside>
      <section className="APIDetails"></section>
    </div>
  );
};

export default Login;
