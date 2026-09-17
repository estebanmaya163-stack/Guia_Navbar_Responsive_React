import Navlink from '../../atoms/NavLink/Navlink'
import styles from './NavMenu.module.css'

function NavMenu({ items, activeHref, onLinkClick, isOpen = false }) {
  return (
    <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      {items.map((item) => (
        <li key={item.href}>
          <Navlink
            href={item.href}
            label={item.label}
            active={item.href === activeHref}
            onClick={() => onLinkClick?.(item.href)}
          />
        </li>
      ))}
    </ul>
  )
}

export default NavMenu