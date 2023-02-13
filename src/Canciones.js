import React from 'react';
import {useState} from 'react';
import './index.css'


function DespliegueCanciones({lista,mensaje}){
  const mensajeMinusculas = mensaje.toLowerCase()
  if (mensaje.length < 2){
    return( 
      <div className="row m-auto" >
        {lista.map((cancion,index) => (
          <div className="card w-auto p-0 m-3" key={index}>
            <div className='card-header bg-light p-lg-0 text-center'>
              <img src={`imagenes/icon_${cancion.icono}.svg`} className="card-img-top img-fluid w-50" alt="..."/>
            </div>
            <div className="card-body">
              <p className="card-text text-center fw-bold">{cancion.nombre}</p>
              <audio controls src={`canciones/${cancion.ruta}`}/>
            </div>
          </div>
        ))}
      </div>
    )
  } else {
    const filtradas = lista.filter((cancion) => (
      cancion.nombre.toLowerCase().includes(mensaje)
    ))
    return(
      <div className="row m-auto" >
        {filtradas.map((cancion,index) => (
          <div className="card w-auto p-0 m-3" key={index}>
              <div className='card-header bg-light p-lg-0 text-center'>
              <img src={`imagenes/icon_${cancion.icono}.svg`} className="card-img-top img-fluid w-50" alt="..."/>
            </div>
            <div className="card-body">
              <p className="card-text text-center fw-bold">{cancion.nombre}</p>
              <audio controls src={`canciones/${cancion.ruta}`}/>
            </div>
          </div>
        ))}
      </div>
    )

  }
}

export function Canciones(){
  const [lista,setLista] = useState([]);
  const [mensaje,setMensaje] = useState('')
  fetch("http://127.0.0.1:5500/Frontend%20con%20JavaScript/proyecto_final/public/canciones/datos.json")
  .then(res => res.json())
  .then(resultado => {
    var cancionesOrdenadas = resultado.canciones.sort((a,b) => {
      if (a.reproducciones > b.reproducciones){return -1;}
      if (a.reproducciones < b.reproducciones){return 1;}
      if (a.reproducciones === b.reproducciones){return 0;}
    });
    setLista(cancionesOrdenadas)
    }
  )
  return(
    <div className="container bg-light m-auto p-1 m-lg-5 p-lg-5">
      <h3 className='cambia-font'>Canciones</h3>
      <div className="form-group mb-3">
              <div className="cols-sm-10">
                <div className="input-group">
                  <input type="text" className="form-control" name="cancion" id="cancion"  placeholder="Buscar" onChange={(e)=>{setMensaje(e.target.value)}}/>
                  <span className="input-group-addon"><i className="fa fa-search fa pr-2 m-2" aria-hidden="true"></i></span>
                </div>
              </div>
            </div>
      <DespliegueCanciones lista={lista} mensaje={mensaje}/>
    </div>
    )
  }
