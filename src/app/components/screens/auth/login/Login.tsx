import useActions from '@/hooks/useActions'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'
import { validEmail } from '@/utils/valid/regex'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface ILogin{
	email: string
	password: string
}

const Login: FC = () => {
	useAuthRedirect()
	const {
		register: registerInput, 
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm<ILogin>({mode: 'onChange'})

	const { login } = useActions()
	console.log(process.env.API_URL)
	//принимает данные полей из формы для отправки на сервер
	const onSubmit:SubmitHandler<ILogin> = (data) => {
		login(data)
		reset()
	}

	return (
		<section>
			<form onSubmit={ handleSubmit(onSubmit)}>

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

export default Login