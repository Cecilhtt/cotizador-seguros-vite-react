//organiza la estructura de la aplicacion
import './styles/App.css'
import Header from './components/Header'
import FormularioCotizador from './components/FormularioCotizador'

function App() {
  return (
    <div className="app-container">
       {/* encabezado con titulo y descripcion */}
      <Header />
     
      {/*contenedor principal con el form y resultados*/}
      <main className="app-main">
        <FormularioCotizador />
      </main>
    </div>
  )
}

export default App