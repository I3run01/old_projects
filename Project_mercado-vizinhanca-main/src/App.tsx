import {Menubar} from './components/menubar'
import {GlobalStyle} from './Global'
import {Cape} from './components/Cape'
import {Sectors} from './components/Sectors'
import {Medias_btn} from './components/Medias_btn'
import {Footer} from './components/footer'

function App() {

  return (
    <GlobalStyle>
      <Menubar/>
      <Cape/>
      <Sectors
        title='Panificadora'
        bgImage='Panificadora/PanificadoraBG.png'
        text='Deliciosos pães e doces frescos todos os dias! Visite a panificadora do Mercado Vizinhança e experimente nossas delícias recém-saídas do forno. Não perca a chance de se deliciar com a qualidade e sabor incomparáveis dos nossos produtos.'
        gallary={
          [
            'Panificadora/Gallery/img1.jpg',
            'Panificadora/Gallery/img2.jpg',
            'Panificadora/Gallery/img3.jpg',
            'Panificadora/Gallery/img4.jpg',
            'Panificadora/Gallery/img6.jpg',
          ]
        }
      />
      <Sectors
        title='Açougue'
        bgImage='Açougue/AçougueBK.png'
        text='Carne fresca e selecionada diariamente, variedade de cortes e preços competitivos. Visite o açougue do Mercado Vizinhança e surpreenda-se com a qualidade e sabor da nossa carne.'
        gallary={
          [
            'Açougue/Gallery/image1.png',
            'Açougue/Gallery/image2.png',
            'Açougue/Gallery/image3.png',
            'Açougue/Gallery/image4.png',
            'Açougue/Gallery/image6.png',
          ]
        }
      />
      <Sectors
        title='Mercado'
        bgImage='Mercado/bgMercado.png'
        text='Certamente! O Mercado Vizinhança também oferece uma seleção cuidadosamente selecionada de produtos industrializados, como alimentos enlatados, massas, cereais, óleos e molhos, entre outros. Embora valorizemos nossos produtos frescos e artesanais, sabemos que esses itens industrializados são convenientes e essenciais para muitos de nossos clientes.'
        gallary={
          [
            'Mercado/gallery/img1.jpg',
            'Mercado/gallery/img2.jpg',
            'Mercado/gallery/img3.jpg',
            'Mercado/gallery/img4.jpg',
            'Mercado/gallery/img5.jpg',
            'Mercado/gallery/img6.jpg',
          ]
        }
      />
      <Sectors
        title='Hortifruti'
        bgImage='Hortifruti/hortifrutiBG.png'
        text='A seção de hortifruti do Mercado Vizinhança é um verdadeiro deleite para os amantes de frutas, legumes e verduras frescas. Com uma ampla variedade de produtos cuidadosamente selecionados e inspecionados para garantir a qualidade, os clientes podem encontrar desde frutas exóticas até ervas frescas. Com funcionários prestativos e experientes, a seção de hortifruti do Mercado Vizinhança é o local ideal para comprar produtos frescos e de alta qualidade para a sua cozinha.'
        gallary={
          [
            'Hortifruti/gallery/img1.jpg',
            'Hortifruti/gallery/img2.jpg',
            'Hortifruti/gallery/img4.jpg',
            'Hortifruti/gallery/img5.jpg',
          ]
        }
      />
      <Medias_btn/>
      <Footer/>
    </GlobalStyle>
  )
}

export default App
