import { About, Itens, Container } from './style'

function Header(){
    return(
    <Container>
        <About>Sobre mim</About>
        <Itens>
          <li><a href="#">Linguagens</a><hr /></li>
          <li><a href="#">Projetos</a><hr /></li>
          <li><a href="#">Minha historia</a><hr /></li>
        </Itens>
    </Container>
    )
}

export default Header