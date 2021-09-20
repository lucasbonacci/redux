import { ActionTypes } from "../constants/actionsTypes"

const INITIAL_STATE ={
    usuarios: [],
    loading: false
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case ActionTypes.TRAER_USUARIOS:
            return {
                ...state,
                usuarios: action.payload,
                loading: false
            }

        case ActionTypes.LOADING:
            return {
                loading: true
            }

        default: return state
    }
}