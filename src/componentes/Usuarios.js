import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as usuariosActions from '../actions/usuariosActions'
import { Link } from 'react-router-dom'

const Usuarios = ({getUsuarios, usuarios, loading}) =>{

    useEffect(() =>{
      if(!usuarios.length){
      getUsuarios()
      }
    }, [])


    return(
    <div className='margen'>
    <table className='tabla'>
      <thead>
        <tr>
          <th>
            nombre
          </th>
          <th>
            Correo
          </th>
          <th>
            Enlace
          </th>
          <th>
            Publicaciones
          </th>
        </tr>
      </thead>
      <tbody>
        {!loading?usuarios?.map( (usuario, index) =>{
        return(
      <tr key={usuario.id}>
        <td>
          {usuario.name}
        </td>
        <td>
          {usuario.email}
        </td>
        <td>
          {usuario.website}
        </td>
        <td>
          <Link to={`/publicaciones/${index}`}>Ver publicaciones</Link>
        </td>
      </tr>
      )}):<p>cargando...</p>}
      </tbody>
    </table>
    </div>
  )
}

const mapStateToProps =(reducers) =>{
    return reducers.usuariosReducer
}

export default connect(mapStateToProps, usuariosActions)(Usuarios);
