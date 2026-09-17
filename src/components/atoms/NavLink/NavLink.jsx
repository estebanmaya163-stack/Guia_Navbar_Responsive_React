import styles from './NavLink.module.css'

function NavLink({ href = '#', label, active = false, onClick }) {
  return (
    <a
      href={href}
      className={`${styles.navLink} ${active ? styles.active : ''}`}
      onClick={onClick}
    >
      {label}
    </a>
  )
}

export default NavLink