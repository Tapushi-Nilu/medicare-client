import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../hooks/useAuth';
import './Login.css';
import img from '../images/Medicare-eye-clinic-logo.png'

const Login = () => {

    const auth = getAuth();
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const ridirect_uri = location.state?.from || '/home';
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const hendleGoogleLogin =() => {
        signInUsingGoogle()
        .then(result => {
            history.push(ridirect_uri)
        })

    }

    const handleEmailChanged = e => {
        setEmail(e.target.value);

    }
    const handlePasswordChanged = e => {
        setPassword(e.target.value);

    }

    const handleLogin = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be at least 6 characters long')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then( result => {
            const user = result.user;
            history.push(ridirect_uri);
            console.log(user);
            setError('');
        })
        .catch((error) => {
            setError(error.massage)
          });

    }

    return (
        <div>
            <div className='login'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="from-log">
                    <div className="frm-bd mx-auto">
                        <form onSubmit={handleLogin}>
                            <h4>Login</h4>
                            <input onBlur={handleEmailChanged} type="email" placeholder="Enter Your Email" required/>
                            <br/>
                            <input onBlur={handlePasswordChanged} type="password" placeholder="Enter Your Password" required/>
                            <br/>
                            <div className="text-danger">{error}</div>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                <p>new to Medi-Care? <Link to="/register" className="ftm-text">Create Account</Link></p>

                <div>---------or--------</div>
                <button className="frm-btm" onClick={hendleGoogleLogin}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;