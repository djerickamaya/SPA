import React from 'react';
import { useForm } from 'react-hook-form';
import Player from './Player';

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="container"><br /><br /><br />
            <h1>Formulario</h1><br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre:</label>
                    <input
                        {...register('name', { required: 'Este campo es obligatorio' })}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <label>Email:</label><br />
                    <input
                        {...register('email', {
                            required: 'Este campo es obligatorio',
                            pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' }
                        })}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Form;