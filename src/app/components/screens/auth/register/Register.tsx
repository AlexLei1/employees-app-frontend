import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { validEmail } from '@/utils/regex';
import Field from '@/components/ui/form-elements/Field';
import Button from '@/components/ui/button/Button';
import styles from './register.module.scss'
import Link from 'next/link';
interface Register {
	name: string
	email: string
	password: string
}
const Register: FC = () => {

	const {
		register: registerInput,
		handleSubmit,
		formState: {errors, dirtyFields, isValid},
		reset,
		watch,
	} = useForm<Register>({mode: 'onChange'})


	const onSubmit:SubmitHandler<Register> = (data) => {
		console.log(data)
		reset()
	}



	return (
		<section className={styles.registerPage}>
			<div>
				<h1>Зарегистрируйтесь</h1>
					<form onSubmit={handleSubmit(onSubmit)}>
					<Field 
						{...registerInput("name", {
							required: 'Введите имя', 
							minLength: {
								value: 3, 
								message: 'Минимальное число символов 3'
						}})}
						type="text" 
						placeholder='Name'
						error={errors.name}
						dirty={dirtyFields.name}
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
						dirty={dirtyFields.email}
					/>
					<Field 
						{...registerInput("password", {
							required: 'Введите пароль', 
							minLength: {
								value: 6, 
								message: 'Минимальное число символов 6'
						}})}
						type="password" 
						placeholder='Password'
						error={errors.password} 
						dirty={dirtyFields.password}
					/>
					<Button >
						send
					</Button>

					<div>
						<span>Нет аккаунта?</span>
						<Link href='/login'>Войдите</Link>
					</div>

				</form>
			</div>
		</section>
	)
}

export default Register