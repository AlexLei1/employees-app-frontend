import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { validEmail } from '@/utils/valid/regex';
import useActions from '@/hooks/useActions';

interface Register {
	name: string
	email: string
	password: string
}
const Register: FC = () => {

	const {
		register: registerInput,
		handleSubmit,
		formState: {errors},
		reset,
		watch,
	} = useForm<Register>({mode: 'onChange'})

	const { register } = useActions()


	const onSubmit:SubmitHandler<Register> = (data) => {
		register(data)
		reset()
	}



	return (
		<section>
			<form onSubmit={handleSubmit(onSubmit)}>

				<input 
					type="text" 
					placeholder='Name' 
					{...registerInput("name", {
						required: 'Введите имя', 
						minLength: {
							value: 4, 
							message: 'Минимальное число символов 4'
					}})}/>
				{errors?.name && <div style={{color: 'red'}}>{errors.name.message}</div>}	

				<input 
					type="email" 
					placeholder='Email' 
					{...registerInput("email", {
						required: 'Введите email',
						pattern: {
							value: validEmail,
							message: 'Введите существующий email'
						}
					})}/>
				{errors?.email && <div style={{color: 'red'}}>{errors.email.message}</div>}

				<input 
					type="password" 
					placeholder='Password' 
					{...registerInput("password", {
						required: 'Введите пароль', 
						minLength: {
							value: 6, 
							message: 'Минимальное число символов 6'
					}})}/>
				{errors?.password && <div style={{color: 'red'}}>{errors.password.message}</div>}

				<div>
					<button>Send</button>
				</div>
			</form>
		</section>
	)
}

export default Register