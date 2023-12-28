
import { selectUser } from '@/store/api/auth/auth.slice';
import { useAddEmployeeMutation } from '@/store/api/employees/employees.endpoints';
import { IAddEmployee } from '@/types/employees.type';
import { isErrorWithMessage } from '@/utils/check.error';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';




export const useAddEmployee = () => {
	const {replace} = useRouter()
	const {
		register: registerInput, 
		handleSubmit,
		formState: {errors, dirtyFields, isValid},
		reset,
	} = useForm<IAddEmployee>({mode: 'onChange'})

	
	const [error, setError] = useState('')
	const user = useSelector(selectUser) // текущее состояние пользователя
	const [addEmployee] = useAddEmployeeMutation();

	const add = async (data: IAddEmployee) => {
    try {
			
      await addEmployee(data).unwrap();

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
	const onSubmit:SubmitHandler<IAddEmployee> = (data) => {
		add(data)
		reset()
		replace('/')
	}

	return {registerInput, handleSubmit, error, errors, dirtyFields, isValid, onSubmit }
}