import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const {hendleGoogleLogin} = useAuth();

    return (
        <div className="login">
            <div>
                 <div className="frm-bd w-25 mx-auto">
                 <form>
                 <h4 className="mb-3">Please Registration</h4>
                 <input type="text" placeholder="Enter Your Name" />
                 <br/>
                    <input type="email" placeholder="Enter Your Email" />
                    <br/>
                    <input type="password" placeholder="Enter Your Password" />
                    <br/>

                    <input type="submit" value="Submit" />
                </form>
                 </div>
                <p>Already have an account? <Link to="/login" className="ftm-text">Log In</Link></p>
            </div>

            
            <div>---------or--------</div>
                <button className="frm-btm" onClick={hendleGoogleLogin}>Google Sign In</button>
        </div>
    );
};

export default Register;