import React from "react";
import { View } from "react-native";
import Style from "../style/style";
import Card from "./Card";
import Flowers1 from '../img/Flowers1.jpg'
import Video1 from '../img/Video1.mp4'
import Flowers2 from '../img/Flowers2.jpg'
import Video2 from '../img/Video2.mp4'

interface cardsInterface {
    type : string,
    tilte : string,
    img : number,
    likes : number,
    share : number
}

const cardsInfo : Array<cardsInterface> = [
    {
        type : 'Care',
        tilte: 'Show my news plants',
        img: Flowers1,
        likes : 2000,
        share : 100
    },
    {
        type : 'Trends',
        tilte: 'Show this',
        img: Video1,
        likes : 6000,
        share : 1100
    },    
    {
        type : 'Landscaping',
        tilte: 'I don´t belive this',
        img: Flowers2,
        likes : 4000,
        share : 500
    },    
    {
        type : 'Trends',
        tilte: 'Does this',
        img: Video2,
        likes : 7000,
        share : 2000
    },
]

const Cards = () => {

    const getCards = () => {
        return cardsInfo.map((card, index) => {
            return (
                <Card 
                    key={index}
                    type={card.type}
                    title={card.tilte}
                    img={card.img}
                    likes={card.likes}
                    share={card.share}
                />
            )
        })
    }
    return (
        <View style={Style.cards}>
            {getCards()}
        </View>
    )
}

export default Cards;