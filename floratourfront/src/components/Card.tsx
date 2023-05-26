import React, { useState } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import { ResizeMode, Video } from 'expo-av';
import { WebView } from 'react-native-webview';
import Style from "../style/style";
import Like from '../img/Like.png'
import Liked from '../img/Liked.png'
import Share from '../img/Share.png'
import Shared from '../img/Shared.png'
import Video1 from '../img/Video1.mp4'
import VideoPlayer from "react-native-video-controls"


const Card = ({ 
    type= '',
    title= '',
    img = 0,
    likes= 0,
    share= 0
}) => {

    const [isLiked,setIsLiked] = useState(false)
    const [isShared,setIsShared] = useState(false)
    const [widthCard,setWidthCard] = useState(0)
    const [widthImage,setWidthImage] = useState(0)
    const [heigthImage,setheigthImage] = useState(0)
    const [widthImage2,setWidthImage2] = useState(0)
    const video = React.useRef(null);
    const getLikeImage = isLiked ? Liked : Like
    const getShareImage = isShared ? Shared : Share
    console.log('the imgi',img)

    const handleLayoutCard = (event: { nativeEvent: { layout: { width: any; height: any; }; }; }) => {
        const { width, height } = event.nativeEvent.layout;
        setWidthCard(width);
        console.log('Ancho:', width);
        console.log('Alto:', height);
      };

      const handleLayoutImg = (event: { nativeEvent: { layout: { width: any; height: any; }; }; }) => {
        const { width, height } = event.nativeEvent.layout;
        setWidthImage(width);
        console.log('Ancho:', width);
        console.log('Alto:', height);
      };


      const handleLayoutImgH = (event: { nativeEvent: { layout: { width: any; height: any; }; }; }) => {
        const { width, height } = event.nativeEvent.layout;
        setheigthImage(height);
        setWidthImage2(width)
        console.log('Ancho:', width);
        console.log('Alto-imagen:', heigthImage);
      };

    const getImgOVid = () => {
        if (type === 'Trends') return (<View style={{ width: widthCard - 20, marginLeft: 10 , height : 500 , backgroundColor: '#fff'}} onLayout={handleLayoutImg}>
            <Video
                ref={video}
                isLooping
                source={img}
                shouldPlay
                useNativeControls
                resizeMode={ResizeMode.COVER}
                style={{width : widthCard - 20, height: 500}}
                onLayout={handleLayoutImgH}
            />
        </View>);
        

        return (<View style={{ width: widthCard - 20, marginLeft: 10, maxHeight : 500, backgroundColor: '#fff' }} onLayout={handleLayoutImg}>
            <Image source={img} style={{ maxWidth : widthImage, maxHeight : 500}} resizeMode='cover' onLayout={handleLayoutImgH}/>
        </View>);
    } 

    return (
        <View style={Style.card} onLayout={handleLayoutCard}>
            <Text style={Style.cardType}>#{type}{'>'}</Text>
            <Text style={Style.cardTitle}>{title}</Text>
            {getImgOVid()}
            <View style={[Style.cardOptions, { width : widthCard - 20}]} >
                <View style={Style.cardOption}>
                    <TouchableHighlight style={Style.cardOptionButton} onPress={() => setIsLiked(!isLiked)}>
                        <Image style={Style.cardOptionImage} source={getLikeImage} resizeMode='cover'/>
                    </TouchableHighlight>
                    <Text style={Style.cardOptionValue}>{likes}</Text>
                </View>
                <View style={Style.cardOption}>
                    <TouchableHighlight style={Style.cardOptionButton} onPress={() => setIsShared(!isShared)}>
                        <Image style={Style.cardOptionImage} source={getShareImage}/>
                    </TouchableHighlight>
                    <Text style={Style.cardOptionValue}>{share}</Text>
                </View>
            </View>
        </View>
    )
}

export default Card;