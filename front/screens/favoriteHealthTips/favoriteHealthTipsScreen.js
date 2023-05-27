import React, { useState } from "react";
import { View, StyleSheet, TouchableHighlight, Animated, TouchableOpacity, Image, Text } from "react-native";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { SwipeListView } from 'react-native-swipe-list-view';
import { Snackbar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const healthTipsList = [
    {
        key: '1',
        healthTipImage: require('../../assets/images/tips/tip1.png'),
        healthTip: 'Be Active',
        healthTipDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    },
    {
        key: '2',
        healthTipImage: require('../../assets/images/tips/tip2.png'),
        healthTip: 'Avoid harmful use of alcohol',
        healthTipDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
    },
];

const rowSwipeAnimatedValues = {};

Array(healthTipsList.length + 1)
    .fill('')
    .forEach((_, i) => {
        rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
    });

const FavoriteHealthTipsScreen = ({ navigation }) => {

    const [showSnackBar, setShowSnackBar] = useState(false);

    const [listData, setListData] = useState(healthTipsList);

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setShowSnackBar(true);
        setListData(newData);
    };

    const onSwipeValueChange = swipeData => {
        const { key, value } = swipeData;
        rowSwipeAnimatedValues[key].setValue(Math.abs(value));
    };

    const renderItem = data => (
        <TouchableHighlight
            style={{ backgroundColor: Colors.bodyBackColor }}
            activeOpacity={0.9}
        >
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('HealthTipsDetail', { item: data.item })}
                style={styles.healthTipsInfoWrapStyle}
            >
                <Image
                    source={data.item.healthTipImage}
                    style={styles.healthTipImageStyle}
                />
                <View style={{ flex: 1, paddingVertical: Sizes.fixPadding - 5.0, paddingHorizontal: Sizes.fixPadding }}>
                    <Text style={{ marginBottom: Sizes.fixPadding - 8.0, ...Fonts.blackColor14SemiBold }}>
                        {data.item.healthTip}
                    </Text>
                    <Text style={{ ...Fonts.grayColor13Regular }}>
                        {data.item.healthTipDetail}
                    </Text>
                </View>
            </TouchableOpacity>
        </TouchableHighlight>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={{ alignItems: 'center', flex: 1, }}>
            <TouchableOpacity
                style={styles.backDeleteContinerStyle}
                onPress={() => deleteRow(rowMap, data.item.key)}
            >
                <Animated.View
                    style={[
                        {
                            transform: [
                                {
                                    scale: rowSwipeAnimatedValues[
                                        data.item.key
                                    ].interpolate({
                                        inputRange: [45, 100],
                                        outputRange: [0, 1],
                                        extrapolate: 'clamp',
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    <MaterialIcons
                        name="delete"
                        size={24}
                        color={Colors.whiteColor}
                        style={{ alignSelf: 'center' }}
                    />
                    <Text style={{ ...Fonts.whiteColor13Regular }}>
                        Delete
                    </Text>
                </Animated.View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            {
                listData.length == 0 ?
                    noDataInfo()
                    :
                    <View style={{ flex: 1 }}>
                        <SwipeListView
                            data={listData}
                            renderItem={renderItem}
                            renderHiddenItem={renderHiddenItem}
                            rightOpenValue={-110}
                            onSwipeValueChange={onSwipeValueChange}
                            contentContainerStyle={{
                                paddingTop: Sizes.fixPadding * 2.0,
                            }}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
            }
            <Snackbar
                style={styles.snackBarStyle}
                visible={showSnackBar}
                onDismiss={() => setShowSnackBar(false)}
            >
                Item Remove From Favorite List.
            </Snackbar>
        </View>
    );

    function noDataInfo() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <MaterialIcons name="favorite-border" size={30} color={Colors.grayColor} />
                <Text style={{ ...Fonts.grayColor14Medium, marginTop: Sizes.fixPadding - 5.0 }}>
                    Favorite health tips list is empty
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    healthTipsInfoWrapStyle: {
        borderRadius: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        backgroundColor: Colors.whiteColor,
        elevation: 4.0,
        marginBottom: Sizes.fixPadding * 3.0,
    },
    healthTipImageStyle: {
        height: 100.0,
        width: '100%',
        borderTopLeftRadius: Sizes.fixPadding,
        borderTopRightRadius: Sizes.fixPadding
    },
    snackBarStyle: {
        position: 'absolute',
        bottom: -10.0,
        left: -10.0,
        right: -10.0,
        backgroundColor: '#333333',
    },
    backDeleteContinerStyle: {
        alignItems: 'center',
        bottom: 25.0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 100,
        backgroundColor: Colors.primaryColor,
        right: 0,
    },
});

export default FavoriteHealthTipsScreen;