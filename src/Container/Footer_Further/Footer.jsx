import { Container, Trajetoria } from "../Footer_Further/style";


export default function Footer(){
    return(
        <Container>
            <Trajetoria>
                <h1>Minha História</h1>
                <hr />
                <p>Aos 8 anos de idade tive meu primeiro contato com um conputador que era da minha tia 
                na época (na qual vive até hoje). Aos 10 anos, ganhei meu primeiro computador e o usei para
                jogar online (lol, crossfire, etc) durante anos, levando ele na assistencia técnica diversas vezes, 
                responsável pela rápida degradação da máquina.
                </p>
                <p>Sendo assim, comecei a me interessar por peças de 
                computadores (hardware) para no futuro montar meu próprio computador, melhor e mais potente,
                que rodasse qualquer jogo da atualidade (ou que não travasse mais tanto, já que o velho tinha 2
                GB de RAM '--' em 2016) e assim nasceu meu interesse pela área de TI.
                </p>
            </Trajetoria>
            <img alt="Menino jogando online" src="https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2022/10/25105349/GettyImages-1097026358.jpg" />
        </Container>
    )
}