import styled from "styled-components";

const fontColor = 'black'

export const CapeStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');

    min-height: 100vh;
    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding-top: 80px;

    background-image: url('Cape images/elipse bg.png');
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;

    #logo {
        display: flex;
        align-items: center;
        flex-direction: column;

        #storeSymbol {
            z-index: +1;
            width: 220px;
        }
        
        #title {
            z-index: +1;
            font-size: 36px;
            font-family: 'Dosis';
            color: ${fontColor};
            margin-left: 40px;
            text-align: center;
        }
    }
    
    #paragraph {
        z-index: +1;
        max-width: 500px;
        font-size: 16px;
        font-family: 'Dosis';
        font-weight: bold;
        color: ${fontColor};

        margin-right: 20px;
        padding-left: 30px;
    }

    #productsIMG {
        z-index: +1;
        width: 100%;
        scale: 110%;
    }

    @media screen and (min-width: 600px) {
        align-items: flex-start;

       #logo {
            flex-direction: row;
            justify-content: start;

            #title {
                 text-align: start;
            }
         }
       }
    `