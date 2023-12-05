import { useState, useEffect } from "react"
import { useRegisterMutation } from "@/store/api/auth/auth.api"
import { isErrorWithMessage } from "@/utils/check.error"
import { SubmitHandler, useForm } from "react-hook-form"

interface IRegister {
	name: string
	email: string
	password: string
	confirmPassword: string
}


export const useRegister = () =>  {
	const {
		register: registerInput,
		handleSubmit,
		formState: {errors, dirtyFields, isValid},
		watch,
		reset,
	} = useForm<IRegister>({mode: 'onChange'})

	const [regErr, setRegError] = useState('')
	const [registerUser] = useRegisterMutation()


	const register = async (data: IRegister) => {
		try {
			await registerUser(data).unwrap()

		} catch(error) {
			const maybeError = isErrorWithMessage(error)

			if (maybeError) {
				setRegError(error.data.message)
			} else {
				setRegError("Неизвестная ошибка");
			}
		}
	}

	const onSubmit:SubmitHandler<IRegister> = (data) => {
		register(data)
		reset()
	}

	return {registerInput, handleSubmit, regErr, errors, dirtyFields, isValid, onSubmit, watch}
}