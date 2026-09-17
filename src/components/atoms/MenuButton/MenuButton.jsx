import styles from './MenuButton.module.css'

function MenuButton({ onClick, isOpen = false }) {
  return (
    <button
      type="button"
      className={styles.menuButton}
      onClick={onClick}
      aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      aria-expanded={isOpen}
    >
      ☰
    </button>
  )
}

export default MenuButton