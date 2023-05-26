import Constants from "expo-constants";
import { StyleSheet, Dimensions } from "react-native";

const Style = StyleSheet.create({
    main : {
        marginTop: Constants.statusBarHeight,
    },
    landing : {
        backgroundColor : '#24343C',
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContent : {
        marginTop : 40,
        justifyContent : "center",
        alignItems : "center",
    },
    input : {
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 10,
        height : 40,
        marginBottom : 2,
        width : 280,
        textAlign : "center",
        fontSize : 24,
        color : '#FFFFFF'
    },
    error : {
        color: '#FF0000',
        marginBottom: 30,
        width: 280,
        textAlign: "left"
    }
})

export default Style;