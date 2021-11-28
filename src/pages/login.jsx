import React, { useState } from 'react';

const Login = () => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const submitForm = event => {
        event.preventDefault();
    }

    return (
        <main className="client-page col-md-4">
            <div className="container-content">
                <header>
                    <h2> ورود به سایت </h2>
                </header>

                <div className="form-layer">
                    <form action="" method="" onSubmit={submitForm}>
                        <div className="input-group">
                            <span
                                className="input-group-addon"
                                id="email-address"
                            >
                                <i className="zmdi zmdi-email"></i>
                            </span>
                            <input
                                type="text"
                                value={Email}
                                className="form-control"
                                placeholder="ایمیل"
                                aria-describedby="email-address"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="password">
                                <i className="zmdi zmdi-lock"></i>
                            </span>
                            <input
                                type="password"
                                className="form-control"
                                value={Password}
                                placeholder="رمز عبور "
                                aria-describedby="password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="remember-me">
                            <label>
                                <input type="checkbox" name="" /> مرا بخاطر
                                بسپار{" "}
                            </label>
                        </div>

                        <div className="link">
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-lock"></i> رمز عبور خود
                                را فراموش کرده ام !
                            </a>
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-account"></i> عضویت در
                                سایت{" "}
                            </a>
                        </div>

                        <button className="btn btn-success">
                            {" "}
                            ورود به سایت{" "}
                        </button>
                    </form>
                </div>
            </div>
        </main>

    );
}

export default Login;