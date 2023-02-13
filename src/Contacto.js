export function Contacto(){
  return(
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Contacto</h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <p>Telefono: 15-1235-7654</p>
          <p>Correo Electronico: oye@oye.com</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  )
    
}