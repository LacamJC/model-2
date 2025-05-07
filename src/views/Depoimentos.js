import styles from '../assets/scss/depoimentos/index.module.css'
import Card from '../components/Eventos/Card'
const Depoimentos = () => {
    return (
        <div className={`${styles.depoimentos} dbg-success d-flex justify-content-center align-items-center flex-column flex-wrap `}>
            <div className={`${styles.container} container dbg-warning mt-5`}>
                <h1 className='mb-5 text-center'>Depoimento de nossos clientes</h1>
                <div className='mt-5 d-flex flex-row justify-content-between align-items-center flex-wrap'>

                    <Card icon={""} image={"https://placehold.co/300x300"} title="Debutante Keyla" />
                    <Card icon={""} image={"https://placehold.co/300x300"} title="Jonas & Maria" />
                    <Card icon={""} image={"https://placehold.co/300x300"} title="Betania & Cosme" />

                </div>
            </div>
        </div>
    )
}

export default Depoimentos