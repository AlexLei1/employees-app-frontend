import { FC } from 'react'
import styles from './home.module.scss'
import { useSelector } from 'react-redux'
import { selectEmployees } from '@/store/api/employees/employees.slice'
import Link from 'next/link';
import { useGetAllEmployeesQuery } from '@/store/api/employees/employees.endpoints';

const Home: FC = () => {
	const {isLoading} = useGetAllEmployeesQuery()
	const employees = useSelector(selectEmployees)

	console.log(employees)
  return (
		<section className={styles.home}>
			<Link href={'./employee/add'}>Добавить</Link>
			<div>
				<span>Имя</span>
				<span>Возраст</span>
				<span>Адрес</span>
			</div>

			{isLoading ? 
				<div>загрузка</div>
				:

				employees ? 
					<ul>
						{employees.map((item) => (
							<li key={item.id}>
								<Link href={`./employee/${item.id}`}>
									<span>{item.firstName}</span>
									<span>{item.age}</span>
									<span>{item.address}</span>
								</Link>
							</li>
						))}
					</ul>
					:
					<div>данных нет</div>}
		</section>
	)
}

export default Home