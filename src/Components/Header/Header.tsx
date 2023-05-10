import logoRocket from "../../../public/logo-rocket.svg";
import styles from './Header.module.css'


export const Header = () => {
return (
<header className={styles.header}>
        <img src={logoRocket} alt="Foguete" />
        <h1>
          <span className={styles.to}>to</span>
          <span className={styles.do}>do</span>
        </h1>
</header>
)
}