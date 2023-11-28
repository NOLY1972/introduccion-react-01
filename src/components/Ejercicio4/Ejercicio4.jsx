import Ejercicio1 from './components/Ejercicio1/Ejercicio1'
import Footer from './components/Footer'
import Header from './components/Header'
import TituloPrincipal from './components/TituloPrincipal'
import Ejercicio2 from './components/Ejercicio2'
import './index.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <TituloPrincipal />
        <Ejercicio1 />
        <Ejercicio2/>
        
        {/* Añade tus componentes aqui */}
      </main>
      <Footer />
    </>
  )
}