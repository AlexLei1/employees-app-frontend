import { IField } from '@/types/form.interface'
import{ useEffect, useState } from 'react'
import { forwardRef } from 'react'
import styles from './filed.module.scss'
import {MaterialIcon} from '@/ui/icons/MaterialIcon'
import cn from 'classnames'

const Field = forwardRef<HTMLInputElement, IField>(
	({placeholder, error, type='text', dirty, ...rest}, ref) => {
		
		const [isShowIcon, setIsShowIcon] = useState(false);

		return (
			<div className={styles.filed}>

				{type!=='password' ? 
					<input style={dirty && error === undefined ? {border: '1px solid green'} : {}} placeholder={placeholder} ref={ref} {...rest} type={type} /> : 
					<input style={dirty && error === undefined ? {border: '1px solid green'} : {}} placeholder={placeholder} autoComplete='on' ref={ref} {...rest} type={isShowIcon ? 'text' : 'password'} />}	

				{type==='password' ? 

					<span onClick={() => setIsShowIcon(!isShowIcon)}>
						<MaterialIcon name={isShowIcon ? 'MdRemoveRedEye' : 'MdOutlineRemoveRedEye'}/>
					</span> : null}

				{error && <div style={{color: 'red'}}>{error.message}</div>}
			</div>
		)
	}
) 

Field.displayName = 'Field'

export default Field