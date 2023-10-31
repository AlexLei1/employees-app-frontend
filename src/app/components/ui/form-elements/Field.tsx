import { IField } from '@/types/form.interface'
import{ useState } from 'react'
import { forwardRef } from 'react'
import styles from './filed.module.scss'
import {MaterialIcon} from '@/ui/icons/MaterialIcon'
import cn from 'classnames'

const Field = forwardRef<HTMLInputElement, IField>(
	({placeholder, error, type='text', ...rest}, ref) => {
		
		const [isShowIcon, setIsShowIcon] = useState(false);
		console.log(!!error)
		return (
			<div className={styles.filed}>

				{type!=='password' ? 
					<input className={!error ? styles.input : 'error'} placeholder={placeholder} ref={ref} {...rest} type={type} /> : 
					<input  placeholder={placeholder} autoComplete='on' ref={ref} {...rest} type={isShowIcon ? 'text' : 'password'} />}	

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