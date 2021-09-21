import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import Usuarios from './Usuarios'
import Tareas from "./Tareas";
import Publicaciones from "./Publicaciones";

const App = () =>(
  <BrowserRouter>
    <Menu/>
    <Route exact path='/' component={Usuarios}/>
    <Route exact path='/tareas' component={Tareas}/>
    <Route exact path='/publicaciones/:index' component={Publicaciones}/>
  </BrowserRouter>
)

export default App