import logoImg from '../../../assets/logo.png'
import styles from './Logo.module.css'

function Logo({ text = 'Aplicación', href = '#' }) {
  return (
    <a href={href} className={styles.logo}>
      <img src={logoImg} alt={text}  className={styles.image} />
    </a>
  )
}

export default Logo