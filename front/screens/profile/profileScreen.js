import React, { useState } from 'react';
import { SafeAreaView, View, StatusBar, ScrollView, StyleSheet, TouchableOpacity, Image, Text, Dimensions } from "react-native";
import { Colors, Fonts, Sizes } from '../../constants/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { SharedElement } from 'react-navigation-shared-element';
import Dialog from "react-native-dialog";

const { width } = Dimensions.get('window');

const ProfileScreen = ({ navigation }) => {

    const [state, setState] = useState({
        showTrainingRestDialog: false,
        currentTrainingRest: 30,
        dummyTrainingRest: 30,
        showLogoutDialog: false,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        showTrainingRestDialog,
        currentTrainingRest,
        dummyTrainingRest,
        showLogoutDialog,
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0, }}
                >
                    {profileInfo()}
                    {divider()}
                    {aboutOptions()}
                    {divider()}
                    {workoutOptions()}
                    {logoutText()}
                </ScrollView>
            </View>
            {trainingRestDialog()}
            {logoutDialog()}
        </SafeAreaView>
    )

    function logoutDialog() {
        return (
            <Dialog.Container
                visible={showLogoutDialog}
                contentStyle={styles.dialogWrapStyle}
                headerStyle={{ margin: 0.0 }}
                onRequestClose={() => { updateState({ showLogoutDialog: false }) }}
            >
                <View style={{ backgroundColor: Colors.whiteColor, alignItems: 'center' }}>
                    <Text style={{ ...Fonts.blackColor16SemiBold }}>
                        Sure you want to logout?
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding * 2.5, flexDirection: 'row', alignItems: 'center', }}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                updateState({ showLogoutDialog: false })
                                navigation.push('LoginRegister')
                            }}
                            style={{
                                ...styles.logoutButtonStyle,
                                marginRight: Sizes.fixPadding - 5.0,
                            }}>
                            <Text style={{ ...Fonts.whiteColor18Bold }}>
                                Logout
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                updateState({ showLogoutDialog: false })
                            }}
                            style={{
                                ...styles.cancelButtonStyle,
                                marginLeft: Sizes.fixPadding - 5.0,
                            }}>
                            <Text style={{ ...Fonts.primaryColor18Bold }}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Dialog.Container>
        )
    }

    function trainingRestDialog() {
        return (
            <Dialog.Container
                visible={showTrainingRestDialog}
                contentStyle={styles.dialogWrapStyle}
                headerStyle={{ margin: 0.0 }}
                onRequestClose={() => { updateState({ showTrainingRestDialog: false }) }}
            >
                <View style={{ backgroundColor: Colors.whiteColor, }}>
                    <Text style={{ textAlign: 'center', ...Fonts.blackColor16SemiBold }}>
                        Set Training Rest (5 ~ 180 secs)
                    </Text>
                    <View style={{ marginVertical: Sizes.fixPadding + 5.0, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', }}>
                        <MaterialIcons
                            name='arrow-back-ios'
                            color={Colors.blackColor}
                            size={20}
                            onPress={() => {
                                currentTrainingRest > 5
                                    ?
                                    updateState({ currentTrainingRest: currentTrainingRest - 5, })
                                    :
                                    null
                            }}
                        />
                        <Text style={{ marginHorizontal: Sizes.fixPadding * 3.0, ...Fonts.grayColor20Regular }}>
                            {currentTrainingRest} sec
                        </Text>
                        <MaterialIcons
                            name='arrow-forward-ios'
                            color={Colors.blackColor}
                            size={20}
                            onPress={() => {
                                currentTrainingRest < 180
                                    ?
                                    updateState({ currentTrainingRest: currentTrainingRest + 5, })
                                    :
                                    null
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Text
                            onPress={() => updateState({ currentTrainingRest: dummyTrainingRest, showTrainingRestDialog: false })}
                            style={{ ...Fonts.grayColor14SemiBold }}
                        >
                            Cancel
                        </Text>
                        <Text
                            style={{ marginLeft: Sizes.fixPadding + 5.0, ...Fonts.primaryColor14SemiBold }}
                            onPress={() => updateState({ dummyTrainingRest: currentTrainingRest, showTrainingRestDialog: false })}
                        >
                            Set
                        </Text>
                    </View>
                </View>
            </Dialog.Container>
        )
    }

    function logoutText() {
        return (
            <Text
                onPress={() => updateState({ showLogoutDialog: true })}
                style={{
                    marginHorizontal: Sizes.fixPadding * 2.0,
                    ...Fonts.primaryColor14Bold,
                    marginBottom: Sizes.fixPadding * 2.0,
                }}>
                Logout
            </Text>
        )
    }

    function workoutOptions() {
        return (
            <View>
                <Text style={{ margin: Sizes.fixPadding * 2.0, ...Fonts.grayColor13Bold }}>
                    Workout
                </Text>
                {optionsShort({ option: 'Goal', navigateTo: 'Goal' })}
                {trainingRestOption()}
            </View>
        )
    }

    function trainingRestOption() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => updateState({ showTrainingRestDialog: true })}
                style={styles.optionsShortWrapStyle}
            >
                <Text style={{ flex: 1, ...Fonts.blackColor16Medium }}>
                    Set Training Rest
                </Text>
                <MaterialIcons
                    name='arrow-forward-ios'
                    color={Colors.blackColor}
                    size={18}
                />
            </TouchableOpacity>
        )
    }

    function aboutOptions() {
        return (
            <View style={{ marginTop: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding + 5.0, marginHorizontal: Sizes.fixPadding * 2.0, ...Fonts.grayColor13Bold }}>
                    ABOUT
                </Text>
                {optionsShort({ option: 'My Trainer', navigateTo: 'Trainers' })}
                {optionsShort({ option: 'Favorite List', navigateTo: 'FavoriteList' })}
                {optionsShort({ option: 'Notifications', navigateTo: 'Notifications' })}
                {/* Recettes */}
                {optionsShort({ option: 'Mes Recettes', navigateTo: 'Recettes' })}
                {/* Recettes */}

                {/* Training */}
                {optionsShort({ option: 'Mes Programmes', navigateTo: 'Training' })}
                {/* Training */}
                {optionsShort({ option: 'Premium Plan', navigateTo: 'PremiumPlans' })}
                {optionsShort({ option: 'Share with Friends' })}
                {optionsShort({ option: 'Privacy Policy' })}
                {optionsShort({ option: 'Terms of Use' })}
            </View>
        )
    }

    function optionsShort({ option, navigateTo }) {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigateTo ? navigation.push(navigateTo) : null}
                style={styles.optionsShortWrapStyle}
            >
                <Text style={{ flex: 1, ...Fonts.blackColor16Medium }}>
                    {option}
                </Text>
                <MaterialIcons
                    name='arrow-forward-ios'
                    color={Colors.blackColor}
                    size={18}
                />
            </TouchableOpacity>
        )
    }

    function divider() {
        return (
            <View
                style={{
                    marginHorizontal: Sizes.fixPadding * 2.0,
                    height: 1.0,
                    backgroundColor: Colors.grayColor
                }}
            />
        )
    }

    function profileInfo() {
        return (
            <View style={styles.profileInfoWrapStyle}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <SharedElement id={'photo'}>
                        <Image
                            source={require('../../assets/images/users/user7.png')}
                            style={{ width: 65.0, height: 65.0, borderRadius: 35.0, }}
                        />
                    </SharedElement>
                    <View style={{ flex: 1, marginLeft: Sizes.fixPadding, }}>
                        <Text style={{ ...Fonts.blackColor18SemiBold }}>
                            Samantha John
                        </Text>
                        <Text style={{ ...Fonts.grayColor13Regular }}>
                            +91 1234567890
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.push('EditProfile', { id: 'photo' })}
                    style={styles.editProfileIconWrapStyle}
                >
                    <MaterialIcons
                        name='edit'
                        color={Colors.whiteColor}
                        size={16}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function header() {
        return (
            <Text style={{ margin: Sizes.fixPadding * 2.0, ...Fonts.blackColor18SemiBold }}>
                Profile
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    editProfileIconWrapStyle: {
        backgroundColor: Colors.blackColor,
        width: 25.0,
        height: 25.0,
        borderRadius: 15.0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileInfoWrapStyle: {
        marginBottom: Sizes.fixPadding * 2.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    optionsShortWrapStyle: {
        marginBottom: Sizes.fixPadding + 10.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    dialogWrapStyle: {
        borderRadius: Sizes.fixPadding + 5.0,
        width: width - 40,
        paddingTop: Sizes.fixPadding,
        paddingBottom: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
    },
    cancelButtonStyle: {
        backgroundColor: Colors.whiteColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding * 2.5,
        paddingVertical: Sizes.fixPadding,
        borderColor: Colors.primaryColor,
        marginHorizontal: Sizes.fixPadding,
        borderWidth: 1.0,
        flex: 1.0,
    },
    logoutButtonStyle: {
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding * 2.5,
        paddingVertical: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding,
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        flex: 1.0,
    },
})

export default ProfileScreen;


