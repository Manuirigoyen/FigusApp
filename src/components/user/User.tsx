export const User = () => (
  <div className="d-flex">
    <button id="toggleSidebar" className="sidebar-toggle-btn" aria-label="Abrir menú">
      ⮜
    </button>

    <aside className="bg-light border-end px-3 py-3 pb-5 sidebar-width">
      <div className="profile-wrapper text-center mb-4">
        <div className="img-container">
          <img
            id="profilePhoto"
            src="assets/img/db/users/fotoPerfilDefault.png"
            alt="Foto de perfil"
            className="rounded-circle mb-2"
          />
        </div>
        <h6 id="profileEmail">usuario@example.com</h6>
        <button id="btn-logout" className="btn btn-danger btn-sm w-100 mb-3">
          Cerrar sesión
        </button>
      </div>

      <h5 className="text-center mb-3">Mi cuenta</h5>
      <ul className="list-unstyled">
        <li className="mb-2">
          <button
            className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-between mb-2"
            id="btn-album"
          >
            Mis álbumes <span>📓</span>
          </button>
              <button
            className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-between"
            id="btn-album"
          >
            Mis Figuritas <span>💼</span>
          </button>
        </li>
      </ul>
    </aside>

    <div className="flex-grow-1 p-4"></div>
  </div>
);