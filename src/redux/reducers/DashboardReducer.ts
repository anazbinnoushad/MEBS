import Actions from "../ActionTypes"

const initialState: any = {}

export default function DashboardReducer() {
    return (state = initialState, action: any) => {
        switch (action.type) {
            case Actions.SET_DASHBOARD_DATA:
                return { ...state, ...action.payload }
            default:
                return state
        }

    }
}