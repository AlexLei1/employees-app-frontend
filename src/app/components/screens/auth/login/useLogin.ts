
import { useLoginMutation } from '@/store/api/auth/auth.api';
import { selectUser } from '@/store/api/auth/auth.slice';
import { isErrorWithMessage } from '@/utils/check.error';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

interface ILogin{
	email: string
	password: string
}

export const useLogin = () => {
	const {
		register: registerInput, 
		handleSubmit,
		formState: {errors, dirtyFields, isValid},
		reset,
	} = useForm<ILogin>({mode: 'onChange'})

	
	const [error, setError] = useState('')
	const user = useSelector(selectUser) // текущее состояние пользователя
	const [loginUser] = useLoginMutation();

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
		console.log(data)
		reset()
	}

	

	return {registerInput, handleSubmit, error, errors, dirtyFields, isValid, onSubmit }
}