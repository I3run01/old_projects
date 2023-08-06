import {MediasBTNstyle} from './style'

export const Medias_btn = () => {

    return (
        <MediasBTNstyle>
            <a id='mainBTN'>
                <img src="Medias_btn/phoneIcon.svg" alt="" className='icons' />
                <div className='txt'> Contato <br />Redes sociais</div>
            </a>
            <a className='mediasBTN' >
                <img src="Medias_btn/phoneIcon.svg" alt="" className='icons' />
                <div className='txt'> Telefone fixo <br />(41)3030-6675</div>
            </a>
            <a className='mediasBTN' href='https://wa.me/5541998770153' target='_blank'>
                <img src="Medias_btn/WhatsApp.svg" alt="" className='icons' />
                <div className='txt'> WhatsApp <br />(41)99877-0153</div>
            </a>
            <a className='mediasBTN' href='https://www.google.com/maps/place/Mercado+Vizinhan%C3%A7a/@-25.3588976,-49.2343484,17z/data=!3m1!4b1!4m6!3m5!1s0x94dce64d354d4d3d:0x89e80a131d43fc85!8m2!3d-25.3588976!4d-49.2321597!16s%2Fg%2F11fy534_xd?authuser=0' target='_blank'>
                <img src="Medias_btn/googleIcon.svg" alt="" className='icons' />
                <div className='txt'>Avaliação<br />Google</div>
            </a>
            <a className='mediasBTN' href='https://www.facebook.com/search/top?q=mercado%20vizinhan%C3%A7a' target='_blank'>
                <img src="Medias_btn/facebookIcon.svg" alt="" className='icons' />
                <div className='txt'>facebook</div>
            </a>
        </MediasBTNstyle>
    )
}