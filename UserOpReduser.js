import * as at from './ActionType'

const initialState = {status:"N/A", data:"N/A"}

export default function userOper(state = {...initialState}, action) {
    switch (action.type) {
      case at.USER_LOGIN_REQUEST:
        console.log("REDUCER: "+ at.USER_LOGIN_REQUEST)
        return {
            ...state,
            status: "LOG RQST"
        }
      case at.USER_AUTH_OK:
        return {
            ...state,
            status: "LOG PASS"
        }
      case at.FETCH_DATA:
        return {
            ...state
        }
        case at.FETCH_DATA_OK:
        return {
            ...state,
            data: action.data
        }
      default:
        return state
    }
  }
