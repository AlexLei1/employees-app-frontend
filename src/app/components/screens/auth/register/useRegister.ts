import { useState } from "react"
import { useRegisterMutation } from "@/store/api/auth/auth.api"
import { isErrorWithMessage } from "@/utils/check.error"
import { SubmitHandler, useForm } from "react-hook-form"

interface IRegister {
	name: string
	email: string
	password: string
}


export const useRegister = () =>  {
	const {
		register: registerInput,
		handleSubmit,
		formState: {errors, dirtyFields, isValid },
		reset,
	} = useForm<IRegister>({mode: 'onChange'})

	const [error, setError] = useState('')
	const [registerUser] = useRegisterMutation()


	const register = async (data: IRegister) => {
		try {
			await registerUser(data).unwrap()

		} catch(err) {
			const maybeError = isErrorWithMessage(err)

			if (maybeError) {
				setError(err.data.message)
			} else {
				setError("Неизвестная ошибка");
			}
		}
	}

	const onSubmit:SubmitHandler<IRegister> = (data) => {
		register(data)
		reset()
	}

	return {registerInput, handleSubmit, error, errors, dirtyFields, isValid, onSubmit}
}