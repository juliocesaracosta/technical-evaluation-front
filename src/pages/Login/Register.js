import React from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import {useNavigate } from "react-router-dom";

function Register(props) {
    const { register, getValues } = useForm();

    const registerUser = async () => {
        const email = getValues("email");
        const password = getValues("password");
        const name = getValues("name");
        const rol = getValues("rol");

        console.log(getValues())

        if (!email || !password || !name || !rol) {
            alert("Todos los campos de la pantalla son requeridos.");
        } else {
            try {
                const response = await axios.post('http://localhost:3800/api/users', getValues());
                alert("Usuario agregado con exito!");
                //navigate("/");
            } catch (error) {
                alert("Error al registrarse: " + error.response.data.message);
            }
        }
    };

    return (
        <div>
            <div class="h-56 grid grid-cols-3 gap-4 content-normal ...">
                <div></div>
                <div class="register">
                    <form>
                        <div>
                            <div className="mb-2 block">
                            <Label htmlFor="name" value="Usuario" />
                            </div>
                            <TextInput id="name" type="input" placeholder="name@hotmail.com" {...register("name")} required/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                            <Label htmlFor="email" value="Email" />
                            </div>
                            <TextInput id="email" type="email" placeholder="cesar" {...register("email")} required/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                            <Label htmlFor="password" value="Password" />
                            </div>
                            <TextInput id="password" type="password" {...register("password")} required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                            <Label htmlFor="Rol" value="Rol" />
                            </div>
                            <select name="pets" id="pet-select" className="w-full c-select" {...register("rol")} required>
                                <option value="">-Seleccione un rol por favor--</option>
                                <option value="6627f774efd229014da844dc">Lector</option>
                                <option value="6627f7c3ee4b72f66238edca">Creador</option>
                            </select>
                        </div>
                    </form>
                    <div className="w-full start-sesion">
                        <Button className="w-full" type="button" onClick={registerUser}>Registrar</Button>
                    </div>
                    <div className="w-full start-sesion">
                        <div>
                            <a href="/login">Iniciar sesion</a>
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

export default Register;