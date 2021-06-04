import "../components/Theme"
import { BannerImg, Container, ContainerCentralizado, ContainerColunas, ContainerFull, DivColorida, Espacador, ImgRes, Texto, Titulo1, Titulo2, TextDivColorida, ContainerTexto, Img23vw, Endereco } from "../components/Theme"
const publico = process.env.PUBLIC_URL
function Home() {
    return (
      <>
        <OQueFazemos/>
        <TrabalhosEParceiros/>
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
              <ImgRes src={publico + "/img/01.png"}/>
              <ImgRes src={publico + "/img/02.png"}/>
              <ImgRes src={publico + "/img/03.png"}/>
            </ContainerColunas>
            <Espacador height="18vh"/>
          </ContainerFull>
    );
  }

  export function TrabalhosEParceiros() {
    return (
      <>
         <ContainerFull>
            <Espacador/>
            <BannerImg src={publico+"/img/clientes_e_parceiros.png"}/>
            <Espacador/>
            <Container>
            <ContainerColunas>
              
            <Endereco href="https://serradocipoprs.com.br" target="_blank"  rel="noopener noreferrer" >
              <Img23vw src={publico + "/img/pt_brprintpanfletos.png"}/>
              </Endereco>
              <Endereco href="http://profissaotransformacao.com/" target="_blank"  rel="noopener noreferrer" >
              <Img23vw src={publico + "/img/pftr.png"}/>
              </Endereco>
              {/* 
              <Img23vw src={publico + "/img/03.png"}/> 
              */}
              
            </ContainerColunas>
            </Container>
            <Espacador height="18vh"/>
          </ContainerFull>
      </>
    );
  }
  
  


  export function Sobre(){
    return(
      <>
        <ContainerFull>
          <BannerImg src={publico+"/img/About.png"}/>
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
          <ContainerColunas columnGap="5vw" columnGap="0" colunas="58vw auto">
              <ImgRes width="100%" src={publico + "/img/Listed.png"}/>
          <Container>
            <Titulo2 size="2.7vw">Novas Oportunidades</Titulo2>
            <Texto size="1.6vw">
              Com um site bem feito o cliente te encontra mais fácil,<br/>
              sabe o que você oferece e sempre lembra de seu negócio
            </Texto>
            <Titulo2 size="2.7vw">O Futuro Já Chegou</Titulo2>
            <Texto size="1.6vw">
              Vemos hoje que um negócio ocm um bom suporte online<br/>
              não sofre com a crise, use a tecnologia para ampliar seus<br/>
              horizontes e encontrar mais clientes
            </Texto>
            <Titulo2 size="2.7vw">Esteja em todo lugar</Titulo2>
            <Texto size="1.6vw">
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
          <BannerImg src={publico+"/img/Contact.png"}/>
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
        <Espacador height="15vh"/>
      </>
    )
  }