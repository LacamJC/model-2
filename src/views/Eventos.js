import styles from '../assets/scss/eventos/index.module.css'
import Card from '../components/Eventos/Card'
import iconeCasamento from '../assets/img/icones/casamento_black.png'
import iconePanela from '../assets/img/icones/panela_black.png'
const Eventos = () => {


    const eventos = [
        {
            image: "https://placehold.co/300x300",
            icon: iconeCasamento,
            title: "Titulo do evento"
        },
        {
            image: "https://placehold.co/300x300",
            icon: iconePanela ,
            title: "Titulo do evento"
        }
    ]

    return (
        <div className={`${styles.main} `} id='events'>
            <div className={`${styles.content} h-100 container d-flex flex-column justify-content-center align-items-center  `}>
                <h1 className={`my-5`}>
                    Eventos
                </h1>
                <div className='d-flex flex-row flex-wrap justify-content-center align-items-center'>
                    {eventos.map((evento, index) => {
                        return(
                            <div key={index} className='mx-5 my-3'>
                                <Card image={evento.image} icon={evento.icon} title={evento.title} />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Eventos