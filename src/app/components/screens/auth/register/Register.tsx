import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { validEmail } from '@/utils/regex';
import Field from '@/components/ui/form-elements/Field';
import Button from '@/components/ui/button/Button';

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


	const onSubmit:SubmitHandler<Register> = (data) => {
		console.log(data)
		reset()
	}



	return (
		<section>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field 
					{...registerInput("name", {
						required: 'Введите имя', 
						minLength: {
							value: 4, 
							message: 'Минимальное число символов 4'
					}})}
					type="text" 
					placeholder='Name'
					error={errors.name} 
				/>
				<Field 
					{...registerInput("email", {
						required: 'Введите email',
						pattern: {
							value: validEmail,
							message: 'Введите существующий email'
						}
					})}
					type="email" 
					placeholder='Email'
					error={errors.email} 
				/>
				<Field 
					{...registerInput("password", {
						required: 'Введите пароль', 
						minLength: {
							value: 6, 
							message: 'Минимальное число символов 6'
					}})}
					type="password" 
					placeholder='Email'
					error={errors.email} 
				/>

				<Button>
					send
				</Button>
			</form>
		</section>
	)
}

export default Register