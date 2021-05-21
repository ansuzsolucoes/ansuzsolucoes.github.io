import "../components/Theme"
import { BannerImg, Container, ContainerCentralizado, ContainerColunas, ContainerFull, DivColorida, Espacador, ImgRes, Texto, Titulo1, Titulo2, TextDivColorida, ContainerTexto } from "../components/Theme"
const publico = process.env.PUBLIC_URL
function Home() {
    return (
      <>
        <OQueFazemos/>
        <Sobre/>
        <ListaComImgGrande/>
        <Contato/>
      </>
    );
  }
  
  export default Home;


  export function OQueFazemos() {
    return (
          <ContainerFull>
            <Espacador/>
            <ContainerCentralizado>
              <Titulo1>O que fazemos?</Titulo1>
              <Texto>Criamos, configuramos e damos manutenção em seu site, <br/> aplicativo e loja online</Texto>
            </ContainerCentralizado>
            <Espacador/>
            <ContainerColunas>
              <ImgRes src={publico + "/img/produtoTeste.jpg"}/>
              <ImgRes src={publico + "/img/produtoTeste.jpg"}/>
              <ImgRes src={publico + "/img/produtoTeste.jpg"}/>
            </ContainerColunas>
            <Espacador height="18vh"/>
          </ContainerFull>
    );
  }


  export function Sobre(){
    return(
      <>
        <ContainerFull>
          <BannerImg src={publico+"/img/ansuzminimalista.png"}/>
          <ContainerColunas rowGap="0px" columnGap="0px" colunas="25vw auto">
            <DivColorida>
              <TextDivColorida>Sobre a Ansuz</TextDivColorida>
            </DivColorida>
            <ContainerTexto>
            <Texto>Somos uma empresa de desenvolvimento, que trazemos a solução para sua pessoa e empresa, com sites com tecnologia de ponta, trazendo sempre a melhor solução para seu negócio</Texto>
            </ContainerTexto>
          </ContainerColunas>
        </ContainerFull>
        <Espacador height="18vh"/>
      </>
    )
  }



  export function ListaComImgGrande() {
    return(
      <>
        <ContainerFull>
          <ContainerColunas columnGap="5vw" rowGap="0" colunas="auto auto">
            <div>
              <ImgRes src={publico + "/img/produtoTeste.jpg"}/>
            </div>
          <Container>
            <Titulo2 size="3vw">Novas Oportunidades</Titulo2>
            <Texto size="2.6vmin">
              Com um site bem feito o cliente te encontra mais fácil,<br/>
              sabe o que você oferece e sempre lembra de seu negócio
            </Texto>
            <Titulo2 size="3vw">O Futuro Já Chegou</Titulo2>
            <Texto size="2.6vmin">
              Vemos hoje que um negócio ocm um bom suporte online<br/>
              não sofre com a crise, use a tecnologia para ampliar seus<br/>
              horizontes e encontrar mais clientes
            </Texto>
            <Titulo2 size="3vw">Esteja em todo lugar</Titulo2>
            <Texto size="2.6vmin">
              Esteja na mão de todos, o Smartphone está na mão de <br/>
              praticamente todos os brasileiros, esteja lá também,<br/>
              mostrando os seus produtos e serviços
            </Texto>
          </Container>
          </ContainerColunas>
        </ContainerFull>
        <Espacador height="18vh"/>
      </>
    );
  }

  export function Contato(){
    return(
      <>
        <ContainerFull>
          <BannerImg src={publico+"/img/ansuzminimalista.png"}/>
          <Espacador/>
          <ContainerCentralizado>
          <ContainerColunas rowGap="auto" columnGap="25vw" colunas="auto auto">
            <ContainerCentralizado>
            <Texto>
              E-MAIL<br/>
              albertoalfredo.profissional@gmail.com
            </Texto>
            </ContainerCentralizado>
            <ContainerCentralizado>
            <Texto>
              TELEFONE<br/>
              (18)99614-5924
            </Texto>
            </ContainerCentralizado>
          </ContainerColunas>
          </ContainerCentralizado>
        </ContainerFull>
      </>
    )
  }