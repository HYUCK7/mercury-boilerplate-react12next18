import * as user from "../types"

export const addUser = user => {
    return {
        type: UserType.USER_ADD_REQUSTED,
        payload: user
    }
}
export const updateUser = user => {
    return{
        type: UserType.USER_UPDATE_REQUSTED,
        payload:user
    }
}
export const patchUser = () => {
    return{
        type: UserType.USER_FETCH_REQUSTED
    }
}
export const deleteUser = user => {
    return{
        type: UserType.USER_DELETE_REQUSTED,
        payload:user
    }
}