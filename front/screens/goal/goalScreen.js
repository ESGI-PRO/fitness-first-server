import React from "react";
import { SafeAreaView, View, StatusBar, StyleSheet, Image, Text } from "react-native";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';

const GoalScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                {currentAndTargetGoalInfo()}
                {dailyGoalInfo()}
            </View>
        </SafeAreaView>
    )

    function dailyGoalInfo() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor16SemiBold }}>
                    Daily Goal
                </Text>
                <View style={{ marginTop: Sizes.fixPadding * 2.0, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{
                        ...styles.dailyCaloriesAndStepsWrapStyle,
                        marginRight: Sizes.fixPadding * 2.0,
                    }}>
                        <Image
                            source={require('../../assets/images/icons/calories.png')}
                            style={styles.dailyCaloriesAndStepsImageStyle}
                        />
                        <Text style={{ ...Fonts.blackColor16SemiBold }}>
                            2,589
                        </Text>
                        <Text style={{ ...Fonts.grayColor13Regular }}>
                            Calories
                        </Text>
                    </View>
                    <View style={styles.dailyCaloriesAndStepsWrapStyle}>
                        <Image
                            source={require('../../assets/images/icons/steps.png')}
                            style={styles.dailyCaloriesAndStepsImageStyle}
                        />
                        <Text style={{ ...Fonts.blackColor16SemiBold }}>
                            3,589
                        </Text>
                        <Text style={{ ...Fonts.grayColor13Regular }}>
                            Steps
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    function currentAndTargetGoalInfo() {
        return (
            <View style={styles.currentAndTargetGoalInfoWrapStyle}>
                <Text style={{ ...Fonts.blackColor16Medium }}>
                    Lose Weight
                </Text>
                <View style={{ marginTop: Sizes.fixPadding, flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Text style={{ ...Fonts.blackColor14Medium }}>
                            56 kg
                        </Text>
                        <Text style={{ ...Fonts.grayColor13Regular }}>
                            Current
                        </Text>
                    </View>
                    <View style={{ marginLeft: Sizes.fixPadding * 3.0, }}>
                        <Text style={{ ...Fonts.blackColor14Medium }}>
                            50 kg
                        </Text>
                        <Text style={{ ...Fonts.grayColor13Regular }}>
                            Target
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons
                    name="arrow-back-ios"
                    size={22}
                    color={Colors.blackColor}
                    onPress={() => navigation.pop()}
                />
                <Text style={{ marginLeft: Sizes.fixPadding + 5.0, ...Fonts.blackColor18SemiBold }}>
                    Goal
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: Sizes.fixPadding * 2.0,
    },
    currentAndTargetGoalInfoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        borderRadius: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        padding: Sizes.fixPadding,
    },
    dailyCaloriesAndStepsWrapStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding,
        elevation: 3.0,
        paddingHorizontal: Sizes.fixPadding * 2.5,
        paddingVertical: Sizes.fixPadding,
    },
    dailyCaloriesAndStepsImageStyle: {
        width: 30.0,
        height: 30.0,
        resizeMode: 'contain',
        tintColor: Colors.primaryColor,
    }
});

export default GoalScreen;