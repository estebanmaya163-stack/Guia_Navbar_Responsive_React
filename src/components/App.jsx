import Navbar from './components/organisms/Navbar/Navbar'
import styles from './App.module.css'

const NAV_ITEMS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#contacto', label: 'Contacto' },
]

function App() {
  return (
    <>
      <Navbar logoText="Aplicación" items={NAV_ITEMS} />

      <main className={styles.content}>
        <h1>Navbar Responsive</h1>
        <p>
          Cambia el tamaño de la ventana para observar cómo se adapta el menú hamburguesa. <span>&#9776;</span>
        </p>
      </main>
    </>
  )
}

export default App