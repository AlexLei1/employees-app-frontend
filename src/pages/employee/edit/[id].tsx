import { NextPageAuth } from '@/types/auth.type'
import EditEmployee from '@/components/screens/empoyee/edit-employee/EditEmployee'

const EmployeePage: NextPageAuth = () => {
	return <EditEmployee/>
}

EmployeePage.isOnlyUser = true
export default EmployeePage