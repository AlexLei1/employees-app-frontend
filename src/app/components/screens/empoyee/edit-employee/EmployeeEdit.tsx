import { FC } from 'react'
import styles from './employeeEdit.module.scss'
import Title from '@/components/ui/title/Title'
import SubTitle from '@/components/ui/subTitle/SubTitle'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectUser } from '@/store/api/auth/auth.slice'
import { selectEmployees } from '@/store/api/employees/employees.slice'
import { useGetEmployeeQuery } from '@/store/api/employees/employees.endpoints'

const EmployeeEdit: FC = () => {

	const {query} = useRouter()
	const user = useSelector(selectUser)
	const employees = useSelector(selectEmployees)
	
	const employeeId = String(query.id)
	const {isLoading, data} = useGetEmployeeQuery(employeeId)
	console.log(data?.age)
	const userId = String(user?.id)

	return (
		<section className={styles.editEmployee}>
			
			<div>
				<Title size={'18'} text={'Информация о сотруднике'}/>
				<ul>
				
					<li>Имя</li>
					<li>Возраст</li>
					<li>Адрес</li>
					<li>{data?.firstName}</li>
					<li>{data?.age}</li>
					<li>{data?.address}</li>
				</ul>
			</div>
			<div>
				<SubTitle size={'16'} text={'Редактировать'}/>

			</div>
		</section>
	)
}

export default EmployeeEdit