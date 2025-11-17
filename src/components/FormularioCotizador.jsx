//importo hooks de react y recusos necesarios
import { useState } from 'react'
import '../styles/Formulario.css'
import { calcularCotizacion, generarOpcionesCobertura } from '../utils/calcularCotizacion'
import ResultadoCotizacion from './ResultadoCotizacion'

function FormularioCotizador() {
  //estado del compt que guarda datos ingresados
  const [datosUsuario, setDatosUsuario] = useState({
    nombre: '',
    edad: '',
    tipoPropiedad: '',
    metrosCuadrados: '',
    valorPropiedad: ''
  })

  //esatdo que guarda opciones de cotiz calc
  //primero es null y despues uso array de 3 opc
  const [opcionesCotizacion, setOpcionesCotizacion] = useState(null)
  
  //estado guarda mensj d error por campo
  const [errores, setErrores] = useState({})
  
  //estado indica que calula cotiz
  const [calculando, setCalculando] = useState(false)

  //maneja cambios de inputs del form
  const handleChange = (e) => {
    //extrae datos del campo y evento
    const { name, value } = e.target
    
    //actualizo estado solo modifica lo q cambio
    setDatosUsuario({
      ...datosUsuario,
      [name]: value
    })

//limpia error cuando se empieza a esc
    if (errores[name]) {
      setErrores({
        ...errores,
        [name]: ''
      })
    }
  }

//valido los campos antes de enviar
  const validarFormulario = () => {
    const nuevosErrores = {}

    if (!datosUsuario.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio'
    } else if (datosUsuario.nombre.trim().length < 3) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 3 caracteres'
    }

    if (!datosUsuario.edad) {
      nuevosErrores.edad = 'La edad es obligatoria'
    } else if (datosUsuario.edad < 18) {
      nuevosErrores.edad = 'Debes ser mayor de 18 años'
    } else if (datosUsuario.edad > 100) {
      nuevosErrores.edad = 'Edad no válida'
    }

    if (!datosUsuario.tipoPropiedad) {
      nuevosErrores.tipoPropiedad = 'Selecciona un tipo de propiedad'
    }

    if (!datosUsuario.metrosCuadrados) {
      nuevosErrores.metrosCuadrados = 'Los metros cuadrados son obligatorios'
    } else if (datosUsuario.metrosCuadrados < 20) {
      nuevosErrores.metrosCuadrados = 'Mínimo 20 m²'
    } else if (datosUsuario.metrosCuadrados > 1000) {
      nuevosErrores.metrosCuadrados = 'Máximo 1000 m²'
    }

    if (!datosUsuario.valorPropiedad) {
      nuevosErrores.valorPropiedad = 'El valor de la propiedad es obligatorio'
    } else if (datosUsuario.valorPropiedad < 10000) {
      nuevosErrores.valorPropiedad = 'Valor mínimo: USD 10,000'
    } else if (datosUsuario.valorPropiedad > 10000000) {
      nuevosErrores.valorPropiedad = 'Valor máximo: USD 10,000,000'
    }

    return nuevosErrores
  }

  //maneja envio de form y valida datos
  const handleSubmit = (e) => {
    //para q no recargue la pag
    e.preventDefault()
    
    //valido
    const nuevosErrores = validarFormulario()
    
    //si E errores detiene el proceso y me muestra el error
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      return //salgo y  o se calcula
    }

   
    setCalculando(true)
    
    //como no es proyecto real simula tiemoi de procesamiento
    setTimeout(() => {
      const resultado = calcularCotizacion(datosUsuario)
      
      if (resultado) {
        //me da las 3 opciones de cobertura
        const opciones = generarOpcionesCobertura(resultado.precioMensual)
        setOpcionesCotizacion(opciones)
        console.log('Cotización calculada:', resultado)
      }
      
      setCalculando(false)
      //oculta el spinner
      
      
      setTimeout(() => {
        const resultadoElement = document.querySelector('.resultado-container')
        if (resultadoElement) {
          resultadoElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }, 1500) 
  }

 
  //reinicio el form, limpio campos
  const handleReset = () => {
    setDatosUsuario({
      nombre: '',
      edad: '',
      tipoPropiedad: '',
      metrosCuadrados: '',
      valorPropiedad: ''
    })
    setOpcionesCotizacion(null)
    setErrores({})
  }

 // renderiza componente
  return (
    <div className="formulario-container">
      <h2>Datos para tu cotización</h2>
      
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo:</label>
          <input 
            type="text" 
            id="nombre"
            name="nombre"
            value={datosUsuario.nombre}
            onChange={handleChange}
            placeholder="Ej: Juan Pérez"
            className={errores.nombre ? 'input-error' : ''}
          />

           {/* Renderizado condicional, solo muestra el error si existe */}
          {errores.nombre && (
            <span className="mensaje-error">{errores.nombre}</span>
          )}
        </div>

{/* campos*/}
        <div className="form-group">
          <label htmlFor="edad">Edad:</label>
          <input 
            type="number" 
            id="edad"
            name="edad"
            value={datosUsuario.edad}
            onChange={handleChange}
            placeholder="Ej: 30"
            min="18"
            max="100"
            className={errores.edad ? 'input-error' : ''}
          />
          {errores.edad && (
            <span className="mensaje-error">{errores.edad}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="tipoPropiedad">Tipo de propiedad:</label>
          <select 
            id="tipoPropiedad"
            name="tipoPropiedad"
            value={datosUsuario.tipoPropiedad}
            onChange={handleChange}
            className={errores.tipoPropiedad ? 'input-error' : ''}
          >
            <option value="">Selecciona una opción</option>
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
            <option value="duplex">Duplex</option>
          </select>
          {errores.tipoPropiedad && (
            <span className="mensaje-error">{errores.tipoPropiedad}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="metrosCuadrados">Metros cuadrados:</label>
          <input 
            type="number" 
            id="metrosCuadrados"
            name="metrosCuadrados"
            value={datosUsuario.metrosCuadrados}
            onChange={handleChange}
            placeholder="Ej: 80"
            min="20"
            className={errores.metrosCuadrados ? 'input-error' : ''}
          />
          {errores.metrosCuadrados && (
            <span className="mensaje-error">{errores.metrosCuadrados}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="valorPropiedad">Valor de la propiedad (USD):</label>
          <input 
            type="number" 
            id="valorPropiedad"
            name="valorPropiedad"
            value={datosUsuario.valorPropiedad}
            onChange={handleChange}
            placeholder="Ej: 100000"
            min="10000"
            step="1000"
            className={errores.valorPropiedad ? 'input-error' : ''}
          />
          {errores.valorPropiedad && (
            <span className="mensaje-error">{errores.valorPropiedad}</span>
          )}
        </div>

 {/* botones*/}
        <div className="botones-container">
          <button 
            type="submit" 
            className="btn-cotizar"
            disabled={calculando}
          >
            {calculando ? (
              <>
                <span className="spinner"></span>
                Calculando...
              </>
            ) : (
              'Calcular Cotización'
            )}
          </button>
{/* Botón de reset, solo aparece si ya hay resultados */}
          {opcionesCotizacion && (
            <button 
              type="button" 
              className="btn-reset"
              onClick={handleReset}
            >
              Nueva Cotización
            </button>
          )}
        </div>
      </form>

      <ResultadoCotizacion opciones={opcionesCotizacion} />
    </div>
  )
}

export default FormularioCotizador