import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import * as usuariosActions from '../actions/usuariosActions'
import * as publicacionesActions from '../actions/publicacionesActions'

const Publicaciones = ({usuariosReducer, getUsuarios,publicacionesReducer, getPublicacionesForUsuario}) => {
    const {index} = useParams()

    useEffect(() =>{
        async function traerData(){
            if(!usuariosReducer.usuarios.length){
                await getUsuarios()
            }
            getPublicacionesForUsuario(index)
        }
        traerData()
    },[])

    console.log(usuariosReducer)
    console.log(publicacionesReducer)
    return (
        <div className='margen'>
            <h2>Publicaciones de</h2>
            {index}
        </div>
    )
}

const mapStateToProps =({usuariosReducer, publicacionesReducer}) =>{
    return {
        usuariosReducer,
        publicacionesReducer
    }
}

const mapDispatchToProps ={
    ...usuariosActions,
    ...publicacionesActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones)
