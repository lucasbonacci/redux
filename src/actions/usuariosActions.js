import axios from "axios"
import { ActionTypes } from "../constants/actionsTypes"


export const getUsuarios = () => async (dispatch) =>{
    dispatch({
        type: ActionTypes.LOADING
    })
    try{
    const respuesta = await axios('https://jsonplaceholder.typicode.com/users')
    dispatch({
        type: ActionTypes.TRAER_USUARIOS,
        payload: respuesta.data
    })
    } catch(err){
        console.log(err)
    }
}


