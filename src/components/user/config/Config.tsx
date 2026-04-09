export const Config = () => (
  <div>
    <div className="mb-4">
      <h2 className="fw-bold">Datos de usuario</h2>
      <p>
        Gestiona tu información, la privacidad y la seguridad para mejorar tu
        experiencia en FigurApp.
      </p>
    </div>

    <div className="card bg-light border rounded p-3 mb-4">
      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">Nombre</label>
        <div className="d-flex gap-2 align-items-center">
          <input type="text" id="inputName" className="form-control" />
          <button id="btn-update-name" title="Modificar">
            <img
              src="../../assets/img/icons/btn_actualizar.png"
              alt="Actualizar"
            />
          </button>
        </div>
        <div id="status-name" className="mt-2 small text-muted"></div>
      </div>

      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">Correo electrónico</label>
        <div className="d-flex gap-2 align-items-center">
          <input type="email" id="inputEmail" className="form-control" />
          <button id="btn-update-email" title="Modificar">
            <img
              src="../../assets/img/icons/btn_actualizar.png"
              alt="Actualizar"
            />
          </button>
        </div>
        <div id="status-email" className="mt-2 small text-muted"></div>
      </div>

      <div className="mb-3">
        <label htmlFor="inputPhone" className="form-label">Número de teléfono</label>
        <div className="d-flex gap-2 align-items-center">
          <input type="tel" id="inputPhone" className="form-control" />
          <button id="btn-update-phone" title="Modificar">
            <img
              src="../../assets/img/icons/btn_actualizar.png"
              alt="Actualizar"
            />
          </button>
        </div>
        <div id="status-phone" className="mt-2 small text-muted"></div>
      </div>

      <div className="mb-3">
        <label htmlFor="inputCountry" className="form-label">País de origen</label>
        <div className="d-flex gap-2 align-items-center">
          <input type="text" id="inputCountry" className="form-control" />
          <button id="btn-update-country" title="Modificar">
            <img
              src="../../assets/img/icons/btn_actualizar.png"
              alt="Actualizar"
            />
          </button>
        </div>
        <div id="status-country" className="mt-2 small text-muted"></div>
      </div>

      <div className="mb-3">
        <label className="form-label">Fecha de nacimiento</label>
        <div className="d-flex gap-2 align-items-center">
          <input type="date" id="inputDob" className="form-control" />
          <button id="btn-update-dob" title="Modificar">
            <img
              src="../../assets/img/icons/btn_actualizar.png"
              alt="Actualizar"
            />
          </button>
        </div>
      </div>

      <hr />

      <div className="mb-3">
        <label className="form-label">Contraseña</label>
        <div className="d-flex gap-2 align-items-center">
          <input
            type="password"
            id="inputPass1"
            className="form-control"
            placeholder="Nueva contraseña"
          />
          <input
            type="password"
            id="inputPass2"
            className="form-control"
            placeholder="Confirmar nueva contraseña"
          />
          <button id="btn-update-pass" title="Modificar contraseña">
            <img
              src="../../assets/img/icons/btn_actualizar.png"
              alt="Actualizar contraseña"
            />
          </button>
        </div>
        <div id="status-pass" className="mt-2 small text-muted"></div>
      </div>

      <hr />

      <div className="mb-3">
        <div>
          <label className="form-label">Eliminar cuenta</label>
        </div>
        <div className="d-flex align-items-center gap-2">
          <select id="select-delete-reason" className="form-select" defaultValue="">
            <option value="" disabled>
              Selecciona el motivo de eliminación
            </option>
            <option value="privacidad">Preocupación por privacidad</option>
            <option value="desuso">No uso la cuenta</option>
            <option value="problemas">Problemas técnicos</option>
            <option value="otro">Otro</option>
          </select>
          <button id="btn-delete-account" className="btn btn-danger text-nowrap">
            Eliminar cuenta
          </button>
        </div>
        <div id="status-delete" className="mt-2 small text-muted"></div>
      </div>
    </div>
  </div>
);