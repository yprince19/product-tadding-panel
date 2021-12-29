import { ServiceEnum } from '../../network/Urls';
import NetworkOps from '../../network/NetworkOps';

export function login(data) {
     // return async dispatch => {
     //      const res = await NetworkOps.postToJson(ServiceEnum.login, data);
     //      if (res.status === 200) {
     //           dispatch({ type: 'USER_DETAILS', payload: res.user })
     //           sessionStorage.setItem('userData', JSON.stringify(res.user));
     //           sessionStorage.setItem('token', res.token);
     //           return { success: true, isEmail: res.user.email }
     //      }
     //      return { success: false, message: res.message || 'something went wrong' }
     // };
}
