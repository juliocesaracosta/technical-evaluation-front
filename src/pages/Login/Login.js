import React from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import {useNavigate } from "react-router-dom";

function Login() {
    const { register, getValues } = useForm();
    const navigate = useNavigate();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');

    const login = async () => {
        const email = getValues("email");
        const password = getValues("password");
        console.log(getValues())
        if (!email || !password) {
            alert("Email y Password son requeridos.");
        } else {
            try {
                const response = await axios.post('http://localhost:3800/api/login', getValues());
                
                sessionStorage.setItem('token', response.data.token);
                sessionStorage.setItem('user', JSON.stringify(response.data.user));
                navigate("/");
            } catch (error) {
                alert("Error al ingresar: " + error.response.data.message);
                console.error('Login failed:', error);
            }
        }
    };

    return (
        <div>
            <div className="h-56 grid grid-cols-3 gap-4 content-normal">
                <div></div>
                <div className="register">
                    <form>
                        <div>
                            <div className="mb-2 block">
                            <Label htmlFor="email1" value="Email" />
                            </div>
                            <TextInput id="email1" type="email" placeholder="name@flowbite.com" {...register("email")} required/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                            <Label htmlFor="password1" value="Password" />
                            </div>
                            <TextInput id="password1" type="password" {...register("password")} required />
                        </div>
                    </form>
                    <div className="w-full start-sesion">
                        <Button className="w-full" type="button" onClick={login}>Entrar</Button>
                    </div>
                    <div className="w-full start-sesion">
                        <div>
                            <a href="/register">Registrarse</a>
                        </div>
                        <div>
                            <a href="/">Ir a inicio</a>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Login;