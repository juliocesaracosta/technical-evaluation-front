import React from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import {useNavigate } from "react-router-dom";

function Login() {
    const { register, getValues } = useForm();
    const navigate = useNavigate();

    const login = async () => {
        const email = getValues("email");
        const password = getValues("password");
        if (!email || !password) {
            alert("Email y Password son requeridos.");
        } else {
            try {
                const response = await axios.post('http://localhost:3800/api/login', {
                    "email":email,
                    "password":password,
                });
                
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
            <div class="h-56 grid grid-cols-3 gap-4 content-normal ...">
                <div></div>
                <div>
                    <form className="flex max-w-md flex-col gap-4">
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
                        
                        <Button type="button" onClick={login}>Entrar</Button>
                    </form>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Login;