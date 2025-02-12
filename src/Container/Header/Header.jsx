import { About, Itens, Container } from './style'

function Header(){
    return(
    <Container>
        <About>Sobre mim</About>
        <Itens>
          <li><a href="#">Historia</a><hr /></li>
          <li><a href="#">Trajetória</a><hr /></li>
          <li><a href="#">Projetos</a><hr /></li>
        </Itens>
    </Container>
    )
}

export default Header