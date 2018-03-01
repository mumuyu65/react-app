import env from '../config/env'

import { ajaxApi } from '../units';

class API{
	login(data){
		return ajaxApi(env.baseUrl+'/login',{method:"post",data})
	}
}

export default API