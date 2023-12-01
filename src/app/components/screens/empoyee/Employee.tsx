import { FC, useState } from 'react'
import styles from './Employee.module.scss'
import Title from '@/components/ui/title/Title'
import SubTitle from '@/components/ui/subTitle/SubTitle'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectUser } from '@/store/api/auth/auth.slice'
import { selectEmployees } from '@/store/api/employees/employees.slice'
import { useEditEmployeeMutation, useGetEmployeeQuery, useRemoveEmployeeMutation } from '@/store/api/employees/employees.endpoints'
import Button from '@/components/ui/button/Button'

const Employee: FC = () => {
  const [error, setError] = useState("");
	const {query, replace} = useRouter()
	const user = useSelector(selectUser)
	const employees = useSelector(selectEmployees)
	const employeeId = String(query.id)
	const {data, isLoading} = useGetEmployeeQuery(employeeId)
	const {} = useEditEmployeeMutation()
	const [removeEmployee] = useRemoveEmployeeMutation()
	const isCurrentUser = user?.id === data?.userId

	
	const handleDeleteUser = async (id: string) => {
    try {
      await removeEmployee(id).unwrap();
			replace('/')
    } catch (err) {
      if (err) {
        setError(err.data.message);
      } else {
        setError("Неизвестная ошибка");
      }
    }
  };

	return (
		<section className={styles.employee}>
			<div className={styles.wrapperInfo}>
				<Title size={'18'} text={'Информация о сотруднике'}/>
				<ul>
					<li>Имя</li>
					<li>{data?.firstName}</li>
					<li>Возраст</li>
					<li>{data?.age}</li>
					<li>Адрес</li>
					<li>{data?.address}</li>
				</ul>
			</div>

			{isCurrentUser ? 
				<div className={styles.wrapperEdit}>
					<div>
						<SubTitle size={'16'} text={'Редактировать'}/>
					</div>

					<div>
						<Button onClick={() => replace(`/employee/edit/${employeeId}`)}>
							Редактировать
						</Button>
						<Button onClick={() => handleDeleteUser(employeeId)}>
							Удалить
						</Button>
					</div>
				</div>
			: null}

		</section>
	)
}

export default Employee