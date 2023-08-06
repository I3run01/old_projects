import { CapeStyled } from './style'

export const Cape = () => {

    return (
        <CapeStyled id='inicio'>
            <div id='logo'>
                <img src="Cape images/Store symbol.png" alt="" id='storeSymbol'/>
                <h1 id='title'>Mercado <br/> Vizinhança</h1>
            </div>
            <p id='paragraph'>
                Bem-vindo ao Mercado Vizinhança! Oferecemos uma variedade de produtos de alta qualidade, incluindo carne fresca, pão e frutas e verduras locais. Além disso, temos itens de higiene pessoal e produtos de limpeza. Visite-nos ou navegue pelo nosso site para saber mais!
            </p>

            <img src='Cape images/products.png' alt="" id='productsIMG'/>
        </CapeStyled>
    )
}