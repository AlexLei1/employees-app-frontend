import { reducer as toastrReducer } from 'react-redux-toastr'
import { reducer as userReducer } from './user/user.slice'
import { reducer as burgerReducer} from './burger/burger.slice'

export const reducers = {
	user: userReducer,
	toastr: toastrReducer,
	burger: burgerReducer
}
