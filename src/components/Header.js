import {BannerImg, NavbarListContainer, HeaderButton} from "./Theme"


const publico = process.env.PUBLIC_URL

export function Header() {
    return (
        <>
        <BannerImg src={publico + '/img/ansuzminimalista.png'}/>
        <NavbarListContainer>
        <HeaderButton>Teste</HeaderButton>
        </NavbarListContainer>
        </>
    );
}
