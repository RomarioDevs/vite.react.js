import styles from './Contatos.module.css'
import { GoMail } from "react-icons/go";
import { IoLogoInstagram, IoLogoYoutube, IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";


function Contatos() {
    return (
        <>

            <section className={styles.contatos}>
                <h2>Contatos</h2>
                <h3>Entre em Contatos</h3>
                <p>Para que possamos conversar mais sobre.</p>
                <div className={styles.icones}>
                    <a href="mailto:romariodevs@gmail.com" target="_blank" rel="noopener noreferrer"><GoMail className={styles.icone} /></a>
                    <a href="https://wa.me/5583999527116" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp className={styles.icone} /></a>
                    <a href="https://www.instagram.com/euoromario/" target="_blank" rel="noopener noreferrer"><IoLogoInstagram className={styles.icone} /></a>
                    <a href="https://www.youtube.com/@romariosantos3835" target="_blank" rel="noopener noreferrer"><IoLogoYoutube className={styles.icone} /></a>
                    <a href="https://github.com/RomarioDevs" target="_blank" rel="noopener noreferrer"><IoLogoGithub className={styles.icone} /></a>
                    <a href="https://www.linkedin.com/in/euoromario/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin className={styles.icone} /></a>
                </div>
            </section>
        </>
    )
}
export default Contatos