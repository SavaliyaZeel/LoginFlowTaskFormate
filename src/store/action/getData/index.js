import { GET_DATA_FALIURE, GET_DATA_SUCCESS, GET_DATA_WATCHER } from "../../constant"

export const getDataWatcher = (payload) => {
    return { type: GET_DATA_WATCHER, payload }
}
export const getDataSuccess = (payload) => {
    return { type: GET_DATA_SUCCESS, payload }
}
export const getDataFaliure = (payload) => {
    return { type: GET_DATA_FALIURE, payload }
}
