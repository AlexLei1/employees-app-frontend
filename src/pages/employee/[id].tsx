
import { NextPageAuth } from '@/types/auth.type'
import Employee from '@/components/screens/empoyee/Employee'

const EditEmployeePage: NextPageAuth = () => {
	return <Employee/>
}

EditEmployeePage.isOnlyUser = true
export default EditEmployeePage