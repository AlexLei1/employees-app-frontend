import { TypeMaterialIconName } from '@/types/icons.types';

interface IHeaderLink {
	id: number
	path: string
	text: string
	icon: TypeMaterialIconName
	authorization: boolean
}
interface IDataHeaderLink extends Array<IHeaderLink>{}

export const dataLink: IDataHeaderLink = [
	{
		id: 0,
		path: '/login',
		text: 'login',
		icon: 'MdRefresh',
		authorization: false
	},
	{
		id: 1,
		path: '/register',
		text: 'register',
		icon: 'MdLocalFireDepartment',
		authorization: false
	}
]
