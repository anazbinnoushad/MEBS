import Actions from "./ActionTypes"

export const InitializeDashboard = (data: any) => {
    return {
        type: Actions.SET_DASHBOARD_DATA,
        payload: data,
    }
}