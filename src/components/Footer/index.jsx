import styles from './Footer.module.css'
import logo from "./Logo.png"

const Footer = () => {
  return (
    <footer className={styles.container}>
        <h2>Desarrollado por <img src={logo} alt='Alura'/></h2>
    </footer>

  )
}

export default Footer