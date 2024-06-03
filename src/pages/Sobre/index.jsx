import styles from './Sobre.module.css'
import avatar from "./images/Romario.png"
import Git from "./images/git.svg"

function Sobre() {
    return (
        <section className={styles.sobre}>
            <div className={styles.bio}>
                <img src={avatar} alt="romario" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2> <br />
                    <p>
                        Sou <span> Romario Santos</span>  aprendendo sobre react.<br/><br/>
                        <strong>Dev Full Stack</strong>
                    </p>
                </div>
            </div>
            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={Git} alt="Git" />
                </div>
            </div>
        </section>
    )
}
export default Sobre 