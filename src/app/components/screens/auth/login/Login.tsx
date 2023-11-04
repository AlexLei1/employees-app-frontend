import Button from '@/components/ui/button/Button'
import ErrorMassage from '@/components/ui/error-message/ErrorMassage'
import Field from '@/components/ui/form-elements/Field'
import { useRedirect } from '@/hooks/useRedirect'
import { useLoginMutation } from '@/store/api/auth/auth.api'
import { selectUser } from '@/store/api/auth/auth.slice'
import { isErrorWithMessage } from '@/utils/check.error'
import { validEmail } from '@/utils/regex'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import styles from './login.module.scss'
import  Link  from 'next/link';
import { useLogin } from './useLogin'

interface ILogin{
	email: string
	password: string
}

const Login: FC = () => {
	useRedirect()

	const {
		registerInput, 
		handleSubmit, 
		error, 
		errors, 
		dirtyFields, 
		isValid, 
		onSubmit} = useLogin()

	return (
		<section className={styles.loginPage}>

			<div>
				<h1>
					Войдите
				</h1> 
				<form onSubmit={ handleSubmit(onSubmit)}>
					<Field 
						{...registerInput("email", {
							required: 'Введите email',
							pattern: {
								value: validEmail,
								message: 'Введите существующий email'
							},
							
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
					<Button isValid={isValid}>
						send
					</Button>

					<div>
						<span>Нет аккаунта?</span>
						<Link href='/register'>Зарегистрируйтесь</Link>
					</div>

				</form>
			</div>
			<ErrorMassage message={error}/>
		</section>
	)
}

export default Login