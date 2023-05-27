import React, { useEffect } from "react";
import { View } from "react-native";
import * as Font from "expo-font";
import { Colors } from "../constants/styles";

const LoadingScreen = ({ navigation }) => {

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                Montserrat_Light: require("../assets/fonts/Montserrat-Light.ttf"),
                Montserrat_Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
                Montserrat_Medium: require("../assets/fonts/Montserrat-Medium.ttf"),
                Montserrat_SemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
                Montserrat_Bold: require("../assets/fonts/Montserrat-Bold.ttf"),
                Montserrat_ExtraBold: require("../assets/fonts/Montserrat-ExtraBold.ttf"),
            });
            navigation.navigate('Splash');
        }
        loadFont();
    })

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }} />
    )
}

export default LoadingScreen;