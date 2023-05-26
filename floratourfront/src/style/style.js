import Constants from "expo-constants";
import { StyleSheet, Dimensions } from "react-native";

const Style = StyleSheet.create({

    main : {
        marginTop: Constants.statusBarHeight,
    },
    homePage : {
        backgroundColor : '#1E1E1E',
        height: Dimensions.get('window').height,
        alignItems: "center",
        justifyContent : "center",
        paddingBottom: Dimensions.get('screen').height - Dimensions.get('window').height,
        position : "relative"
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
    },
    searchBar : {
        width: (Dimensions.get('window').width - 120),
        height: 50,
        borderRadius: 100,
        borderWidth: 1,
        borderColor : '#ADFF2F',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
        marginTop: 20,
        marginLeft: 60,
        marginRight: 60
    },
    buscadorIcon : {
        width: 20,
        height: 20
    },
    searchInput : {
        borderWidth: 0,
        width : 100,
        textAlign : "left",
        fontSize : 24,
        color : '#ADFF2F'
    },
    filters : {
        flexDirection : "row",
        gap : 20,
        justifyContent: "center",
        alignItems: 'center'
    },
    filter : {
        backgroundColor : '#ADFF2F',
        padding: 10,
        borderRadius: 10,
        marginTop: 15,
        borderWidth: 1,
        borderColor : '#1E1E1E'
    },
    filterActive : {
        backgroundColor : '#1E1E1E',
        padding: 10,
        borderRadius: 10,
        marginTop: 15,
        borderWidth: 1,
        borderColor : '#ADFF2F'
    },
    filterText : {
        color : '#1E1E1E'
    },
    filterActiveText : {
        color : '#ADFF2F'
    },
    cards : {
        flexDirection: "column",
        gap: 30,
        marginTop: 30,
        alignItems: "center"
    },
    card : {
        backgroundColor : '#24343C',
        width : Dimensions.get('window').width -36,
        marginTop: 0,
        borderRadius: 20
    },
    cardType : {
        padding : 5,
        color: '#ADFF2F',
        backgroundColor: '#1E1E1E',
        borderRadius : 20,
        width : 90,
        textAlign: "center",
        margin: 10,
        fontSize: 16
    },
    cardTitle : {
        color : '#fff',
        fontSize: 20,
        marginLeft: 10,
        marginBottom: 10
    },
    cardOptions : {
        flexDirection: "row",
        gap: 30,
        margin: 10
    },
    cardOption : {
        flexDirection: "row",
        gap: 5,
        alignItems: "center"
    },
    cardOptionButton : {
        width : 30,
        height : 30
    },
    cardOptionImage : {
        width: 30,
        height: 30
    }

})

export default Style;