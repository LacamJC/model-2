import styles from '../assets/scss/sobre/index.module.css'

const Sobre = () => {
    return (
        <>
            <div className={`${styles.main} container row mx-auto`} id='services'>
                <div className="col col-md-6 col-12 d-flex justify-content-center align-items-center flex-column">
                    <div className="">
                        <h2 className={`${styles.title}`}>O que podemos fazer por você ?</h2>
                        <p>
                            Vamos além de um simples serviço de assesoria, cuidados de tudo que você precisa para ter o evento dos seus sonhos
                        </p>
                        <h3>Nosso Serviços</h3>
                        <ul>
                            <li>Assesoria do Dia</li>
                            <li>Assesoria Personalizada</li>
                            <li>Assesoria Completa</li>
                            <li>Consultoria</li>
                            <li>Cerimonial</li>
                        </ul>
                    </div>
                </div>
                <div className={`col col-md-6 col-12 d-flex justify-content-center align-items-center flex-column`}>
                    <img src="https://placehold.co/500x500" className={`${styles.bg_right_image}`} />
                </div>
            </div>
        </>
    )
}

export default Sobre