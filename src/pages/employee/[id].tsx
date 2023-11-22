
import { NextPageAuth } from '@/types/auth.type'
import EmployeeEdit from '@/components/screens/empoyee/edit-employee/EmployeeEdit'

const EmployeeEditPage: NextPageAuth = () => {
	return <EmployeeEdit/>
}

EmployeeEditPage.isOnlyUser = true
export default EmployeeEditPage