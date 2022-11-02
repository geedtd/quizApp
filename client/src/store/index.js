import { createStore } from 'redux'

const initState = {
    user: null
}

const reducer = (state = initState, action ) => {
    if (action.type === 'login') {
        localStorage.setItem('JWT_PAYLOAD', action.token)
        localStorage.setItem('_ID', action._id)
        return {
            ...state,
            user: action.user
        }
    }
}

const store = createStore(reducer)

export default store