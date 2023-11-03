import { FC } from 'react'
import styles from './home.module.scss'

const Home: FC = () => {

	

  return (
		<section className={styles.home}>
			<button>Добавить</button>
			<div>
				<span>Имя</span>
				<span>Возраст</span>
				<span>Адрес</span>
			</div>
			<ul>
				<li>

				</li>
			</ul>
		</section>
	)

}

export default Home