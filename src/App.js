import {Button,ButtonModal} from './Buttons';
import {Inicio} from "./Inicio";
import {Canciones} from "./Canciones";
import {Registro, Login} from "./Formularios";
import { useState } from 'react';

export function Cuerpo({valor}){
    
  switch (valor){
    case 'Inicio':
      return <Inicio/>
    case 'Canciones': 
      return <Canciones/>
    case 'Registro':
      return <Registro/>
    case 'Login':
      return <Login/>
    default:
      return <Inicio/>
  }
}

export function Header(){
  const [valor,setValor] = useState('Inicio')
  return(
    <>
    <header className="sticky-top">
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid">
        <img src="imagenes/icono-sonido.png" alt="sound" className="oye float-start img-fluid"/>
        <div className="navbar-brand fs-3 text-primary fw-bold m-1">OYE</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto me-auto mb-2 mb-lg-0 ">
              <li>
                <a className='nav-link ' href='./Inicio.js' onClick={()=>{setValor('Inicio')}}>Inicio</a>
              </li>
              <li>
                <a className='nav-link ' href='#' onClick={()=>{setValor('Canciones')}}>Canciones</a>
              </li>
            </ul>
            <ButtonModal/>
            <Button nombre="Inicio de Sesión" click={()=>{setValor('Login')}}/>
            <Button nombre="Registro" click={()=>{setValor('Registro')}}/>
          </div>
      </div>
    </nav>
    </header>
    <Cuerpo valor={valor}/>
    </>
)
}

export function Footer (){
    return (
      <footer className="container-fluid bg-primary mt-2 text-white">
        <div className="row ">
          <div className="col">
            <span className='d-lg-table-cell d-none' >Comparte la música </span>
          </div>
          <div className="col-12 text-center col-lg-auto text-lg-end">
            <span>@Derechos Reservados</span>
          </div>
        </div>
      </footer>
    )
  }