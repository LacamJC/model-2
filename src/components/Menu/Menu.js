import styles from '../../assets/scss/menu/Menu.module.css'
import ItemMenu from './ItemMenu'

const Menu = () => {
    return(
        <>
         <ul className={`${styles.menu}`}>
                <ItemMenu label='Home'/>
                <ItemMenu label='Sobre'/>
                <ItemMenu label='Serviços'/>
                <ItemMenu label='Contato'/>
            </ul>
        </>
    )
}

export default Menu 