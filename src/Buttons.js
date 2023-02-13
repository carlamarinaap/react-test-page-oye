import ReactDOM from 'react-dom/client';
import './index.css'

export function Button({ nombre, click }) {
	return (
		<div className='m-2 m-lg-0'>
		<button className="btn btn-primary me-md-2" type="button" onClick={click}>
			{nombre}
		</button>
		</div>
	);
}

export function ButtonModal() {
	return (
		<div className='m-2 m-lg-0'>
			<button type="button" className="btn btn-primary me-md-2 active" data-bs-toggle="modal" data-bs-target="#exampleModal">
				Contacto
			</button>
			{ReactDOM.createRoot(document.getElementById('contacto')).render(
			<div className="modal fade" id="exampleModal" tabIndex="100" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5 cambia-font" id="exampleModalLabel">Contacto</h1>
							<button	type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<p>Telefono: +549 11 1235 7654</p>
							<p>Correo Electronico: info@oye.com</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary btn-sm" data-bs-dismiss="modal">
								Cerrar
							</button>
						</div>
					</div>
				</div>
			</div>
		)}

		</div>
	);
}
