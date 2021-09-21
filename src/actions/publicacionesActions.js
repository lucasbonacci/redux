import axios from 'axios'
import { ActionTypes } from "../constants/actionsTypes"

export const getPublicaciones = () => async (dispatch) =>{
    dispatch({
        type: ActionTypes.LOADING
    })
    try{
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch({
            type: ActionTypes.TRAER_PUBLICACIONES,
            payload: respuesta.data
        })
    } catch(err){
        console.log(err)
    }
}


export const getPublicacionesForUsuario = (index) => async (dispatch, getState) =>{
    const {usuarios} = getState().usuariosReducer
    const usuario_id = usuarios[index].id
    try{
    const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`)
    dispatch({
        type: ActionTypes.TRAER_PUBLICACIONES,
        payload: respuesta.data
    })
    } catch(err){
        console.log(err)
    }
}