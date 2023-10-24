import { IField } from '@/types/form.interface'
import React from 'react'
import { forwardRef } from 'react'
import styles from './filed.module.scss'



const Field = forwardRef<HTMLInputElement, IField>(
	({placeholder, error, type='text', ...rest}, ref) => {
		return (
			<div className={styles.filed}>
				<input ref={ref} {...rest} type={type} />
				{error && <div style={{color: 'red'}}>{error.message}</div>}
			</div>
		)
	}
) 

Field.displayName = 'Field'

export default Field