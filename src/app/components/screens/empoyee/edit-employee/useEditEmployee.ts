import { useLoginMutation } from '@/store/api/auth/auth.api';
import { selectUser } from '@/store/api/auth/auth.slice';
import { useEditEmployeeMutation, useGetEmployeeQuery } from '@/store/api/employees/employees.endpoints';
import { Employee, IAddEmployee } from '@/types/employees.type';
import { isErrorWithMessage } from '@/utils/check.error';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

// https://stackoverflow.com/questions/62242657/how-to-change-react-hook-form-defaultvalue-with-useeffect

export const useEditEmployee = () => {
	const {query, replace} = useRouter()
	const employeeId = String(query.id)
	const { data } = useGetEmployeeQuery(employeeId || "");
	console.log(employeeId, query)
	const [error, setError] = useState('')
	const [editEmployee] = useEditEmployeeMutation();

	
	const {
		register: registerInput, 
		handleSubmit,
		formState: {errors, dirtyFields, isValid},
	} = useForm<IAddEmployee>({mode: 'onChange', 
	defaultValues: {
		firstName: data?.firstName,
		lastName: data?.lastName,
		age: data?.age,
		address: data?.address,
	},})

	const edit = async (formDataEmployee: IAddEmployee) => {
    try {
			const editedEmployee = {
				...data,
				...formDataEmployee
			}
			console.log(editedEmployee)
      await editEmployee(editedEmployee).unwrap();

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
	const onSubmit:SubmitHandler<IAddEmployee> = (formDataEmployee) => {
		edit(formDataEmployee)
		replace('/')
	}

	return {registerInput, handleSubmit, error, errors, dirtyFields, isValid, onSubmit }
}