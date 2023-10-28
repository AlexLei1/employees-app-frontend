import { FC } from 'react'

type IErrorMessage = {
	message?: string
}

const ErrorMassage: FC = ({message}:IErrorMessage) => {
	if (!message) {
		return null
	}
	return (<span>{message}</span>)
}

export default ErrorMassage