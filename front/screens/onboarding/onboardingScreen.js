import React, { useRef, useState, useCallback } from "react";
import { SafeAreaView, View, BackHandler, StatusBar, Image, StyleSheet, Text } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import Swiper from 'react-native-swiper';
import { useFocusEffect } from "@react-navigation/native";

const OnboardingScreen = ({ navigation }) => {

    const backAction = () => {
        backClickCount == 1 ? BackHandler.exitApp() : _spring();
        return true;
    }

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
            return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
        }, [backAction])
    );

    function _spring() {
        updateState({ backClickCount: 1 });
        setTimeout(() => {
            updateState({ backClickCount: 0 })
        }, 1000)
    }

    const [state, setState] = useState({
        currentIndex: 0,
        backClickCount: 0
    });

    const updateState = (data) => setState((state) => ({ ...state, ...data }));

    const { currentIndex, backClickCount } = state;

    function onIndexChanged(index) {
        updateState({ currentIndex: index });
    }

    const swiperRef = useRef()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                <Swiper
                    ref={swiperRef}
                    onIndexChanged={onIndexChanged.bind(this)}
                    index={currentIndex}
                    loop={false}
                    showsButtons={false}
                    autoplay={true}
                    autoplayTimeout={3.5}
                    showsPagination={true}
                    paginationStyle={{ position: 'absolute', bottom: -16.0, }}
                    dot={<View style={styles.dotStyle} />}
                    activeDot={<View style={styles.activeDotStyle} />}
                >
                    {page1()}
                    {page2()}
                    {page3()}
                </Swiper>
                <View style={styles.skipNextAndLoginTextWrapStyle}>
                    {currentIndex != 2
                        ?
                        <Text
                            onPress={() => { navigation.push('LoginRegister') }}
                            style={{ ...Fonts.whiteColor14SemiBold }}
                        >
                            Skip
                        </Text>
                        :
                        <Text>
                        </Text>
                    }
                    {
                        currentIndex == 2
                            ?
                            <Text
                                onPress={() => { navigation.push('LoginRegister') }}
                                style={{ position: 'absolute', right: 0.0, bottom: 0.0, ...Fonts.whiteColor14SemiBold, }}
                            >
                                Login
                            </Text>
                            :
                            <Text
                                onPress={() => {
                                    if (currentIndex == 0) {
                                        swiperRef.current.scrollBy(1, true)
                                    }
                                    else if (currentIndex == 1) {
                                        swiperRef.current.scrollBy(1, true)
                                    }
                                }}
                                style={{ ...Fonts.whiteColor14SemiBold }}
                            >
                                Next
                            </Text>
                    }
                </View>
            </View>
            {
                backClickCount == 1
                    ?
                    <View style={[styles.animatedView]}>
                        <Text style={{ ...Fonts.whiteColor12Medium }}>
                            Press Back Once Again to Exit
                        </Text>
                    </View>
                    :
                    null
            }
        </SafeAreaView>
    )

    function page3() {
        return (
            <View style={styles.pageWrapStyle}>
                <Image
                    source={require('../../assets/images/yoga.png')}
                    style={{ height: 200, width: '100%' }}
                    resizeMode="contain"
                />
                <Text style={{ marginTop: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding - 5.0, ...Fonts.whiteColor20SemiBold }}>
                    YOGA
                </Text>
                <Text style={{ marginBottom: Sizes.fixPadding * 7.0, ...Fonts.whiteColor13Regular, textAlign: 'center', }}>
                    {`Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor.`}
                </Text>
            </View>
        )
    }

    function page2() {
        return (
            <View style={styles.pageWrapStyle}>
                <Image
                    source={require('../../assets/images/powerlifting.png')}
                    style={{ height: 200, width: '100%' }}
                    resizeMode="contain"
                />
                <Text style={{ marginTop: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding - 5.0, ...Fonts.whiteColor20SemiBold }}>
                    POWERLIFTING
                </Text>
                <Text style={{ marginBottom: Sizes.fixPadding * 7.0, ...Fonts.whiteColor13Regular, textAlign: 'center', }}>
                    {`Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor.`}
                </Text>
            </View>
        )
    }

    function page1() {
        return (
            <View style={styles.pageWrapStyle}>
                <Image
                    source={require('../../assets/images/fitness.png')}
                    style={{ height: 250, width: '100%' }}
                    resizeMode="contain"
                />
                <Text style={{ marginTop: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding - 5.0, ...Fonts.whiteColor20SemiBold }}>
                    FITNESS
                </Text>
                <Text style={{ marginBottom: Sizes.fixPadding * 7.0, ...Fonts.whiteColor13Regular, textAlign: 'center', }}>
                    {`Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor.`}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dotStyle: {
        borderRadius: 7.5,
        height: 15.0,
        width: 15.0,
        marginHorizontal: Sizes.fixPadding - 6.0,
        backgroundColor: Colors.lightGrayColor
    },
    activeDotStyle: {
        backgroundColor: Colors.whiteColor,
        borderRadius: 7.5,
        height: 15.0,
        width: 15.0,
        marginHorizontal: Sizes.fixPadding - 6.0,
    },
    pageWrapStyle: {
        flex: 1,
        marginHorizontal: Sizes.fixPadding * 2.0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    skipNextAndLoginTextWrapStyle: {
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    animatedView: {
        backgroundColor: "#333333",
        position: "absolute",
        bottom: 20,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default OnboardingScreen;