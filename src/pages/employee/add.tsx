import AddEmployee from '@/components/screens/empoyee/add-employee/AddEmployee'
import { NextPageAuth } from '@/types/auth.type'

const add:NextPageAuth = () => {
	return <AddEmployee/>
}

add.isOnlyUser = true

export default add