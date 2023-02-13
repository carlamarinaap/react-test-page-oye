import React from 'react';
import {Button} from './Buttons';
import { Canciones } from "./Canciones";
import {useState} from 'react';
import './index.css'

export function Inicio(){
  const [lista,setLista] = useState([]);
  const [valor,setValor] = useState('Inicio')
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
  if(valor === 'Canciones'){
    return <Canciones />
  }
    return(
      <div>
        <div className="container bg-body-secondary m-auto">
          <div className="row my-3">
            <div className="col-lg-6 col-12 p-lg-5 p-3">
              <h3 className='h3 cambia-font'>Canciones gratis para la comundidad!</h3>
              <p>Con este sitio podrás escuchar audios de manera libre...</p>
              <div className='m-2'>
                <Button click={()=>{setValor('Canciones')}} nombre='Ver Canciones'/>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-lg-5 p-3">
              <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="imagenes/portada1.jpeg" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="imagenes/portada2.jpeg" className="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <div className="row border-top border-bottom  mb-2">
          <h3 className="h3 text-center">Top 3</h3>
        </div>
        <div className="row border-top">
          <table className="table table-responsive mb-0"> 
            <thead>
              <tr>
                <th className='d-none d-lg-table-cell '>Nombre</th>
                <th>Cancion</th>
              </tr>
            </thead>
              <tbody>
                {lista.slice(0,3).map((cancion,index) => (
                  <tr key={index}>
                    <td className="text-info fw-bold d-lg-table-cell fs-5 d-none">{cancion.nombre}</td>
                    <td><audio controls src= {`canciones/${cancion.ruta}`}/></td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
      </div>
    </div>
    )
  } 