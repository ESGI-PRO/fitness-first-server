import React from 'react';
import { SafeAreaView, View, StatusBar, Dimensions, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import { Colors, Fonts, Sizes } from '../../constants/styles';
import { MaterialIcons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

const { width, height } = Dimensions.get('window');

const StartExerciseScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                {indicators()}
                <View style={{ flex: 1 }}>
                    {exerciseImage()}
                    {exerciseAndProgressDetail()}
                </View>
            </View>
        </SafeAreaView>
    )

    function exerciseAndProgressDetail() {

        const progressPercentage = 30;

        const progressData = [
            {
                value: 100 - progressPercentage,
                color: Colors.lightGrayColor,
            },
            {
                value: progressPercentage,
                color: Colors.primaryColor,
            },
        ];

        return (
            <View style={styles.exerciseAndProgressDetailWrapStyle}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Progress.Circle
                        size={105}
                        indeterminate={false}
                        progress={0.3}
                        borderWidth={0}
                        unfilledColor={Colors.lightGrayColor}
                        color={Colors.primaryColor}
                        thickness={9}
                        allowFontScaling={false}
                    />
                    <View style={{ position: 'absolute', }}>
                        <Text style={{ ...Fonts.primaryColor22Bold }}>
                            00:22
                        </Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginVertical: Sizes.fixPadding + 2.0, }}>
                    <Text style={{ textAlign: 'center', ...Fonts.blackColor14Medium }}>
                        Barbell Bench Press
                    </Text>
                    <Text style={{ ...Fonts.grayColor13Regular }}>
                        Next: Barbell Back Squat
                    </Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.push('TakeRest')}
                    style={styles.playArrowIconWrapStyle}
                >
                    <MaterialIcons
                        name='play-arrow'
                        color={Colors.whiteColor}
                        size={26}
                    />
                </TouchableOpacity>
                <MaterialIcons
                    name='arrow-forward'
                    color={Colors.blackColor}
                    size={24}
                    style={{ position: 'absolute', right: 20.0, bottom: 5.0, }}
                    onPress={() => navigation.push('TakeRest')}
                />
            </View>
        )
    }

    function exerciseImage() {
        return (
            <View style={{ marginTop: Sizes.fixPadding * 3.0, }}>
                <Image
                    source={require('../../assets/images/workout/workout4.png')}
                    style={styles.exerciseImageStyle}
                />
            </View>
        )
    }

    function indicators() {
        return (
            <View style={{
                marginHorizontal: Sizes.fixPadding * 2.0,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                {
                    [...Array(9)].map((e, i) =>
                        <View
                            key={i}
                            style={styles.indicatorStyle}
                        >
                            {i == 0
                                ?
                                <View style={styles.processCompletedIndicatorStyle} />
                                :
                                null
                            }
                        </View>
                    )
                }
            </View>
        )
    }

    function header() {
        return (
            <View style={{ padding: Sizes.fixPadding * 2.0, }}>
                <MaterialIcons
                    name='arrow-back-ios'
                    color={Colors.blackColor}
                    size={22}
                    onPress={() => navigation.pop()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    indicatorStyle: {
        height: 5.0,
        borderRadius: Sizes.fixPadding,
        backgroundColor: '#DBDBDB',
        marginRight: Sizes.fixPadding - 5.0,
        width: (width / 11.5),
    },
    processCompletedIndicatorStyle: {
        backgroundColor: Colors.primaryColor,
        height: 5.0,
        borderTopLeftRadius: Sizes.fixPadding,
        borderBottomLeftRadius: Sizes.fixPadding,
        width: width / 15.0
    },
    exerciseAndProgressDetailWrapStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: Sizes.fixPadding * 2.5,
    },
    playArrowIconWrapStyle: {
        width: 40.0,
        height: 40.0,
        borderRadius: 20.0,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    exerciseImageStyle: {
        height: height / 3.0,
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
    }
})

export default StartExerciseScreen;


