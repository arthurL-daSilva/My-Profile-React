import { Container, Buttons, Itens, Me_img} from './style'
import Me from '../../Images/Me.png'
import LinkedIn from '../../Svg/linkedin-color.svg'
import LinkedIn2 from '../../Svg/linkedin-preto.svg'
import Email from '../../Svg/email.svg'
import Github from '../../Svg/github.svg'
import Location from '../../Svg/location.svg'
import Phone from '../../Svg/phone.svg'
import Twitter from '../../Svg/twitter.svg'
import Twitter2 from '../../Svg/twitter2.svg'


export default function Main(){
    return(
        <Container>
            <Me_img className='animate__animated animate__fadeInRight'>
                <img src={Me} alt="Foto minha" />
            </Me_img>
            <div>
                <aside className='animate__animated animate__fadeInLeft'>
                    <p>Olá Pessoal!</p>
                    <h1>Sou o Arthur</h1>
                    <h6>ou jester para os mais chegados</h6>
                    <h3>Dev Front-end React.js</h3>
                    <Itens>
                        <li>
                            <img src={Location} alt="Localização" />
                            <p>Av. das Acácias, Guarujá</p>
                        </li>
                        <li>
                            <img src={Phone} alt="Telefone" />
                            <p>+55 (13) 98854-6767</p>
                        </li>
                        <li>
                            <img src={Email} alt="E-mail" />
                            <p>arthurleal723@gmail.com</p>
                        </li>
                        <li>
                            <img src={Github} alt="GitHub" />
                            <p>https://github.com/arthurL-daSilva</p>
                        </li>
                    </Itens>
                    <Buttons>
                        <a href="https://www.facebook.com/arthurdasilva.leal/"><button><img src={LinkedIn} alt="LinkedIn" id='lk'/><img src={LinkedIn2} alt="LinkedIn-black" id='lk2'/></button></a>
                        <a href="https://www.instagram.com/arthur_leal2146/"><button></button></a>
                        <a href="https://www.linkedin.com/in/arthurdasilvaleal/"><button></button></a>
                        <a href="https://x.com/Art_2146Leal"><button><img src={Twitter} alt="twitter" id='tt'/><img src={Twitter2} alt="Twitter" id='tt2'/></button></a>
                    </Buttons>
                </aside>
            </div>
        </Container>
    )
}