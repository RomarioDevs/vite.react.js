import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './Pages404.module.css'

function Pages404(){
    return(
        <>
        <Header />
        <Container>
            <h2 className={styles.titulo2}>Algo de errado não está certo!</h2>
            <div className={styles.textos}>
                <span className={styles.texte_grande}>404</span> <br />
                <strong className={styles.texte_vermelho}>Página Não Localizada</strong>
            </div>
        </Container>
        <Footer/>

        </>
    )
}

export default Pages404