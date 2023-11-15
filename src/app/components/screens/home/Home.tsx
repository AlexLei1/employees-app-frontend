import { FC } from 'react'
import styles from './home.module.scss'
import { useSelector } from 'react-redux'
import { selectEmployees } from '@/store/api/employees/employees.slice'
import { useGetAllEmployeesQuery } from '@/store/api/employees/employees.endpoints';
import Button from '@/components/ui/button/Button';
import Table from './table/Table';
import { useRouter } from 'next/router';
;

const Home: FC = () => {
	const {isLoading} = useGetAllEmployeesQuery()
	const employees = useSelector(selectEmployees)
	const {replace} = useRouter()
	
  return (
		<section className={styles.home}>
			<div className={styles.buttonWrapper}>
				<Button onClick={() => replace('employee/add')}>Добавить</Button>
			</div>
			<div className={styles.tableWrapper}>
				<Table/>
			</div>
		</section>
	)
}

export default Home