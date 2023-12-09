
import { useLoginMutation } from '@/store/api/auth/auth.api';
import { selectUser } from '@/store/api/auth/auth.slice';
import { saveToStorage } from '@/utils/auth.helper';
import { isErrorWithMessage } from '@/utils/check.error';
import { useEffect, useState } from 'react';
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

	
	const [logErr, setLogErr] = useState('')
	const [loginUser, {data}] = useLoginMutation();

	const login = async (loginData: ILogin) => {
    try {
      await loginUser(loginData).unwrap();
			saveToStorage(data)
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setLogErr(err.data.message);
      } else {
        setLogErr("Неизвестная ошибка");
      }
    }
  };

	//принимает данные полей из формы для отправки на сервер
	const onSubmit:SubmitHandler<ILogin> = (data) => {
		login(data)
		reset()
	}

	return {registerInput, handleSubmit, logErr, errors, dirtyFields, isValid, onSubmit }
}