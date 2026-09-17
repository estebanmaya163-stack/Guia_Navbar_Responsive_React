import { useState } from 'react'
import Logo from '../../atoms/logo/Logo'
import MenuButton from '../../atoms/MenuButton/Menubutton'
import NavMenu from '../../molecules/NavMenu/NavMenu'
import styles from './Navbar.module.css'

function Navbar({ logotext, items }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(items[0]?.href || '#')

  const handleLinkClick = (href) => {
    setActiveHref(href)
    setIsOpen(false)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Logo text={logotext} />

        <MenuButton isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />

        <NavMenu
          items={items}
          activeHref={activeHref}
          onLinkClick={handleLinkClick}
          isOpen={isOpen}
        />
      </nav>
    </header>
  )
} 

export default Navbar