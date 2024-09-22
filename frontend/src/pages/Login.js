import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; import { login } from '../services/api';

const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password).then(response => {
            dispatch({ type: 'LOGIN_SUCCESS', payload: response.data }); 
            history.push('/');
        }).catch(err => { console.error(err); });
    };

    return (<div> <h1>Login</h1> <form onSubmit={handleSubmit}> <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' required /> <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' required /> <button type='submit'>Login</button> </form> </div>);
};

export default Login;
