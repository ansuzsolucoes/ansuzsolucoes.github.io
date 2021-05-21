import "../components/Theme"
import { ContainerCentralizado, ContainerColunas, ContainerFull, Espacador, ImgRes, Texto, Titulo1 } from "../components/Theme"
const publico = process.env.PUBLIC_URL
function Home() {
    return (
      <>
        <OQueFazemos/>
      </>
    );
  }
  
  export default Home;


  export function OQueFazemos() {
    return (
          <ContainerFull>
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
            <Espacador/>
          </ContainerFull>
    );
  }