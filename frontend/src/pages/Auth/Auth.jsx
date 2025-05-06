import React from 'react';
import './Auth.css';
import Logo from '../../img/logo.png';

const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>G Media</h1>
                    <h6>Explore the Ideas throughout the World</h6>
                </div>
            </div>
            {/* <SignUp/> */}
            <Login/>
        </div>
    )
}

function Login() {
    return(
        <div className="a-right">
            <form className="infoForm">
                <h3>Login</h3>
               
                <div>
                    <input type="text" placeholder='User Name' className="infoInput" name='username'/>
                </div>
                <div>
                    <input type="password" placeholder='Password' className="infoInput" name='password'/>
                </div>
                <div>
                    <span style={{fontSize:"12px"}}>Don't have an account. SignUp!</span>
                </div>
                <button className="button infoButton" type='submit'>Login</button>
            </form>
        </div>
    )
}

function SignUp() {
    return(
        <div className="a-right">
            <form className="infoForm">
                <h3>Sign Up</h3>
                <div>
                    <input type="text" placeholder='Frist Name' className='infoInput' name='firstname'/>
                    <input type="text" placeholder='Last Name' className='infoInput' name='lastname'/>
                </div>
                <div>
                    <input type="text" placeholder='User Name' className="infoInput" name='username'/>
                </div>
                <div>
                    <input type="password" placeholder='Password' className="infoInput" name='password'/>
                    <input type="text" placeholder='Confirm Password' className='infoInput' name='confirmpassword'/>
                </div>
                <div>
                    <span style={{fontSize:"12px"}}>Already have an account. Login!</span>
                </div>
                <button className="button infoButton" type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Auth;