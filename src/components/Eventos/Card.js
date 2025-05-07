import styles from '../../assets/scss/eventos/index.module.css'

const Card = ({ image, icon, title }) => {
    return (
        <>
            <div className="">
                <div className={`${styles.card}`}>
                    <img src={image} className={`${styles.image}`} ></img>
                    <div className={`${styles.cardIcon}`}>
                        <img src={icon} />
                    </div>
                </div>
                <h1 className={`${styles.title}`}>{title}</h1>
            </div>
        </>
    )
}

export default Card