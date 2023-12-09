import { useGetAllEmployeesQuery } from '@/store/api/employees/employees.endpoints'
import { selectEmployees } from '@/store/api/employees/employees.slice'
import Link from 'next/link'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import styles from './tableList.module.scss'

const TableList: FC = () => {
	// useEffect(()=>{
  //   console.log('rendered table list!!!')
	// },[])
	const {isLoading} = useGetAllEmployeesQuery()
	const employees = useSelector(selectEmployees)
	return (

		<>
			{isLoading ? 
				<div>загрузка</div>
				:
				employees ? 
					<ul className={styles.list}>
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
			</>

		)
}

export default TableList