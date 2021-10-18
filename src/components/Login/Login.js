import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const ridirect_uri = location.state?.form || '/home';
    const history = useHistory();

    const hendleGoogleLogin =() => {
        signInUsingGoogle()
        .then(result => {
            history.push(ridirect_uri)
        })
    }

    return (
        <div>
            <div className='login'>
                <h2>Login:</h2>
                <form>
                    <input type="email" placeholder="Enter Your Email" />
                    <br/>
                    <input type="password" placeholder="Enter Your Password" />
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                <p>new to Medi-Care? <Link to="/register">Create Account</Link></p>
                <div>---------or--------</div>
                <button onClick={hendleGoogleLogin}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;