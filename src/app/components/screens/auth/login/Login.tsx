import Button from '@/components/ui/button/Button'
import ErrorMassage from '@/components/ui/error-message/ErrorMassage'
import Field from '@/components/ui/form-elements/Field'
import useActions from '@/hooks/useActions'
import { useRedirect } from '@/hooks/useRedirect'
import { useLoginMutation } from '@/store/api/auth/auth.endpoints'
import { selectUser } from '@/store/api/auth/auth.slice'
import { ReqUserData } from '@/types/user.types'
import { isErrorWithMessage } from '@/utils/check.error'
import { validEmail } from '@/utils/regex'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

interface ILogin{
	email: string
	password: string
}

const Login: FC = () => {
	useRedirect()

	const {
		register: registerInput, 
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm<ILogin>({mode: 'onChange'})

	const [error, setError] = useState('')
	const user = useSelector(selectUser) // текущее состояние пользователя
	const [loginUser, loginUserResult] = useLoginMutation();

	const login = async (data: ILogin) => {
    try {
      await loginUser(data).unwrap();

    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError("Неизвестная ошибка");
      }
    }
  };

	//принимает данные полей из формы для отправки на сервер
	const onSubmit:SubmitHandler<ILogin> = (data) => {
		login(data)
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
			<ErrorMassage message={error}/>
		</section>
	)
}

export default Login