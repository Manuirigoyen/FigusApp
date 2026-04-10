import './register.css';

/**
 * Renderiza la página completa del formulario de registro
 * @returns Elemento JSX de la página de registro completa.
 */
export const Register = () => {
  return (
    <main id="mainContent" className="main-wrapper position-relative register-main pt-4 pb-2">
      <div className="main-content" />

      <div className="main-content-content position-relative z-1">
        <div className="container-fluid px-4">
          <div className="row g-0 justify-content-center">
            <div className="col-xl-10 col-lg-11 col-md-12 px-0">
              <div className="register-subtitle text-center mb-4">
                <h1 className="fw-bold display-4 pb-2 text-white register-subtitle-title">
                  Empeza a usar FigusApp
                </h1>
                <h2 className="text-white mt-2">
                  Regístrate para comenzar a coleccionar figuritas e intercambiarlas con amigos!
                </h2>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-12">                            
                    <div className="card-body p-4">
                      <form className="register-form pb-2">
                        <div className="form-group-full mb-4">
                          <label className="form-label fw-bold fs-6 mb-3">Nombre completo</label>
                          <div className="row">
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control form-control-lg input-register"
                                placeholder="Primer nombre"
                              />
                            </div>
                            <div className="col-md-6">
                              <input
                                type="text"
                                className="form-control form-control-lg input-register"
                                placeholder="Segundo nombre"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group-full mb-4">
                          <label className="form-label fw-bold fs-6 mb-3">Fecha de nacimiento</label>
                          <input
                            type="date"
                            className="form-control form-control-lg input-register"
                          />
                        </div>

                        <div className="form-group-full mb-4">
                          <label className="form-label fw-bold fs-6 mb-3">Nacionalidad</label>
                          <select
                            className="form-control form-control-lg input-register"
                            aria-label="Nacionalidad"
                          >
                            {/* futuro: opciones cargadas dinámicamente */}
                          </select>
                        </div>

                        <div className="form-group-full mb-4">
                          <label className="form-label fw-bold fs-6 mb-3">Email o número telefónico</label>
                          <input
                            type="text"
                            className="form-control form-control-lg input-register"
                            placeholder="ejemplo@email.com"
                          />
                        </div>

                        <div className="form-group-full mb-4">
                          <label className="form-label fw-bold fs-6 mb-3">Foto de perfil (opcional)</label>
                          <input
                            type="file"
                            className="form-control form-control-lg input-register"
                            accept="image/*"
                          />
                        </div>

                        <div className="form-group-full mb-5">
                          <label className="form-label fw-bold fs-6 mb-3">Contraseña</label>
                          <div className="row">
                            <div className="col-md-6">
                              <input
                                type="password"
                                className="form-control form-control-lg input-register"
                                placeholder="Contraseña"
                              />
                            </div>
                            <div className="col-md-6">
                              <input
                                type="password"
                                className="form-control form-control-lg input-register"
                                placeholder="Confirmar"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg register-btn px-4 py-3 fs-5 fw-bold"
                          >
                            Enviar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
};

//validacion del formulario de registro que conecta al backend