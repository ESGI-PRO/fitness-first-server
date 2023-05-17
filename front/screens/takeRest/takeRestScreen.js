import React, { useState } from 'react';
import { SafeAreaView, View, StatusBar, Dimensions, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { Colors, Fonts, Sizes } from '../../constants/styles';
import { MaterialIcons } from '@expo/vector-icons';
import Dialog from "react-native-dialog";

const { width } = Dimensions.get('window');

const TakeRestScreen = ({ navigation }) => {

    const [state, setState] = useState({
        showSkipDialog: false,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        showSkipDialog
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                {indicators()}
                <View style={{ flex: 1, }}>
                    {restInfo()}
                    {nextExerciseInfo()}
                </View>
                {skipDialog()}
            </View>
        </SafeAreaView>
    )

    function skipDialog() {
        return (
            <Dialog.Container
                visible={showSkipDialog}
                contentStyle={styles.dialogWrapStyle}
                headerStyle={{ margin: 0.0 }}
                onRequestClose={() => { updateState({ showSkipDialog: false }) }}
            >
                <View style={{ backgroundColor: Colors.whiteColor, alignItems: 'center', }}>
                    <MaterialIcons
                        name='close'
                        color={Colors.blackColor}
                        size={20}
                        onPress={() => updateState({ showSkipDialog: false })}
                        style={{ alignSelf: 'flex-end' }}
                    />
                    <Text style={{ marginVertical: Sizes.fixPadding - 5.0, ...Fonts.blackColor16SemiBold, }}>
                        Weight Loss Training
                    </Text>
                    <Text style={{ textAlign: 'center', ...Fonts.grayColor13Regular }}>
                        {`Congratulations your today's workout\ncompleted.`}
                    </Text>
                    <View style={styles.caloriesAndTotalStepsInfoWrapStyle}>
                        <View style={{ marginRight: Sizes.fixPadding * 2.0, alignItems: 'center' }}>
                            <Text style={{ ...Fonts.grayColor13Regular }}>
                                Burn Calories
                            </Text>
                            <Text style={{ ...Fonts.blackColor16SemiBold, }}>
                                568 Cal
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ ...Fonts.grayColor13Regular }}>
                                Total Steps
                            </Text>
                            <Text style={{ ...Fonts.blackColor16SemiBold, }}>
                                2,123
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => { updateState({ showSkipDialog: false }) }}
                        style={styles.shareToFriendButtonStyle}
                    >
                        <Text style={{ ...Fonts.whiteColor18Bold }}>
                            Share to Friends
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => updateState({ showSkipDialog: false })}
                        style={styles.notNowButtonStyle}
                    >
                        <Text style={{ ...Fonts.primaryColor18Bold }}>
                            Not Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </Dialog.Container>
        )
    }

    function nextExerciseInfo() {
        return (
            <View style={styles.nextExerciseInfoWrapStyle}>
                <Text style={{ marginBottom: Sizes.fixPadding - 5.0, ...Fonts.grayColor14SemiBold }}>
                    Next
                </Text>
                <View style={styles.nextExerciseDetailInfoWrapStyle}>
                    <Text style={{ ...Fonts.blackColor16SemiBold }}>
                        2. Barbell Back Squat
                    </Text>
                    <Text style={{ ...Fonts.blackColor16SemiBold }}>
                        00:60
                    </Text>
                </View>
                <Image
                    source={require('../../assets/images/workout/workout5.png')}
                    style={styles.nextExerciseImageStyle}
                />
            </View>
        )
    }

    function restInfo() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ ...Fonts.blackColor20SemiBold }}>
                    Take a rest 00:30 sec
                </Text>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => updateState({ showSkipDialog: true })}
                    style={styles.skipButtonStyle}
                >
                    <Text style={{ ...Fonts.whiteColor14Medium }}>
                        Skip
                    </Text>
                </TouchableOpacity>
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
    skipButtonStyle: {
        marginTop: Sizes.fixPadding * 3.0,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        borderRadius: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding - 5.0,
        alignSelf: 'center',
        paddingHorizontal: Sizes.fixPadding * 2.0,
    },
    nextExerciseImageStyle: {
        alignSelf: 'center',
        width: '100%',
        height: 90.0,
        resizeMode: 'contain'
    },
    nextExerciseDetailInfoWrapStyle: {
        marginBottom: Sizes.fixPadding,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    nextExerciseInfoWrapStyle: {
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingTop: Sizes.fixPadding * 2.0,
        backgroundColor: Colors.whiteColor,
        elevation: 15.0,
        borderTopColor: '#fcfcfc',
        borderTopWidth: 0.50,
    },
    dialogWrapStyle: {
        borderRadius: Sizes.fixPadding + 5.0,
        width: width - 40,
        paddingTop: Sizes.fixPadding,
        paddingBottom: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
    },
    notNowButtonStyle: {
        backgroundColor: Colors.whiteColor,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        borderRadius: Sizes.fixPadding * 2.5,
        paddingVertical: Sizes.fixPadding,
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
    },
    shareToFriendButtonStyle: {
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        borderRadius: Sizes.fixPadding * 2.5,
        paddingVertical: Sizes.fixPadding,
        marginVertical: Sizes.fixPadding * 2.0,
    },
    caloriesAndTotalStepsInfoWrapStyle: {
        marginTop: Sizes.fixPadding * 2.0,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default TakeRestScreen;


