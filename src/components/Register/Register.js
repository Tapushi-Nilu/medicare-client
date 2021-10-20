import { getAuth, createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const {user, signInUsingGoogle} = useAuth();

    const auth = getAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const history = useHistory();

    const handleName = e =>  {
        setName(e.target.value)
    }

    const handleEmailChanged = e => {
        setEmail(e.target.value);

    }
    const handlePasswordChanged = e => {
        setPassword(e.target.value);

    }

    const handleSignInUsingGoogle = () => {
        signInUsingGoogle();
        if (user.email || user.displayName) {
            history.push('/home');  
        }
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
            history.push('/home')
            console.log(user);
            setError('');
            setUserName();
        })
        .catch((error) => {
            setError(error.massage)
          });

    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {displayName:name})
        .then(result => { })
    }


    return (
        <div className="login">
            <div>
                 <div className="frm-bd mx-auto">
                 <form onSubmit={handleLogin}>
                    <h4 className="mb-3">Please Registration</h4>
                    <input onBlur={handleName} type="text" placeholder="Your Name" />
                     <br/>
                    <input onBlur={handleEmailChanged} type="email" placeholder="Enter Your Email" />
                    <br/>
                    <input onBlur={handlePasswordChanged} type="password" placeholder="Enter Your Password" />
                    <br/>
                    <div className="text-danger">{error}</div>
                    <input type="submit" value="Register" />
                </form>
                 </div>
                <p>Already have an account? <Link to="/login" className="ftm-text">Log In</Link></p>
            </div>

            
            <div>---------or--------</div>
                <button className="frm-btm" onClick={handleSignInUsingGoogle}>Google Sign In</button>
        </div>
    );
};

export default Register;