import styles from '../assets/scss/footer/Footer.module.css'

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.logoArea}>
            <img src="/path/to/lrlogo.png" alt="LR Assessoria" className={styles.logo} />
            <p className={styles.tagline}>Transformando sonhos em realidade com planejamento e carinho.</p>
          </div>
  
          <div className={styles.linksArea}>
            <div>
              <h4>Contato</h4>
              <p>Email: contato@lrassessoria.com</p>
              <p>WhatsApp: (11) 91234-5678</p>
            </div>
            <div>
              <h4>Links Rápidos</h4>
              <ul>
                <li><a href="#home">Início</a></li>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#events">Eventos</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} LR Assessoria. Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  };

export default Footer