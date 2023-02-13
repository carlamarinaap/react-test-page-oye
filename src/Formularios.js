import React from "react";
import './index.css'


export function Registro () {

  function handleSubmit(e){
    e.preventDefault();
    const pwd = document.getElementById('invalid-password')
    const email = document.getElementById('invalid-email')
    const confirm = document.getElementById('invalid-confirm')
    const genero = document.getElementById('invalid-select')
    const edad = document.getElementById('invalid-edad')
    const terminos = document.getElementById('invalid-terminos')
    pwd.classList.add('d-none')
    email.classList.add('d-none')
    confirm.classList.add('d-none')
    genero.classList.add('d-none')
    edad.classList.add('d-none')
    terminos.classList.add('d-none')

    var regExp = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
    if (!regExp.test(e.target.email.value)){
      email.classList.remove('d-none')
      e.stopPropagation()
    }
    if (e.target.password.value.length < 8){
      pwd.classList.remove('d-none')
      e.stopPropagation()
    }
    if (e.target.password.value !== e.target.confirm.value){
      confirm.classList.remove('d-none')
      e.stopPropagation()
    }
    if (e.target.genero.value === ''){
      console.log(e.target.genero.value )
      genero.classList.remove('d-none')
      e.stopPropagation()
    }
    if (e.target.edad.value === ''){
      edad.classList.remove('d-none')
      e.stopPropagation()
    }
    if (!e.target.terminos.checked){
      terminos.classList.remove('d-none')
      e.stopPropagation()
    }
  }
  return (
    <div className="container-fuid bg-light ounded" >
      <div className="row m-auto" style={{maxWidth:'500px'}}>
        <div className="col-sm-12">
          <div className="panel-title text-center">
            <h1 className="title cambia-font">Registro</h1>
            <hr />
          </div>
        </div> 
        <div className="row pl-4 ml-3">
          <form className="col-sm-12" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="email" className="cols-sm-2 form-label">Correo Electrónico*</label>
              <div className="cols-sm-10">
                <div className="input-group">
                  <input type="text" className="form-control" name="email" id="email"  placeholder="Correo Electrónico" />
                  <span className="input-group-addon"><i className="fa fa-envelope pr-2 m-2" aria-hidden="true"></i></span>
                </div>
                <div id='invalid-email' className="text-danger d-none">
                  Debe colocar un correo electrónico
                </div>
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password" className="cols-sm-2 control-label">Contraseña*</label>
              <div className="cols-sm-10">
                <div className="input-group ">
                  <input type="password" className="form-control" name="password" id="password"  placeholder="Contraseña" />
                  <span className="input-group-addon"><i className="fa fa-lock fa-lg pr-2 m-2" aria-hidden="true"></i></span>
                </div>
                <div id='invalid-password' className="text-danger d-none">
                  La contraseña debe tener al menos 8 caracteres
                </div>
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="confirm" className="cols-sm-2 control-label">Confirmar Contraseña*</label>
              <div className="cols-sm-10">
                <div className="input-group">
                  <input type="password" className="form-control" name="confirm" id="confirm"  placeholder="Confirmar Contraseña" />
                  <span className="input-group-addon"><i className="fa fa-lock fa-lg pr-2 m-2" aria-hidden="true"></i></span>
                </div>
                <div id='invalid-confirm' className="text-danger d-none">
                  Las contraseñas no coinciden
                </div>
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="genero"  className="cols-sm-2 control-label">Genero Musical Favorito*</label>
              <div className="cols-sm-10">
                <select className="form-select" aria-label="Default select example" id='genero' name='genero'>
                  <option value="">Seleccione</option>
                  <option value="1">Rock</option>
                  <option value="2">Balada</option>
                  <option value="3">Salsa</option>
                  <option value="4">Otro</option>
                </select>
              </div>
              <div id='invalid-select' className="text-danger d-none">
                  Debe elegir al menos una opción
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="edad" className="cols-sm-2 control-label">Edad*</label>
              <div className="cols-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="edad" id="flexRadioDefault1" value='menor20'/>
                  <label className="form-check-label" htmlFor="flexRadioDefault1">Menor a 20</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="edad" id="flexRadioDefault2" value='20a40'/>
                  <label className="form-check-label" htmlFor="flexRadioDefault2">20 a 40</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="edad" id="flexRadioDefault3" value='mayor40'/>
                  <label className="form-check-label" htmlFor="flexRadioDefault3">Mayor a 50</label>
                </div>
              </div>
              <div id='invalid-edad' className="text-danger d-none">
                  Debe elegir rango etario
              </div>
            </div>
            <div className="form-group mb-3">
              <div className="cols-sm-10">
                <div className="form-check">
                  <input className="form-check-input" name='temrinos' type="checkbox" value="" id="terminos" />
                  <label className="form-check-label" htmlFor="terminos">Acepto los términos de uso*</label>
                </div>
                <div id='invalid-terminos' className="text-danger d-none">
                  Debe aceptar los términos de uso
                </div>
              </div>
            </div>
            <span className=" text-info-emphasis">*Campos Obligatorios</span>
            <div className="form-group my-3">
              <button type="submit" className="btn btn-primary">Continuar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export function Login() {

  function handleSubmit(e){
    e.preventDefault();
    const pwd = document.getElementById('invalid-password')
    const email = document.getElementById('invalid-email')
    pwd.classList.add('d-none')
    email.classList.add('d-none')
    if (e.target.password.value.length < 8){
      pwd.classList.remove('d-none')
      e.stopPropagation()
    }
    var regExp = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
    if (!regExp.test(e.target.email.value)){
      email.classList.remove('d-none')
      e.stopPropagation()
    }
  }
  return (
    <div className="container-fuid bg-light ounded" >
    <div className="row m-auto" style={{maxWidth:'500px'}}>
      <div className="col-sm-12">
        <div className="panel-title text-center">
          <h1 className="title cambia-font">Inicio de Sesión</h1>
          <hr />
        </div>
      </div> 
      <div className="row pl-4 ml-3">
        <form className="col-sm-12" onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="cols-sm-2 form-label">Correo Electrónico*</label>
            <div className="cols-sm-10">
              <div className="input-group">
                <input type="text" className="form-control" name="email" id="email" placeholder="Correo Electrónico"/>
                <span className="input-group-addon"><i className="fa fa-envelope pr-2 m-2" aria-hidden="true"></i></span>
              </div>
                <div id="invalid-email" className="text-danger d-none">
                  Debe colocar un correo electrónico
                </div>
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="cols-sm-2 control-label">Contraseña*</label>
            <div className="cols-sm-10">
              <div className="input-group ">
                <input type="password" className="form-control" name="password" id="password" placeholder="Contraseña"/>
                <span className="input-group-addon"><i className="fa fa-lock fa-lg pr-2 m-2" aria-hidden="true"></i></span>
              </div>
                <div id='invalid-password' className="text-danger d-none">
                  La contraseña debe tener al menos 8 caracteres
                </div>
            </div>
          </div>
          
          <div className="form-group my-3">
            <button type="submit" className="btn btn-primary">Continuar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}