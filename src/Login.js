import React, { useState } from 'react'

const Login = (props) => {

    const { email, setEmail, password, setPassword, handleLogin, handleSigup, hasAccount, setHasAccount, emailError, passwordError } = props;
    const [rePass, setRepass] = useState('')
    const [rePassErr, setRepassErr] = useState('');

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className="errorMsg">{passwordError}</p>
                {!hasAccount ? (
                    <>
                        <label>Re-Enter Password</label>
                        <input type="password" required value={rePass} onChange={(e) => setRepass(e.target.value)} />
                        <p className="errorMsg">{rePassErr}</p>
                    </>
                ) : ('')
                }

                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign In</button>
                            <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ) : (
                            <>
                                <button disabled={!rePass} onClick={() => {
                                    if (password !== rePass) {
                                        setRepassErr('Password not match !!')
                                    }
                                    else {
                                        setRepassErr('')
                                        handleSigup()
                                    }

                                }}>Sign Up</button>
                                <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                            </>
                        )}
                </div>

            </div>
        </section>
    )
}

export default Login;