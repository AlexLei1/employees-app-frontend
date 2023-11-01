import { FC } from 'react'

interface IErrorMessage {
	message: string
}

const ErrorMassage: FC<IErrorMessage> = ({message}) => {
	if (!message) {
		return null
	}
	return (<span style={{color: 'red', padding: '20px'}}>{message}</span>)
}

export default ErrorMassage