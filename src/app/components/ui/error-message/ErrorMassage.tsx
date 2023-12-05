import { FC } from 'react'
import styles from './ErrorMassage.module.scss'
interface IErrorMessage {
	message: string
}

const ErrorMassage: FC<IErrorMessage> = ({message}) => {
	if (!message) {
		return null
	} return (<span className={styles.errorMassage}>{message}</span>)
}

export default ErrorMassage