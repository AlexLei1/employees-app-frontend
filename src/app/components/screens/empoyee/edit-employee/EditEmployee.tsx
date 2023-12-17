import { FC, useState } from 'react'
import styles from './EditEmployee.module.scss'
import Field from '@/components/ui/form-elements/Field'
import Button from '@/components/ui/button/Button'
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAddEmployee } from '@/types/employees.type'
import { useRouter } from 'next/router'
import { useEditEmployeeMutation, useGetEmployeeQuery } from '@/store/api/employees/employees.endpoints'
import { isErrorWithMessage } from '@/utils/check.error'

const EditEmployee: FC = () => {

	const {query, replace} = useRouter()
	const employeeId = String(query.id)
	const { data } = useGetEmployeeQuery(employeeId || "");
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
	return (
	 	<section className={styles.editEmployee}>
			<div>
				<h1>
					Войдите
				</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field 
						{...registerInput("firstName", {
							required: 'Введите имя',
							minLength: {
								value: 3,
								message: 'Введите существующие имя'
							},
							
						})}
						placeholder='Фамилия'
						error={errors.firstName} 
						dirty={dirtyFields.firstName}
					/>
					<Field 
						{...registerInput("lastName", {
							required: 'Введите фамилия',
							minLength: {
								value: 3,
								message: 'Введите существующие фамилия'
							},
							
						})}
						placeholder='Имя'
						error={errors.lastName} 
						dirty={dirtyFields.lastName}
					/>
					<Field 
						{...registerInput("age", {
							required: 'Введите возраст',
							minLength: {
								value: 1,
								message: 'Введите существующий возраст'
							},
							maxLength: {
								value: 2,
								message: 'Введите существующий возраст'
							},
							
						})}
						type={'number'}
						placeholder='Возраст'
						error={errors.age} 
						dirty={dirtyFields.age}
					/>
					<Field 
						{...registerInput("address", {
							required: 'Введите имя',
							minLength: {
								value: 5,
								message: 'Введите существующий адрес'
							},
							
						})}
						placeholder='Адрес'
						error={errors.address} 
						dirty={dirtyFields.address}
					/>

					<Button disabled={!isValid}>
						Редактировать
					</Button>
				</form>
			</div>
		</section>
	)
}

export default EditEmployee