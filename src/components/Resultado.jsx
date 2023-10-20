import styled from "@emotion/styled"

        const Resultado1 = styled.div
        `
            color:#FFF;
            font-family: 'Lato', sans-sefif;
            display: flex;
            align-items: center;
            gap:1rem;
            margin-top:30px;



        `
            const Texto = styled.p
            `
                    font-size: 18px;
                        span{
                            font-weight:700;
                            }
                
            `
                const Precio = styled.p
                `
                    font-size: 24px;
                        span{
                            font-weight:700;
                            }
                `
                    const Imagen = styled.img
                    `
                        display: block;
                        width:120px;

                    `            

const Resultado = ({resultado}) => {
    const{PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = resultado
  return (
    <Resultado1>
            <Imagen 
            src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt="imagen"
            />
                <div>
                        <Precio>El Precio es de: <span>{PRICE}</span></Precio>
                        <Texto>Precio Mas Alto del Dia: <span>{HIGHDAY}</span></Texto>
                        <Texto>Precio Mas Bajo Del Dia: <span>{LOWDAY}</span></Texto>
                        <Texto>Variacion Ultimas 24 Horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                        <Texto>Ultima Actualizacion Del Dia: <span>{LASTUPDATE}</span></Texto>
                </div>

    </Resultado1>
  )
}

export default Resultado