import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/form-elements/Field'
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

	//принимает данные полей из формы для отправки на сервер
	const onSubmit:SubmitHandler<ILogin> = (data) => {
		console.log(data)
		reset()
	}

	return (
		<section>
			<form onSubmit={ handleSubmit(onSubmit)}>
			
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
					placeholder='Password'
					error={errors.password} 
				/>

				<Button>
					send
				</Button>
				
			</form>

		</section>
	)
}

export default Login