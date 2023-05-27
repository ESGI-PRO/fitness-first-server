import React, { useState } from "react";
import { SafeAreaView, View, StatusBar, StyleSheet, Text } from "react-native";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import CollapsingToolbar from "../../components/sliverAppBarScreen";
import { Snackbar } from "react-native-paper";

const importantHealthTipsList = [
    'Vegetables and legumes or beans.',
    'Fruits',
    'Grain (cereal) foods, mostly wholegrain or high cereal fibre varieties.',
    'Milk, yoghurt, cheese or alternatives, mostly reduced fat.'
];

const healtTipsDetailList = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
];

const nutritionTipsList = [
    {
        id: '1',
        nutritionTip: 'Eat oily fish',
        nutritionTipDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    },
    {
        id: '2',
        nutritionTip: 'Eat whole grains',
        nutritionTipDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    },
    {
        id: '3',
        nutritionTip: 'Drink water',
        nutritionTipDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    }
];

const HealthTipsDetailScreen = ({ navigation, route }) => {

    const item = route.params.item;

    const [state, setState] = useState({
        showSnackBar: false,
        isFavorite: false,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        showSnackBar,
        isFavorite,
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                <CollapsingToolbar
                    leftItem={
                        <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding * 2.0, flexDirection: 'row', alignItems: 'center', }}>
                            <MaterialIcons
                                name="arrow-back-ios"
                                size={24}
                                color={Colors.whiteColor}
                                onPress={() => navigation.pop()}
                            />
                            <Text numberOfLines={1} style={{ marginLeft: Sizes.fixPadding, ...Fonts.whiteColor18SemiBold }}>
                                Health Tips
                            </Text>
                        </View>
                    }
                    toolbarColor={Colors.primaryColor}
                    toolbarMinHeight={60}
                    toolbarMaxHeight={200}
                    src={item.healthTipImage}
                >
                    <View style={{ paddingBottom: Sizes.fixPadding * 8.0 }}>
                        {healthTipsDetail()}
                        {nutritionTipsInfo()}
                    </View>
                </CollapsingToolbar>
            </View>
            <Snackbar
                visible={showSnackBar}
                onDismiss={() => updateState({ showSnackBar: false })}
                style={styles.snackBarStyle}
            >
                {isFavorite
                    ?
                    `${item.healthTip} Add To Favorite List.`
                    :
                    `${item.healthTip} Remove From Favorite List.`
                }
            </Snackbar>
        </SafeAreaView>
    )

    function nutritionTipsInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding, ...Fonts.blackColor16SemiBold }}>
                    Nutrition Tips For You
                </Text>
                {
                    nutritionTipsList.map((item) => (
                        <View key={`${item.id}`} style={{ marginBottom: Sizes.fixPadding }}>
                            <View style={{ marginBottom: Sizes.fixPadding - 7.0, flexDirection: 'row' }}>
                                <Text style={{ ...Fonts.blackColor14SemiBold }}>
                                    •
                                </Text>
                                <Text style={{ marginLeft: Sizes.fixPadding - 5.0, ...Fonts.blackColor14SemiBold }}>
                                    {item.nutritionTip}
                                </Text>
                            </View>
                            <Text style={{ ...Fonts.grayColor13Regular }}>
                                {item.nutritionTipDetail}
                            </Text>
                        </View>
                    ))
                }
            </View>
        )
    }

    function healthTipsDetail() {
        return (
            <View style={{ marginVertical: Sizes.fixPadding, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ flex: 1, ...Fonts.blackColor16SemiBold }}>
                        {item.healthTip}
                    </Text>
                    <MaterialIcons
                        name={isFavorite ? "favorite" : "favorite-border"}
                        color={Colors.blackColor}
                        size={22}
                        onPress={() => updateState({ isFavorite: !isFavorite, showSnackBar: true })}
                    />
                </View>
                <View style={{ marginVertical: Sizes.fixPadding }}>
                    {
                        importantHealthTipsList.map((item, index) => (
                            <View key={`${index}`} style={{ marginBottom: Sizes.fixPadding - 3.0, flexDirection: 'row' }}>
                                <Text style={{ ...Fonts.blackColor13Medium }}>
                                    •
                                </Text>
                                <Text style={{ marginLeft: Sizes.fixPadding - 5.0, ...Fonts.blackColor13Medium }}>
                                    {item}
                                </Text>
                            </View>
                        ))
                    }
                </View>
                <View>
                    {
                        healtTipsDetailList.map((item, index) => (
                            <Text key={`${index}`} style={{ marginBottom: Sizes.fixPadding, ...Fonts.grayColor13Regular }}>
                                {item}
                            </Text>
                        ))
                    }
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Sizes.fixPadding * 2.0,
    },
    snackBarStyle: {
        position: 'absolute',
        bottom: -10.0,
        elevation: 0.0,
        left: -10.0,
        right: -10.0,
        backgroundColor: '#333333'
    },
});

export default HealthTipsDetailScreen;