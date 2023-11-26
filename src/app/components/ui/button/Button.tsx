import {ButtonHTMLAttributes, FC} from 'react'
import styles from './button.module.scss'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {isValid: boolean}

const Button:FC<IButton> = ({children, isValid, ...rest}) => {

  return (
		<>
			<button {...rest} className={styles.button}>
				<span>{children}</span>
			</button>
		</>
  )
}

export default Button