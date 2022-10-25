import React from 'react';
import {TituloCardPequeno, LayoutCardPequeno, InfosCardPequeno, ImgCardPequeno} from "./styles"

function CardPequeno(props) {
        <LayoutCardPequeno>
            <ImgCardPequeno src={props.imagem} />
            <InfosCardPequeno>
                <TituloCardPequeno>{props.nome}</TituloCardPequeno>
                <p>{props.descricao}</p>
            </InfosCardPequeno>
        </LayoutCardPequeno>
}

export default CardPequeno