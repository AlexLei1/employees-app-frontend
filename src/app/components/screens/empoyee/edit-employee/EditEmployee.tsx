import { FC } from 'react'
import styles from './EditEmployee.module.scss'

const EditEmployee: FC = () => {
	return (
	 	<section className={styles.editEmployee}>
			<div>
				<h1>Редактировать Сотрудника</h1>
			</div>
		</section>
	)
}

export default EditEmployee