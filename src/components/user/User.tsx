import './user.css';

import { Link } from 'react-router-dom';
import { Config } from './config/Config';

/**
 * Componente principal del panel de usuario.
 * Renderiza la interfaz completa con sidebar de usuario y área de configuración.
 */
export const User = () => {
  return (
    <main id="mainContent" className="main-wrapper position-relative d-flex z-2">
      {getDivAside()}

      <div className="position-relative z-1 flex-grow-1">
        <Config />
      </div>
    </main>
  );
};

/**
 * Renderiza la sidebar de navegación del usuario.
 * Incluye perfil, toggle, enlaces rápidos a álbumes/billetera y logout.
 *
 * @returns {JSX.Element} Panel lateral completo del usuario.
 */
const getDivAside = () => (
  <div className="d-flex panel-height">
    <button id="toggleSidebar" className="sidebar-toggle-btn" aria-label="Abrir menú">
      ⮜
    </button>
    <aside className="bg-light border-end px-3 py-3 pb-5 sidebar-width z-2">
      <div className="profile-wrapper text-center mb-4">
        <div className="img-container position-relative">
          <Link to="/config">
            <button id="btn-config" className="profile-icon-config" title="Configuración">
              ⚙️
            </button>
          </Link>
          <img
            id="profilePhoto"
            src="assets/img/db/users/fotoPerfilDefault.png"
            alt="Foto de perfil"
            className="rounded-circle mb-2"
          />
        </div>
        <h6 id="profileEmail">usuario@example.com</h6>
        <Link to="/home">
          <button id="btn-logout" className="btn btn-danger btn-sm w-100 mb-3">
            Cerrar sesión
          </button>
        </Link>
      </div>
      <h5 className="text-center mb-3">Mi cuenta</h5>
      <ul className="list-unstyled">
        <li className="mb-2">
          <Link to="/album">
            <button
              className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-between mb-2"
              id="btn-album"
            >
              Mis álbumes <span>📓</span>
            </button>
          </Link>
          <Link to="/billetera">
            <button
              className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-between"
              id="btn-figuritas"
            >
              Mis Figuritas <span>💼</span>
            </button>
          </Link>
        </li>
      </ul>
    </aside>
  </div>
);