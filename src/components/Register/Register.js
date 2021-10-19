import { getAuth, createUserWithEmailAndPassword} from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const {signInUsingGoogle} = useAuth();

    const auth = getAuth();
    const location = useLocation();
    const ridirect_uri = location.state?.from || '/home';
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
        <div className="login">
            <div>
                 <div className="frm-bd w-25 mx-auto">
                 <form onSubmit={handleLogin}>
                 <h4 className="mb-3">Please Registration</h4>
                 <br/>
                    <input onBlur={handleEmailChanged} type="email" placeholder="Enter Your Email" />
                    <br/>
                    <input onBlur={handlePasswordChanged} type="password" placeholder="Enter Your Password" />
                    <br/>
                    <div className="text-danger">{error}</div>
                    <input type="submit" value="Submit" />
                </form>
                 </div>
                <p>Already have an account? <Link to="/login" className="ftm-text">Log In</Link></p>
            </div>

            
            <div>---------or--------</div>
                <button className="frm-btm" onClick={signInUsingGoogle}>Google Sign In</button>
        </div>
    );
};

export default Register;