import './ruleta.css';

export const Ruleta = () => {
  return (
    <main id="mainContent" className="main-wrapper position-relative">
      <div className="main-content" />

      <div className="main-content-content position-relative z-1">
        <div className="ad-left">
          {getDivAnuncio(
            "assets/img/adds/dymatize.jpeg",
            "https://www.dymatize.com"
          )}
        </div>

        <div className="ad-right">
          {getDivAnuncio(
            "assets/img/adds/vitamin.jpeg",
            "https://www.suweb.com.ar"
          )}
        </div>
        {getDivHeader()}
        {getDivPremios()}
        {getDivBotonesEspeciales()}
        {getDivBotonGirar()}
      </div>

    </main>
  );
}

/**
 * Renderiza el header principal de bienvenida.
 * @returns Sección de título y descripción inicial.
 */
const getDivHeader = () => (
  <section className="header-section text-white text-center py-5 position-relative z-2">
    <div className="container">
      <h1 className="fw-bold display-3 pb-2">
        ¡Es hora de probar Suerte!
      </h1>
      <h2>
        ¡Dale un giro a la ruleta y mirá qué recompensa te toca!
      </h2>
    </div>
  </section>
);

/**s
 * Renderiza el anuncio lateral fijo.
 * @param {string} imgPath - Ruta de la imagen del anuncio.
 * @param {string} link - URL destino del anuncio.
 * @returns Bloque de anuncio con imagen y enlace.
 */
const getDivAnuncio = (imgPath: string, link: string) => (
  <div className="ad-sidebar">
    <a href={link} target="_blank" rel="noopener noreferrer" className="d-block h-100">
      <div className="ad-unit p-3 text-center h-100 d-flex flex-column justify-content-start">
        <img
          src={imgPath}
          alt="Anuncio Google Ads 160x600"
          className="ad-unit-image"
        />
      </div>
    </a>
  </div>
);

/**
 * Renderiza el componente de la ruleta de premios.
 * Genera una interfaz visual con ruleta giratoria, premios y texto promocional.
 *
 * @returns {JSX.Element} Elemento JSX que representa la ruleta de premios completa.
 */
const getDivPremios = () => {
  return (<>
    <div className="container-fluid text-center">
      <div className="d-flex justify-content-center align-items-start">
        <div className="position-relative contenedorPrincipal">
          <div className="ruleta-container position-relative">
            <img
              src="../../assets/img/icons/btn_ruleta.png"
              className="ruleta"
              alt="Fondo de Ruleta"
            />
            <img
              src="../../assets/img/icons/base_ruleta.png"
              className="ruleta-base"
              alt="Base de Ruleta"
            />


            <img
              src="../../assets/img/icons/triangulo_ruleta.png"
              className="triangulo-ruleta"
              alt="Triangulo de Ruleta"
            />


            <div
              className="premios-circle-wrapper position-absolute top-50 start-50 translate-middle"
            >
              <div className="premios-circle">
                <img src="../../assets/img/icons/sobreDorado.png" className="premio" />
                <img src="../../assets/img/icons/premio_nada.png" className="premio" />
                <img src="../../assets/img/icons/sobreGris.png" className="premio" />
                <img src="../../assets/img/icons/premio_nada.png" className="premio" />
                <img
                  src="../../assets/img/icons/figurita_aleatoria.png"
                  className="premio"
                />
                <img src="../../assets/img/icons/premio_nada.png" className="premio" />
                <img src="../../assets/img/icons/giroGratis.png" className="premio" />
                <img src="../../assets/img/icons/premio_nada.png" className="premio" />
              </div>
            </div>
            <div id="premioGanado" className="premio-popup d-none"></div>
          </div>
        </div>
      </div>
    </div>
  </>);
}

/**
 * Renderiza el panel de botones especiales para giros automáticos.
 * Contiene botones para 5, 10, 15 giros y modo automático en un layout de dos filas.
 *
 * @returns {JSX.Element} Elemento JSX con botones de control de giros.
 */
const getDivBotonesEspeciales = () => {
  return (<>
    <div className="d-flex flex-column align-items-stretch mt-5">
      <div className="d-flex justify-content-center mb-3">
        <button className="btn btn-custom me-2" id="girar5">5 Giros</button>
        <button className="btn btn-custom" id="girar10">10 Giros</button>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-custom me-2" id="girar15">15 Giros</button>
        <button className="btn btn-dark-custom" id="autoGiro">Automático</button>
      </div>
    </div>
  </>);
}

/**
 * Renderiza el botón principal de girar y enlace de tienda para sin giros.
 * Muestra contador de giros restantes y botón alternativo cuando no hay giros.
 *
 * @returns {JSX.Element} Elemento JSX con controles principales de ruleta.
 */
const getDivBotonGirar = () => {
  return (
    <>
      <div className="text-center botonPrincipal">
        <button className="btn btn-warning" id="girarBtn">Girar (0)</button>
      </div>

      <div id="sinGiros" className="text-center">
        <button
          id="btn-tienda"
          className="text-decoration-none text-dark btn-reset"
        >
          ¿Te quedaste sin giros?
        </button>
      </div>
    </>
  );
}


