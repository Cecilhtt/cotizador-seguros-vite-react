// funcion que calcula el precio del seguro
export function calcularCotizacion(datos) {
  const { edad, tipoPropiedad, metrosCuadrados, valorPropiedad } = datos
  
  // valida que los campos esten completos
  if (!edad || !tipoPropiedad || !metrosCuadrados || !valorPropiedad) {
    return null
  }

  // precio base: 2% del valor de prop
  let precioBase = valorPropiedad * 0.02

  // factor por edad, mas joven mas riesgo
  let factorEdad = 1
  if (edad < 25) {
    factorEdad = 1.3  // +30%
  } else if (edad >= 25 && edad < 40) {
    factorEdad = 1.0  // precio normal
  } else if (edad >= 40 && edad < 60) {
    factorEdad = 0.9  // -10% 
  } else {
    factorEdad = 1.1  // +10% 
  }

  // por tipo de prop
  let factorPropiedad = 1
  switch(tipoPropiedad) {
    case 'casa':
      factorPropiedad = 1.2  // +20% 
      break
    case 'departamento':
      factorPropiedad = 1.0  // precio normal
      break
    case 'duplex':
      factorPropiedad = 1.15 // +15%
      break
    default:
      factorPropiedad = 1
  }

  // por m2 mas 
 
  let factorMetros = 1
  if (metrosCuadrados < 50) {
    factorMetros = 0.9   // -10%
  } else if (metrosCuadrados >= 50 && metrosCuadrados < 100) {
    factorMetros = 1.0   // precio normal
  } else if (metrosCuadrados >= 100 && metrosCuadrados < 200) {
    factorMetros = 1.2   // +20%
  } else {
    factorMetros = 1.5   // +50%
  }

  //calculo final
  const precioFinal = precioBase * factorEdad * factorPropiedad * factorMetros

  // retornaobjeto con toda la info
  return {
    precioMensual: Math.round(precioFinal / 12),
    precioAnual: Math.round(precioFinal),
    desglose: {
      precioBase: Math.round(precioBase),
      factorEdad,
      factorPropiedad,
      factorMetros
    }
  }
}

// func  auxiliar para generar opciones de cobertura
export function generarOpcionesCobertura(precioBase) {
  return [
    {
      id: 1,
      nombre: 'Cobertura Básica',
      descripcion: 'Protección contra incendio y robo',
      precio: precioBase,
      incluye: [
        'Incendio',
        'Robo con violencia',
        'Daños por agua',
        'Responsabilidad civil básica'
      ]
    },
    {
      id: 2,
      nombre: 'Cobertura Plus',
      descripcion: 'Protección extendida con más beneficios',
      precio: Math.round(precioBase * 1.5),
      destacada: true,
      incluye: [
        'Todo lo de Básica',
        'Fenómenos naturales',
        'Daños eléctricos',
        'Rotura de cristales',
        'Responsabilidad civil ampliada'
      ]
    },
    {
      id: 3,
      nombre: 'Cobertura Premium',
      descripcion: 'Máxima protección integral',
      precio: Math.round(precioBase * 2),
      incluye: [
        'Todo lo de Plus',
        'Terremoto e inundación',
        'Robo sin violencia',
        'Electrodomésticos',
        'Asistencia 24/7',
        'Hogar sustituto'
      ]
    }
  ]
}