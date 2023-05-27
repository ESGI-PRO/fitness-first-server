import React, { useState } from "react";
import { Text, View, StatusBar, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import { Fonts, Colors, Sizes } from "../../constants/styles";
import CollapsingToolbar from "../../components/sliverAppBarScreen";
import { MaterialIcons } from '@expo/vector-icons';

const trainerAboutList = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
];

const TrainerDetailScreen = ({ navigation, route }) => {

    const item = route.params.item;

    const [state, setState] = useState({
        showMore: false,
        isFavorite: false,
        showSnackBar: false,
        isFollow: false,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        showMore,
        isFavorite,
        showSnackBar,
        isFollow,
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.backColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                <CollapsingToolbar
                    leftItem={
                        <MaterialIcons
                            name="arrow-back-ios"
                            size={24}
                            color={Colors.blackColor}
                            onPress={() => navigation.pop()}
                            style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}
                        />
                    }
                    toolbarColor={Colors.primaryColor}
                    toolbarMinHeight={60}
                    toolbarMaxHeight={200}
                    src={item.trainerImage}>
                    <View style={{ paddingBottom: Sizes.fixPadding * 8.0 }}>
                        {trainerInfo()}
                        {trainerAboutInfo()}
                    </View>
                </CollapsingToolbar>
            </View>
            {messageAndFollowButton()}
        </SafeAreaView>
    )

    function messageAndFollowButton() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: Sizes.fixPadding }}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.push('Message', { item: item })}
                    style={styles.messageButtonStyle}
                >
                    <Text style={{ ...Fonts.whiteColor18Bold }}>
                        Message
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => updateState({ isFollow: !isFollow })}
                    style={styles.followButtonStyle}
                >
                    <Text style={{ ...Fonts.primaryColor18Bold }}>
                        {isFollow ? `Following` : `Follow`}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    function trainerAboutInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginTop: Sizes.fixPadding - 5.0, marginBottom: Sizes.fixPadding + 5.0, ...Fonts.blackColor16SemiBold }}>
                    About
                </Text>
                {
                    trainerAboutList.map((item, index) => (
                        <Text key={`${index}`} style={{ marginBottom: Sizes.fixPadding - 5.0, ...Fonts.grayColor13Regular }}>
                            { }   {item}
                        </Text>
                    ))
                }
            </View>
        )
    }

    function trainerInfo() {
        return (
            <View style={{ marginTop: Sizes.fixPadding * 2.0, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor18SemiBold }}>
                    {item.trainerName}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ ...Fonts.grayColor13Regular }}>
                        {item.trainerSpeciality}
                    </Text>
                    <Text style={{ marginLeft: Sizes.fixPadding * 2.0, ...Fonts.primaryColor13Medium }}>
                        1.5K
                    </Text>
                    <Text style={{ marginLeft: Sizes.fixPadding - 5.0, ...Fonts.grayColor13Regular }}>
                        Followers
                    </Text>
                </View>
                <View style={{ marginVertical: Sizes.fixPadding + 5.0, backgroundColor: '#cccccc', height: 1.0, }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    priceListAndImagesButtonStyle: {
        borderColor: Colors.primaryColor,
        borderWidth: 1.5,
        borderRadius: Sizes.fixPadding - 5.0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: Sizes.fixPadding - 5.0,
        paddingTop: Sizes.fixPadding - 8.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
    },
    famousWeddingInfoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 2.0,
        borderRadius: Sizes.fixPadding - 5.0,
        width: 150.0,
        marginRight: Sizes.fixPadding + 10.0,
        marginBottom: Sizes.fixPadding - 5.0,
    },
    famousWeddingImageStyle: {
        borderTopLeftRadius: Sizes.fixPadding - 8.0,
        borderTopRightRadius: Sizes.fixPadding - 8.0,
        width: 150.0,
        height: 100.0,
    },
    famousWeddingOfCouplesTextStyle: {
        paddingTop: Sizes.fixPadding - 5.0,
        paddingBottom: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding - 5.0,
        lineHeight: 15.0,
        ...Fonts.blackColor11Bold,
    },
    bookVenueButtonStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding,
    },
    snackBarStyle: {
        position: 'absolute',
        bottom: -10.0,
        left: -10.0,
        right: -10.0,
        backgroundColor: '#333333',
    },
    followButtonStyle: {
        backgroundColor: Colors.bodyBackColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding * 2.5,
        paddingVertical: Sizes.fixPadding,
        borderColor: Colors.primaryColor,
        marginHorizontal: Sizes.fixPadding,
        borderWidth: 1.0,
        flex: 1.0,
    },
    messageButtonStyle: {
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding * 2.5,
        paddingVertical: Sizes.fixPadding,
        marginVertical: Sizes.fixPadding * 2.0,
        marginHorizontal: Sizes.fixPadding,
        flex: 1.0,
    },
})

export default TrainerDetailScreen;