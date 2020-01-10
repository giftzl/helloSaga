import * as at from './ActionType'

 const fetchData = () => {
         console.log("api fetching data...")
    return {type:at.FETCH_DATA,
            data:{userName: 'vz', gender:"female", age:"x"}}
}

const userLoginRequest = () => {
    return {type:at.USER_LOGIN_REQUEST,
            paload:3}
}

export {fetchData,userLoginRequest}
