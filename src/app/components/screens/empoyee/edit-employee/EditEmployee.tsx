import { FC } from 'react'
import styles from './EditEmployee.module.scss'
import Field from '@/components/ui/form-elements/Field'
import { useEditEmployee } from './useEditEmployee'
import Button from '@/components/ui/button/Button'

const EditEmployee: FC = () => {

	const {
		registerInput, 
		handleSubmit, 
		error, 
		errors, 
		dirtyFields, 
		isValid, 
		onSubmit} = useEditEmployee()

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
						Добавить
					</Button>
				</form>
			</div>
		</section>
	)
}

export default EditEmployee