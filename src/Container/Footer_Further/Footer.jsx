import { Container, Tranjetoria, General_text } from "../Footer_Further/style";
import { Linguagem } from "../Footer_Further/style";

export default function Footer(){
    return(
        <Container>
            <Tranjetoria>
                <General_text>
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
                </General_text>
                <div>
                    <img alt="Menino jogando online" src="https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2022/10/25105349/GettyImages-1097026358.jpg" />
                    <p>imagem meramente ilustrativa</p>
                </div>
            </Tranjetoria>
            <Linguagem>
                <General_text>
                    <h1>Primeiro contato com TI</h1>
                    <hr />
                    <p>Em 2022, entrei no curso de Redes de Computadores no SENAI Santos.
                    Foi o meu primeiro curso com ênfase em TI, mas eu tinha alguma
                    ideia do que veria ali, ja que tinha um certo conhecimento com protocolos
                    de redes por criar ambientes virtuais para jogar Minecraft em LAN com os
                    amigos.
                    </p>
                    <p>O curso durou 1 ano e 6 meses apenas, mas foi maravilhoso do começo
                    ao o fim, desde aprender os protocolos mais básicos como IPv4
                    até montar uma rede física de 8 hosts e 2 servidores em um 
                    ambiente controlado. Conheci pessoas incríveis e fiz ótimas
                    amizades que, pelo menos algumas, perduram até hoje.
                    </p>
                </General_text>
            </Linguagem>
        </Container>
    )
}