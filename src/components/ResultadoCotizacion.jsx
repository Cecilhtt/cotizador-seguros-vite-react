import '../styles/Resultado.css'
/*componente muetsra opc de coizacion  en array 3 tarjetas*/

function ResultadoCotizacion({ opciones }) {
  // si no hay opciones, no renderiza nada
  if (!opciones || opciones.length === 0) {
    return null 
  }

  return (
    <div className="resultado-container">
      <h2>¡Tu cotización está lista!</h2>
      <p className="resultado-subtitulo">Elige el plan que mejor se adapte a ti:</p>

      <div className="opciones-grid">
        {/* itera sobre cada opcion y crea una tarjeta */}
        {opciones.map((opcion) => (
          <div 
            key={opcion.id} 
            className={`opcion-card ${opcion.destacada ? 'destacada' : ''}`}
          >
            {opcion.destacada && (
              <div className="badge-destacada">⭐ Más elegido</div>
            )}

            <h3>{opcion.nombre}</h3>
            <p className="opcion-descripcion">{opcion.descripcion}</p>

            <div className="precio">
              <span className="precio-cantidad">${opcion.precio}</span>
              <span className="precio-periodo">/mes</span>
            </div>

            <ul className="lista-beneficios">
              {opcion.incluye.map((beneficio, index) => (
                <li key={index}>✅ {beneficio}</li>
              ))}
            </ul>

            <button className="btn-seleccionar">
              Seleccionar Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResultadoCotizacion