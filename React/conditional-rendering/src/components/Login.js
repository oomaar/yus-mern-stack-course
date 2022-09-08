import React from 'react';
import Input from "./Input";

const Login = () => {
    return (
        <div>
            <form className="form">
                {/* <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" /> */}
                <Input
                    type="text"
                    placeHolder="Username"
                />
                <Input
                    type="password"
                    placeHolder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
