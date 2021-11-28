import React, { useState, useRef, useEffect } from 'react';
import { toast } from "react-toastify";
import { registerUser } from './../service/userService';
import SimpleReactValidator from 'simple-react-validator';


const Register = () => {
    const [fullName, setFullname] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [, forceUpdate] = useState();
    const validator = useRef(
        new SimpleReactValidator({
            messages: {
                required: "پر کردن این فیلد الزامی میباشد",
                min: "کمتر از 5 کاراکتر نباید باشد",
                email: "ایمیل نوشته شده صحیح نمی باشد"
            },
            element: message => <div style={{ color: "red" }}>{message}</div>
        })
    );
    const reset = () => {
        setFullname("");
        setEmail("");
        setPassword("");
    }
    const nameFocuse = useRef(null);
    useEffect(() => {
        nameFocuse.current.focus()
    })

    const submitForm = async event => {
        event.preventDefault();
        const user = {
            fullName,
            Email,
            Password
        };
        try {
            if (validator.current.allValid()) {
                const { status } = await registerUser(user);
                if (status === 201) {
                    toast.success("کاربر با موفقیت ساخته شد.", {
                        position: "top-right",
                        closeOnClick: true
                    });
                    reset();
                } else {
                    validator.current.showMessages();
                    forceUpdate(1);
                }
            }
        } catch (ex) {
            toast.error("مشکلی پیش آمده.", {
                position: "top-right",
                closeOnClick: true
            });
            console.log(ex);
        }

    }


    return (
        <div className="">
            <h2 className="m-3">عضویت در سایت</h2>
            <form className="col-md-6" onSubmit={submitForm}>
                <div className="m-3">
                    <input name="fullname"
                        ref={nameFocuse}
                        value={fullName}
                        onChange={e => {
                            setFullname(e.target.value);
                            validator.current.showMessageFor("fullName");
                        }}
                        type="text" placeholder="نام و نام خانوادگی خود را وارد کن"
                        className=" form-control"
                    />
                    {validator.current.message("fullName", fullName, "required|min:5")}

                </div>
                <div className="m-3">
                    <input name="Email"
                        value={Email}
                        onChange={e => {
                            setEmail(e.target.value);
                            validator.current.showMessageFor("Email")
                        }}
                        type="email" placeholder="ایمیل خود را وارد کن"
                        className="form-control" />
                    {validator.current.message("Email", Email, "required|email")}
                </div>
                <div className="m-3">
                    <input value={Password}
                        onChange={e => {
                            setPassword(e.target.value);
                            validator.current.showMessageFor("Password");

                        }}
                        type="password" placeholder="پسورد خود را وارد کن"
                        className="form-control" />
                    {validator.current.message("Password", Password, "required|min:5")}
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}

export default Register;
