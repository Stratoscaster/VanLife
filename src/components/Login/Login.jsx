import './Login.css';
import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {loginUser} from "../../api.js";

export default function Login() {
    const navigate = useNavigate();
    const [loginFormData, setLoginFormData] = React.useState({email: '', password: ''});
    const [status, setStatus] = React.useState('idle');
    const location = useLocation();
    const redirectMessage = location?.state?.message ?? null;
    const loginRedirect = location?.state?.loginRedirect ?? '/host';
    const [errorMessage, setErrorMessage] = React.useState(redirectMessage ?? <>&nbsp;</>);
    const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem('token') != null);

    function handleFormChange(e) {
        const {name, value} = e.target;
        setLoginFormData(prev => ({...prev, [name]: value}));

    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(loginFormData);
        setErrorMessage(<>&nbsp;</>);
        setStatus('submitting');
        loginUser({email: loginFormData.email, password: loginFormData.password}).then(
            (res) => {
                if (res.user) {
                    setErrorMessage(<>&nbsp;</>);
                    // Store the token in localStorage
                    localStorage.setItem('token', res.token);
                    setIsLoggedIn(true);
                    // Don't navigate back to login when user back-navigates
                    setTimeout(() => {
                        navigate(loginRedirect, {replace: true});
                    }, 1000)
                } else {
                    setErrorMessage('Unknown error occurred');
                }
            }
        ).catch(error => {
            setErrorMessage(error.message);
        }).finally(() => {
                setStatus('idle');
            }
        );
    }

    function handleLogout() {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setStatus('idle');
        console.log('logged out');
        console.log('isLoggedIn:', isLoggedIn);
        console.log('status:', status);
        console.log('token:', localStorage.getItem('token'));
    }
    console.log('-Page State-')
    console.log('isLoggedIn:', isLoggedIn);
    console.log('status:', status);
    console.log('token:', localStorage.getItem('token'));
    return (
        <div className={'LOGIN__page'}>
            <div className="LOGIN__page-contain">
                {errorMessage != null && <h2 className={'LOGIN__error_message'}>{errorMessage}</h2>}
                {
                    !isLoggedIn ?
                        <form onSubmit={handleSubmit} className="LOGIN__content-contain">
                            <h1>Sign in to your account</h1>
                            <input type={'email'} name={'email'}
                                   onChange={handleFormChange} placeholder={'Email'}
                                   className={'LOGIN__login-input LOGIN__input-top'}/>
                            <input type={'password'} name={'password'}
                                   onChange={handleFormChange} placeholder={'Password'}
                                   className={'LOGIN__login-input LOGIN__input-bottom'}/>
                            <button className={'LOGIN__button'} disabled={status === 'submitting'}>Log in</button>
                        </form>
                        : <>
                            <h1>You are logged in</h1>
                            <div className={'LOGIN__content-contain'}>
                                <button className={'LOGIN__button LOGIN__logout-button'} disabled={status === 'submitting'}
                                        onClick={handleLogout}>Log out
                                </button>
                            </div>
                        </>
                }
            </div>
        </div>
    )
}