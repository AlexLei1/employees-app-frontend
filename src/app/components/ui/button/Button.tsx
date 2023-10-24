import {ButtonHTMLAttributes, FC} from 'react'
import styles from './button.module.scss'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button:FC<IButton> = ({children, ...rest}) => {
  return (
	<>
		<button {...rest} className={styles.button}>
			<span>{children}</span>
		</button>
	</>
  )
}

export default Button