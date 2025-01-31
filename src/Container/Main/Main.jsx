import { Container, Buttons, Itens, Me_img, Details_me, Fix_center} from './style'
import Me from '../../Images/Me.png'
import React from '../../Svg/react.svg'
import Email from '../../Svg/email.svg'
import Github from '../../Svg/github.svg'
import Location from '../../Svg/location.svg'
import Phone from '../../Svg/phone.svg'
import LinkedIn from '../../Images/linkedin_icon.svg'
import LinkedIn2 from '../../Images/linkedin_icon2.png'
import Twitter from '../../Svg/twitter.svg'
import Twitter2 from '../../Svg/twitter2.svg'
import Facebook from '../../Images/facebook_icon.png'
import Facebook2 from '../../Images/facebook_icon2.png'
import Instagram from '../../Images/insta_icon.png'
import Instagram2 from '../../Images/insta_icon2.png'

export default function Main(){
    return(
        <Fix_center>
            <Container>
                <Details_me className='animate__animated animate__fadeInRight'>
                    <Me_img>
                        <img src={Me} alt="Foto minha" />
                    </Me_img>
                    <p>Técnologias que uso:</p>
                    <section>
                        <img src={React} alt="React_Logo" id='React_logo'/>
                    </section>
                </Details_me>
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
                            <a href="https://www.linkedin.com/in/arthurdasilvaleal/"><button><img src={LinkedIn} alt="LinkedIn" id='lk'/><img src={LinkedIn2} alt="LinkedIn-black" id='lk2'/></button></a>
                            <a href="https://www.instagram.com/arthur_leal2146/"><button><img src={Instagram} alt="Instagram" id='ig'/><img src={Instagram2} alt="Instagram" id='ig2'/></button></a>
                            <a href="https://www.facebook.com/arthurdasilva.leal/"><button><img src={Facebook} alt="Facebook" id='fb'/><img src={Facebook2} alt="Facebook" id='fb2'/></button></a>
                            <a href="https://x.com/Art_2146Leal"><button><img src={Twitter} alt="twitter" id='tt'/><img src={Twitter2} alt="Twitter" id='tt2'/></button></a>
                        </Buttons>
                    </aside>
                </div>
            </Container>
        </Fix_center>
    )
}