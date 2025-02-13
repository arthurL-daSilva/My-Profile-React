import { Container, Container_Each, General_text, GPU_img, General_img, Discord_img, CS_img, Fort_img, TwoGames } from "./style";
import Redes from "../../Images/3R-T39.jpeg"
import GPU from "../../Images/Rx580.png"
import CPU from "../../Images/R7.png"
import Old_Times from "../../Images/Discord.png"
import CS from "../../Images/CS2.jpeg"
import Fort from "../../Images/Fort.jpeg"

export default function Footer(){
    return(
        <Container>
            <Container_Each>
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
                    <General_img alt="Menino jogando online" src="https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2022/10/25105349/GettyImages-1097026358.jpg" />
                    <p>imagem meramente ilustrativa(não sou eu e muito menos meu setup na epoca 😭)</p>
                </div>
            </Container_Each>
            <Container_Each>
                <General_text>
                    <p>Em 2018, após ver o estado deplorável do meu antigo computador em 2016-2017, meu
                    pai me presenteou com um novo computador, muito mais potente que o anterior e 
                    sendo capaz de rodar todos os jogos que eu queria na época, foi literalmente um sonho
                    realizado. Em 2019, fiz um curso profisionalizante do CAMP e no final desse ano comecei
                    meu primeiro emprego, assim comecei a planejar alguns upgrades para meu PC.
                    </p>
                    <p>Primeiro comecei com mais armazenamento, depois mais RAM, uma Placa de vídeo
                    mais intermediaria (na época, comprei uma RX 580 8GB no precinho, R$800, antes da pandemia)
                    e por fim, troquei de placa mãe e processador, uma B450 e um Ryzen 7 2700.
                    </p>
                </General_text>
                <div>
                    <GPU_img src={GPU} alt="Placa de video" />
                    <GPU_img src={CPU} alt="Processador" />
                </div>
            </Container_Each>
            <Container_Each>
                <div>
                    <General_img src={Redes} alt="Turma de redes" />
                    <p>Minha turma de Redes de 2022</p>
                </div>
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
            </Container_Each>
            <Container_Each>
                <General_text>
                    <p>No começo de 2023, ainda com o curso de Redes em andamento, iniciei um
                    técnologo em Análise e Desenvolvimento de Sistemas na FATEC, conhecendo novas pessoas,
                    tecologias, metodologias e fazendo novas amizades também, sendo facilmente um dos
                    melhores anos da minha vida.
                    </p>
                    <p>Tirando a vida acadêmica, fizemos muitas jogatinas da madrugada, que era o que 
                    eu mais adorava, juntar a rapaziada no discord e "varar" a noite jogando e dando altas
                    risadas as 3 da manhã com um medo da porr# dos meus pais acordarem (quem nunca?).
                    </p>
                </General_text>
            </Container_Each>
            <Discord_img src={Old_Times} alt="Gameplay no discord"/>
            <TwoGames>
                <CS_img src={CS} alt="Counter-Strike" />
                <Fort_img src={Fort} alt="Fortnite" />
            </TwoGames>
            <Container_Each>
                <General_text>
                    <p>Essa foi a minha trajetória ao longo dos ultimos 3 anos, mas e quanto as
                    linguagens?
                    </p>
                </General_text>
            </Container_Each>
        </Container>
    )
}