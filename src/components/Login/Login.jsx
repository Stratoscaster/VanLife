import './Login.css';
import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {loginUser} from "../../api.js";

export default function Login() {
    const navigate = useNavigate();
    const [loginFormData, setLoginFormData] = React.useState({email: '', password: ''});
    const [status, setStatus] = React.useState('idle');
    const location = useLocation();
    const [errorMessage, setErrorMessage] = React.useState(location?.state?.message ?? <>&nbsp;</>);

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
                    // Don't navigate back to login when user back-navigates
                    navigate('/host', {replace: true});
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

    return (
        <div className={'LOGIN__page'}>
            <div className="LOGIN__page-contain">
                {errorMessage != null && <h2 className={'LOGIN__error_message'}>{errorMessage}</h2>}
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
            </div>
        </div>
    )
}