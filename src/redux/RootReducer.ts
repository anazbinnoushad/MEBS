import { combineReducers } from 'redux'
import DashboardReducer from './reducers/DashboardReducer'

const RootReducer = combineReducers({
    Dashboard: DashboardReducer(),
})

export default RootReducer