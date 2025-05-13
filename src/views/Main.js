import Header from "../layout/Header"
import styles from '../assets/scss/main/Main.module.css'
const Main = () => {
    return (
        <>
            <div className="container">
                <Header />
            </div>

            <div className={`${styles.main} container row bg-sduccess mx-auto`} id="home">
                <div className="col col-md-6 col-12 d-flex justify-content-center align-items-center">
                    <div className={`${styles.content}`}>
                        <h1 className={`${styles.title}`}>
                            LR ASSESORIA
                        </h1>
                        <h2 className={`${styles.subtitle}`}>Juntos transformando seus sonhos em realidade</h2>
                        <p>
                        A LR Assessoria transforma sonhos em realidade, um evento de cada vez. Com paixão e dedicação, criamos celebrações únicas e personalizadas, que refletem a sua identidade e estilo.
                        </p>
                        <div className="mx-auto">
                            <a href="#" className={`${styles.btn}`}>Entre em Contato</a>
                        </div>
                    </div>
                </div>
                <div className={`${styles.asideImage} col col-md-6 col-12 bg-sucess`}>
                    
                </div>
            </div>
        </>
    )
}

export default Main