import React, { useState, useRef } from 'react';
import { Fonts, Colors, Sizes, } from "../../constants/styles";
import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Animated,
    Dimensions,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Snackbar } from 'react-native-paper';

const { width } = Dimensions.get('window');

const notificationList = [
    {
        key: '1',
        title: 'Congratulations!',
        description: 'You Complete your today\'s workout',
    },
    {
        key: '2',
        title: 'Premium Plan',
        description: 'Your premium plan expire soon. Upgrade your plan and get 25% off',
    },
    {
        key: '3',
        title: 'Congratulations!',
        description: 'You Complete your today\'s workout',
    },
];

const rowTranslateAnimatedValues = {};

const NotificationsScreen = ({ navigation }) => {

    const [showSnackBar, setShowSnackBar] = useState(false);

    const [snackBarMsg, setSnackBarMsg] = useState('');

    const [listData, setListData] = useState(notificationList);

    Array(listData.length + 1)
        .fill('')
        .forEach((_, i) => {
            rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
        });

    const animationIsRunning = useRef(false);

    const onSwipeValueChange = swipeData => {

        const { key, value } = swipeData;

        if ((value < -width || value > width) && !animationIsRunning.current) {
            animationIsRunning.current = true;
            Animated.timing(rowTranslateAnimatedValues[key], {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start(() => {

                const newData = [...listData];
                const prevIndex = listData.findIndex(item => item.key === key);
                newData.splice(prevIndex, 1);
                const removedItem = listData.find(item => item.key === key);

                setSnackBarMsg(`${removedItem.title} dismissed`);

                setListData(newData);

                setShowSnackBar(true);

                animationIsRunning.current = false;
            });
        }
    };

    const renderItem = data => (
        <Animated.View
            style={[
                {
                    height: rowTranslateAnimatedValues[
                        data.item.key
                    ].interpolate({
                        inputRange: ['0%', '100%'],
                        outputRange: ['0%', '100%'],
                    }),
                },
            ]}
        >
            <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
                <View style={{
                    marginHorizontal: Sizes.fixPadding * 2.0,
                    marginVertical: Sizes.fixPadding - 5.0,
                    marginBottom: Sizes.fixPadding + 5.0,
                }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row', }}>
                        <View style={styles.notificationIconWrapStyle}>
                            <MaterialCommunityIcons
                                name="bell-ring-outline"
                                size={25}
                                color={Colors.whiteColor}
                            />
                        </View>
                        <View style={{ flex: 1, marginLeft: Sizes.fixPadding, }}>
                            <Text style={{ ...Fonts.blackColor16Medium }}>
                                {data.item.title}
                            </Text>
                            <Text style={{ ...Fonts.grayColor13Regular }}>
                                {data.item.description}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </Animated.View >
    );

    const renderHiddenItem = () => (
        <View style={styles.rowBack}>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            {header()}
            <View style={{ backgroundColor: Colors.bodyBackColor, flex: 1, }}>
                {listData.length == 0 ?
                    noNotificatiosInfo()
                    :
                    <SwipeListView
                        data={listData}
                        renderItem={renderItem}
                        renderHiddenItem={renderHiddenItem}
                        rightOpenValue={-width}
                        leftOpenValue={width}
                        onSwipeValueChange={onSwipeValueChange}
                        useNativeDriver={false}
                    />
                }
                <Snackbar
                    style={styles.snackBarStyle}
                    visible={showSnackBar}
                    onDismiss={() => setShowSnackBar(false)}
                >
                    {snackBarMsg}
                </Snackbar>
            </View>
        </SafeAreaView>
    );

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
                    Notifications
                </Text>
            </View>
        )
    }

    function noNotificatiosInfo() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <MaterialIcons name="notifications-off" size={50} color='#949494' />
                <Text style={{ ...Fonts.grayColor14Medium, marginTop: Sizes.fixPadding - 5.0 }}>
                    No New Notifications
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
    notificationIconWrapStyle: {
        height: 60.0,
        width: 60.0,
        backgroundColor: Colors.primaryColor,
        borderRadius: 30.0,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(250, 156, 122, 0.4)',
        borderWidth: 1.5,
        shadowColor: Colors.primaryColor,
        elevation: 2.0,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        flex: 1,
    },
    snackBarStyle: {
        position: 'absolute',
        bottom: -10.0,
        left: -10.0,
        right: -10.0,
        backgroundColor: '#333333'
    },
});

export default NotificationsScreen;