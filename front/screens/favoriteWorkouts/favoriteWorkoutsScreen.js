import React, { useState } from "react";
import { Animated, View, Dimensions, TouchableHighlight, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Snackbar } from 'react-native-paper';

const { width } = Dimensions.get('window');

const favoriteWorkoutsList = [
    {
        key: '1',
        workoutImage: require('../../assets/images/workout/workout1.png'),
        workoutName: 'Weight Loss Training',
        workoutDescription: 'Full body workout',
        workoutMinute: 9,
        workoutLevel: 9,
    },
    {
        key: '2',
        workoutImage: require('../../assets/images/workout/workout12.png'),
        workoutName: 'Arm Workout',
        workoutMinute: 9,
        workoutLevel: 9,
    },
];

const rowSwipeAnimatedValues = {};

Array(favoriteWorkoutsList.length + 1)
    .fill('')
    .forEach((_, i) => {
        rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
    });

const FavoriteWorkoutsScreen = ({ navigation }) => {

    const [showSnackBar, setShowSnackBar] = useState(false);

    const [listData, setListData] = useState(favoriteWorkoutsList);

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
                onPress={() => navigation.push('WorkoutDetail', { item: data.item })}
                style={styles.favoriteWorkoutsWrapStyle}>
                <View style={{ padding: Sizes.fixPadding, }}>
                    <Text style={{ marginBottom: Sizes.fixPadding - 7.0, ...Fonts.blackColor14Medium }}>
                        {data.item.workoutName}
                    </Text>
                    {
                        data.item.workoutDescription
                            ?
                            <Text style={{ marginBottom: Sizes.fixPadding - 7.0, ...Fonts.blackColor12Regular }}>
                                {data.item.workoutDescription}
                            </Text>
                            :
                            null
                    }
                    <Text style={{ ...Fonts.blackColor12SemiBold }}>
                        {data.item.workoutMinute} Min - {data.item.workoutLevel} level
                    </Text>
                </View>
                <Image
                    source={data.item.workoutImage}
                    style={styles.favoriteWorkoutImageStyle}
                />
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
                                        inputRange: [45, 90],
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
                    Favorite workout list is empty
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    favoriteWorkoutsWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        borderRadius: Sizes.fixPadding,
        height: 110.0,
        marginBottom: Sizes.fixPadding * 3.0,
        marginHorizontal: Sizes.fixPadding * 2.0
    },
    favoriteWorkoutImageStyle: {
        position: 'absolute',
        bottom: 0.0,
        right: 0.0,
        width: width / 1.9,
        height: 100.0,
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

export default FavoriteWorkoutsScreen;