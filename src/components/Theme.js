import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components/'

export const theme = createMuiTheme({
    palette: {
        primary: {
            // light: será calculada com base em palette.primary.main,
            main: '#00139f !important',
            // dark: será calculada com base em palette.primary.main,
            // contrastText: será calculada para contrastar com palette.primary.main
        },
        secondary: {
            // light: será calculada com base palette.secondary.main,
            main: '#6515D1 !important',
            // dark: será calculada com base palette.secondary.main,
            //contrastText: será calculada para contrastar com palette.secondary.main,
        },
        dark: {
            // light: será calculada com base em palette.primary.main,
            main: '#251638 !important',
            // dark: será calculada com base em palette.primary.main,
            // contrastText: será calculada para contrastar com palette.primary.main
        },
        // Usado por `getContrastText()` para maximizar o contraste entre
        // o plano de fundo e o texto.
        contrastThreshold: 3,
        // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
        // dois índices dentro de sua paleta tonal.
        // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
        tonalOffset: 0.2,
    },
    text: {
        primary: "rgba(0, 0, 0, 0.87) !important",
    }
});
export const useStyles = makeStyles((theme) => ({
    button: {
        color: theme.palette.primary.main,
    }
}));

export const Cabeca = styled.header`
    min-height: 15rem;
    background-color:  ${theme.palette.dark.light};
    margin: 0px;
    padding: 0px;
`

export const HeaderButton = styled(Button)`

`
export const AppHeader = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`
export const Banner = styled.div `
    display: inline-flex;
    width: 100% !important;
    margin: 0px;
    padding: 0px;
`

export const BannerImg = styled.img `
    width: 100%;
    padding: 0px;
    background-color: ${theme.palette.primary.light};
`

export const BannerText = styled.h1 `
    margin-top: 3rem;
    font-size: 5.9vw;
    font-weight: 500;
    color:tomato;
    font-family: Cinzel , serif;
    margin-left: 2rem;
`

export const NavbarListContainer = styled.nav `
    display: inline-flex;
`

export const NavbarList = styled.li `
    margin-top: 0px;
    padding: 2px;
`
export const Container = styled.div`
    padding: 0 10% 0 10%;    
`
export const ContainerFull = styled.div`
    padding: 0 0 0 0;
`
export const ContainerCentralizado = styled.div`
    text-align: center;
    align-items: center;
    align-content: center;
`
export const ContainerColunas = styled.div`
    display: inline-grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 7vw;
`

export const ImgRes = styled.img`
    max-width: 100%;
    height: auto;
`

export const Espacador = styled.hr`
    height: 3vh;
    border: none;
`

export const Titulo1 = styled.h1`
    color: ${theme.palette.primary.main};
    font-size: 5.9vw;
`

export const Texto = styled.p `
    color: ${theme.text.primary};
    font-size: 4vmin;
`

export const Endereco = styled(Link)`

`