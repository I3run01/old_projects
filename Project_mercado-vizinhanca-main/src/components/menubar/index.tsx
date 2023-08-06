import { MenubarStytle } from './style'
import { Link } from 'react-scroll'

export const Menubar = () => {

    return (
        <MenubarStytle>
                <Link to="inicio" spy={true} smooth={true} offset={-20} duration={500}>Início</Link>
                <Link to="Panificadora" spy={true} smooth={true} offset={-20} duration={500}>Panificadora</Link>
                <Link to="Açougue" spy={true} smooth={true} offset={-20} duration={500}>Açougue</Link>
                <Link to="Mercado" spy={true} smooth={true} offset={-20} duration={500}>Mercado</Link>
                <Link to="Hortifruti" spy={true} smooth={true} offset={-20} duration={500}>Hortifruti</Link>
        </MenubarStytle>
    )
}