import { Container, Container_each, Ling_HTMLCSS } from './style'
import HTML5 from '../../Svg/html-5-logo.svg'
import CSS3 from '../../Svg/css-3-logo.svg'

export default function Language(){
    return(
        <Container>
            <Container_each>
                <Ling_HTMLCSS>
                    <div>
                        <img src={HTML5} alt="html" />
                        &
                        <img src={CSS3} alt="css" />
                    </div>
                    <p>Meu primeiro contato com programação foi em HTML em uma aula no SENAI.
                    </p>
                </Ling_HTMLCSS>
            </Container_each>
        </Container>
    )
}