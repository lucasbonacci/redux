import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as usuariosActions from '../../actions/usuariosActions'

const Usuarios = ({getUsuarios, usuarios, loading}) =>{

    useEffect(() =>{
        getUsuarios()
    }, [])
    console.log(loading)
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
        </tr>
      </thead>
      <tbody>
        {!loading?usuarios?.map( usuario =>{
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
