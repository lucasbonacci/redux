import { ActionTypes } from "../constants/actionsTypes"

const INITIAL_STATE ={
    publicaciones: [],
    loading: false
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case ActionTypes.TRAER_PUBLICACIONES:
            return {
                ...state,
                publicaciones: action.payload,
                loading: false
            }

        case ActionTypes.LOADINGPUBLI:
            return{
                loading: true
            }
        default: return state
    }
}
