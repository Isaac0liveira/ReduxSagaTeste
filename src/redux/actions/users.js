import * as type from '../types';

 export const getUsersRequest = (users) => {
    return {
        type: type.GET_USERS_REQUESTED,
        payload: users,
    }
 }
