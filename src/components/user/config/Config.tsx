/**
 * Componente de configuración de usuario 
 */
import './config.css'; 

export const Config = () => (
  <div className="main-content-content position-relative z-1">
    <div className="container-fluid px-4">
      <div className="row g-0 justify-content-center">
        <div className="col-xl-12 col-lg-10 col-md-12 px-0">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-11 col-12">
              <div className="p-4 p-lg-5">
                
                <div className="mb-5">
                  <h3 className="fw-bold fs-3 mb-4 text-white">Datos Personales</h3>
                  
                  <div className="form-group-full mb-4">
                    <label className="form-label fw-bold fs-6 mb-3">Nombre completo</label>
                    <div className="row g-3">
                      <div className="col-lg-6 col-md-6">
                        <div className="input-group input-register-wide">
                          <input
                            type="text"
                            id="inputFirstName"
                            className="form-control form-control-lg input-register"
                            placeholder="Primer nombre"
                          />
                          <button id="btn-update-firstname" className="btn btn-outline-primary px-3" title="Actualizar">
                            <i className="bi bi-check-lg fs-5"></i>
                          </button>
                        </div>
                        <div id="status-firstname" className="form-text mt-2 small text-muted"></div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="input-group input-register-wide">
                          <input
                            type="text"
                            id="inputLastName"
                            className="form-control form-control-lg input-register"
                            placeholder="Apellido"
                          />
                          <button id="btn-update-lastname" className="btn btn-outline-primary px-3" title="Actualizar">
                            <i className="bi bi-check-lg fs-5"></i>
                          </button>
                        </div>
                        <div id="status-lastname" className="form-text mt-2 small text-muted"></div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group-full mb-4">
                    <label htmlFor="inputDob" className="form-label fw-bold fs-6 mb-3">Fecha de nacimiento</label>
                    <div className="input-group input-register-wide">
                      <input
                        type="date"
                        id="inputDob"
                        className="form-control form-control-lg input-register"
                      />
                      <button id="btn-update-dob" className="btn btn-outline-primary px-3" title="Actualizar">
                        <i className="bi bi-check-lg fs-5"></i>
                      </button>
                    </div>
                    <div id="status-dob" className="form-text mt-2 small text-muted"></div>
                  </div>

                  <div className="form-group-full mb-4">
                    <label htmlFor="inputCountry" className="form-label fw-bold fs-6 mb-3">Nacionalidad</label>
                    <div className="input-group input-register-wide">
                      <select id="inputCountry" className="form-select form-control-lg input-register">
                        <option value="">Selecciona tu nacionalidad</option>
                        <option value="ar">Argentina</option>
                        <option value="br">Brasil</option>
                        <option value="uy">Uruguay</option>
                      </select>
                      <button id="btn-update-country" className="btn btn-outline-primary px-3" title="Actualizar">
                        <i className="bi bi-check-lg fs-5"></i>
                      </button>
                    </div>
                    <div id="status-country" className="form-text mt-2 small text-muted"></div>
                  </div>

                  <div className="form-group-full mb-4">
                    <label htmlFor="inputContact" className="form-label fw-bold fs-6 mb-3">Email o número telefónico</label>
                    <div className="input-group input-register-wide">
                      <input
                        type="text"
                        id="inputContact"
                        className="form-control form-control-lg input-register"
                        placeholder="ej: usuario@email.com o +54 9 299 123-4567"
                      />
                      <button id="btn-update-contact" className="btn btn-outline-primary px-3" title="Actualizar">
                        <i className="bi bi-check-lg fs-5"></i>
                      </button>
                    </div>
                    <div id="status-contact" className="form-text mt-2 small text-muted"></div>
                  </div>

                  <div className="form-group-full mb-4">
                    <label htmlFor="inputPhoto" className="form-label fw-bold fs-6 mb-3">Foto de perfil</label>
                    <div className="input-group input-register-wide">
                      <input
                        type="file"
                        id="inputPhoto"
                        className="form-control form-control-lg input-register"
                        accept="image/*"
                      />
                      <button id="btn-update-photo" className="btn btn-outline-primary px-3" title="Actualizar">
                        <i className="bi bi-check-lg fs-5"></i>
                      </button>
                    </div>
                    <div id="status-photo" className="form-text mt-2 small text-muted"></div>
                  </div>
                </div>

                <hr className="my-5" />

                <div className="mb-5">
                  <h3 className="fw-bold fs-3 mb-4 text-dark">Cambiar Contraseña</h3>
                  <div className="form-group-full mb-5">
                    <label className="form-label fw-bold fs-6 mb-3">Nueva contraseña</label>
                    <div className="row g-3">
                      <div className="col-lg-6 col-md-6">
                        <div className="input-group input-register-wide">
                          <input
                            type="password"
                            id="inputPass1"
                            className="form-control form-control-lg input-register"
                            placeholder="Contraseña"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="input-group input-register-wide">
                          <input
                            type="password"
                            id="inputPass2"
                            className="form-control form-control-lg input-register"
                            placeholder="Confirmar"
                          />
                        </div>
                      </div>
                    </div>
                    <div id="status-pass" className="form-text mt-3">
                      <i className="bi bi-info-circle me-2"></i>
                      <strong>Mínimo 8 caracteres:</strong> mayúsculas, números y símbolos especiales
                    </div>
                  </div>
                </div>

                <hr className="my-5" />

                <div>
                  <h3 className="fw-bold fs-3 mb-4 text-dark">Eliminar Cuenta</h3>
                  <div className="row align-items-end g-3">
                    <div className="col-lg-8 col-md-8">
                      <label htmlFor="select-delete-reason" className="form-label fw-bold fs-6 mb-3">
                        Motivo de eliminación
                      </label>
                      <select id="select-delete-reason" className="form-select form-control-lg input-register" defaultValue="">
                        <option value="" disabled>Selecciona el motivo de eliminación</option>
                        <option value="privacidad">Preocupación por privacidad</option>
                        <option value="desuso">No uso la cuenta</option>
                        <option value="problemas">Problemas técnicos</option>
                        <option value="otro">Otro motivo</option>
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <button id="btn-delete-account" className="btn btn-danger btn-lg w-100 py-3 fs-5 fw-bold">
                        Eliminar Cuenta
                      </button>
                    </div>
                  </div>
                  <div id="status-delete" className="form-text mt-3 small text-muted"></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);