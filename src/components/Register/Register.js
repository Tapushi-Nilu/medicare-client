import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h2>Create Account</h2>
                 <form>
                    <input type="email" placeholder="Enter Your Email" />
                    <br/>
                    <input type="password" placeholder="Enter Your Password" />
                    <br/>
                    <input type="password" placeholder="Re-Enter Password" />
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Log In</Link></p>
            </div>
        </div>
    );
};

export default Register;