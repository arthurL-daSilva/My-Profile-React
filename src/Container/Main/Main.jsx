import { Container } from './style'
import Me from '../../Images/Me.jpeg'

export default function Main(){
    return(
        <Container>
            <img src={Me} alt="Foto minha" />
            <aside>
                <p>Olá Pessoal</p>
                <h1>Sou o Arthur</h1>
                <h3>Dev Front-end React.js</h3>
                <h6>ou jester para os mais chegados</h6>
                <ul>
                    <li>
                        <img src="aaa" alt="Localização" />
                        <p>Av. das Acácias, Guarujá</p>
                    </li>
                    <li>
                        <img src="aaa" alt="Telefone" />
                        <p>+55 (13) 98854-6767</p>
                    </li>
                    <li>
                        <img src="aaa" alt="E-mail" />
                        <p>arthurleal723@gmail.com</p>
                    </li>
                    <li>
                        <img src="aaa" alt="GitHub" />
                        <a href="https://github.com/arthurL-daSilva">Meu GitHub!</a>
                    </li>
                </ul>
                <section>
                    <button>face</button>
                    <button>insta</button>
                    <button>linkdin</button>
                    <button>twitter</button>
                </section>
            </aside>
        </Container>
    )
}