import React, { useState } from "react";
import { SafeAreaView, View, StatusBar, ScrollView, StyleSheet, TextInput, TouchableOpacity, Image, Text } from "react-native";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { SharedElement } from 'react-navigation-shared-element';
import { BottomSheet } from '@rneui/themed';

const EditProfileScreen = ({ navigation, route }) => {

    const id = route.params.id;

    const [state, setState] = useState({
        name: 'Samantha John',
        email: 'johnsamantha@gmail.com',
        mobileNumber: '1236547890',
        password: '123456789016',
        showBottomSheet: false,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        name,
        email,
        mobileNumber,
        password,
        showBottomSheet,
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {profilePic()}
                    {nameTextField()}
                    {emailTextField()}
                    {mobileNumberField()}
                    {passwordTextField()}
                    {doneAndCancelButton()}
                </ScrollView>
            </View>
            {changeProfilePicOptionsSheet()}
        </SafeAreaView>
    )

    function changeProfilePicOptionsSheet() {
        return (
            <BottomSheet
                isVisible={showBottomSheet}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.50, 0, 0.50)' }}
                onBackdropPress={() => { updateState({ showBottomSheet: false }) }}
            >
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => updateState({ showBottomSheet: false })}
                    style={{
                        backgroundColor: Colors.whiteColor,
                        paddingVertical: Sizes.fixPadding + 5.0,
                    }}
                >
                    <Text style={{ ...Fonts.blackColor16SemiBold, textAlign: 'center' }}>
                        Choose Option
                    </Text>
                    <View style={{ marginVertical: Sizes.fixPadding + 10.0, flexDirection: 'row', marginHorizontal: Sizes.fixPadding * 2.0 }}>
                        <MaterialIcons name="photo-camera" size={18} color={Colors.blackColor} />
                        <Text style={{ ...Fonts.blackColor16Medium, marginLeft: Sizes.fixPadding }}>
                            Camera
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: Sizes.fixPadding * 2.0 }}>
                        <MaterialIcons name="photo-library" size={18} color={Colors.blackColor} />
                        <Text style={{ ...Fonts.blackColor16Medium, marginLeft: Sizes.fixPadding }}>
                            Select from gallery
                        </Text>
                    </View>
                </TouchableOpacity>
            </BottomSheet>
        )
    }

    function doneAndCancelButton() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: Sizes.fixPadding }}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.pop()}
                    style={styles.doneButtonStyle}
                >
                    <Text style={{ ...Fonts.whiteColor18Bold }}>
                        Done
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.pop()}
                    style={styles.cancelButtonStyle}
                >
                    <Text style={{ ...Fonts.primaryColor18Bold }}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    function passwordTextField() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding + 10.0, }}>
                <Text style={{ ...Fonts.grayColor14Medium }}>
                    Password
                </Text>
                <TextInput
                    value={password}
                    selectionColor={Colors.primaryColor}
                    onChangeText={(text) => updateState({ password: text })}
                    style={{
                        ...Fonts.blackColor14Medium,
                        borderBottomColor: Colors.grayColor,
                        borderBottomWidth: 1.0,
                    }}
                    secureTextEntry={true}
                />
            </View>
        )
    }

    function mobileNumberField() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding + 10.0, }}>
                <Text style={{ ...Fonts.grayColor14Medium }}>
                    Mobile Number
                </Text>
                <TextInput
                    value={mobileNumber}
                    selectionColor={Colors.primaryColor}
                    onChangeText={(text) => updateState({ mobileNumber: text })}
                    style={{
                        ...Fonts.blackColor14Medium,
                        borderBottomColor: Colors.grayColor,
                        borderBottomWidth: 1.0,
                    }}
                    keyboardType="numeric"
                />
            </View>
        )
    }

    function emailTextField() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding + 10.0, }}>
                <Text style={{ ...Fonts.grayColor14Medium }}>
                    Email Address
                </Text>
                <TextInput
                    value={email}
                    selectionColor={Colors.primaryColor}
                    onChangeText={(text) => updateState({ email: text })}
                    style={{
                        ...Fonts.blackColor14Medium,
                        borderBottomColor: Colors.grayColor,
                        borderBottomWidth: 1.0,
                    }}
                    keyboardType="email-address"
                />
            </View>
        )
    }

    function nameTextField() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding + 10.0, }}>
                <Text style={{ ...Fonts.grayColor14Medium }}>
                    Name
                </Text>
                <TextInput
                    value={name}
                    selectionColor={Colors.primaryColor}
                    onChangeText={(text) => updateState({ name: text })}
                    style={{
                        ...Fonts.blackColor14Medium,
                        borderBottomColor: Colors.grayColor,
                        borderBottomWidth: 1.0,
                    }}
                />
            </View>
        )
    }

    function profilePic() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => updateState({ showBottomSheet: true })}
                style={{ alignItems: 'center', alignSelf: 'center' }}
            >
                <SharedElement id={id}>
                    <Image
                        source={require('../../assets/images/users/user7.png')}
                        style={{ width: 100.0, height: 100.0, borderRadius: 50.0 }}
                    />
                </SharedElement>
                <View style={styles.addIconWrapStyle}>
                    <MaterialIcons
                        name="add"
                        color={Colors.whiteColor}
                        size={14}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons
                    name="arrow-back-ios"
                    size={24}
                    color={Colors.blackColor}
                    onPress={() => navigation.pop()}
                />
                <Text style={{ marginLeft: Sizes.fixPadding + 5.0, ...Fonts.blackColor18SemiBold }}>
                    Edit
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
    addIconWrapStyle: {
        position: 'absolute',
        bottom: 5.0,
        right: 5.0,
        backgroundColor: Colors.primaryColor,
        width: 20.0, height: 20.0,
        borderRadius: 10.0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonStyle: {
        backgroundColor: Colors.bodyBackColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding * 2.5,
        paddingVertical: Sizes.fixPadding + 3.0,
        borderColor: Colors.primaryColor,
        marginHorizontal: Sizes.fixPadding,
        borderWidth: 1.0,
        flex: 1.0,
    },
    doneButtonStyle: {
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding * 2.5,
        paddingVertical: Sizes.fixPadding + 3.0,
        marginVertical: Sizes.fixPadding * 2.0,
        marginHorizontal: Sizes.fixPadding,
        flex: 1.0,
    },
});

export default EditProfileScreen;