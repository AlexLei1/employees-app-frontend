import AddEmployee from '@/components/screens/empoyee/add-employee/AddEmployee'
import { NextPageAuth } from '@/types/auth.type'

const Add:NextPageAuth = () => {
	return <AddEmployee/>
}

Add.isOnlyUser = true

export default Add