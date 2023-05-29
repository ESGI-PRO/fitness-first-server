import React, { useState, createRef } from 'react';
import { SafeAreaView, Dimensions, View, TouchableOpacity, ScrollView, StatusBar, StyleSheet, Image, Text, TextInput, } from "react-native";
import { Colors, Fonts, Sizes } from '../../constants/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { Snackbar } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

const recentSearchesList = [
    'Full body workout',
    'Push ups',
    'Yoga exercise',
    'Yoga trainer'
];

const suggestedWorkoutsList = [
    {
        id: '1',
        workoutImage: require('../../assets/images/workout/workout1.png'),
        workoutName: 'Weight Loss Training',
        workoutDescription: ' Full body workout',
        workoutMinute: 9,
        workoutLevel: 9,
        isFavorite: true,
    },
    {
        id: '2',
        workoutImage: require('../../assets/images/workout/workout2.png'),
        workoutName: 'Muscle Building Training',
        workoutMinute: 11,
        workoutLevel: 11,
        isFavorite: false,
    },
    {
        id: '3',
        workoutImage: require('../../assets/images/workout/workout3.png'),
        workoutName: 'Back Workout Training',
        workoutMinute: 11,
        workoutLevel: 11,
        isFavorite: false,
    },
];

const SearchScreen = ({ navigation }) => {

    const [state, setState] = useState({
        suggestedWorkouts: suggestedWorkoutsList,
        showSnackBar: false,
        snackBarMsg: null,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        suggestedWorkouts,
        showSnackBar,
        snackBarMsg,
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {searchField()}
                    {recentSearchesInfo()}
                    {suggesionsInfo()}
                </ScrollView>
            </View>
            <Snackbar
                visible={showSnackBar}
                onDismiss={() => updateState({ showSnackBar: false })}
                style={styles.snackBarStyle}
            >
                {snackBarMsg}
            </Snackbar>
        </SafeAreaView>
    )

    function updateSuggestedWorkouts({ id }) {
        const newList = suggestedWorkouts.map((item) => {
            if (item.id === id) {
                const updatedItem = { ...item, isFavorite: !item.isFavorite };
                updateState({
                    showSnackBar: true,
                    snackBarMsg: updatedItem.isFavorite ? `${updatedItem.workoutName} Add To Favorite List.` : `${updatedItem.workoutName} Remove From Favorite List`
                })
                return updatedItem;
            }
            return item;
        });
        updateState({ suggestedWorkouts: newList })
    }

    function suggesionsInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding * 2.0, ...Fonts.blackColor16SemiBold }}>
                    Suggestion for you
                </Text>
                {
                    suggestedWorkouts.map((item) => (
                        <View key={`${item.id}`}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => navigation.push('WorkoutDetail', { item: item })}
                                style={styles.suggestedWorkoutsWrapStyle}
                            >
                                <View style={{ padding: Sizes.fixPadding, }}>
                                    <Text style={{ marginBottom: Sizes.fixPadding - 7.0, ...Fonts.blackColor14Medium }}>
                                        {item.workoutName}
                                    </Text>
                                    {
                                        item.workoutDescription
                                            ?
                                            <Text style={{ marginBottom: Sizes.fixPadding - 7.0, ...Fonts.blackColor12Regular }}>
                                                {item.workoutDescription}
                                            </Text>
                                            :
                                            null
                                    }
                                    <Text style={{ ...Fonts.blackColor12SemiBold }}>
                                        {item.workoutMinute} Min - {item.workoutLevel} level
                                    </Text>
                                    <MaterialIcons
                                        name={item.isFavorite ? 'favorite' : 'favorite-border'}
                                        color={Colors.blackColor}
                                        size={20}
                                        style={{ alignSelf: 'flex-start', marginTop: Sizes.fixPadding - 5.0, }}
                                        onPress={() => updateSuggestedWorkouts({ id: item.id })}
                                    />
                                </View>
                                <Image
                                    source={item.workoutImage}
                                    style={styles.suggestedWorkoutImageStyle}
                                />
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </View>
        )
    }

    function recentSearchesInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding, ...Fonts.blackColor14Medium }}>
                    Recent Searches
                </Text>
                {
                    recentSearchesList.map((item, index) => (
                        <View
                            key={`${index}`}
                            style={{ marginBottom: Sizes.fixPadding, flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons
                                name='history'
                                color={Colors.grayColor}
                                size={17}
                            />
                            <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.grayColor12Regular }}>
                                {item}
                            </Text>
                        </View>
                    ))
                }
            </View>
        )
    }

    function searchField() {
        const textInputRef = createRef()
        return (
            <View style={styles.searchFieldWrapStyle}>
                <MaterialIcons
                    name='search'
                    color={Colors.grayColor}
                    size={18}
                    onPress={() => textInputRef.current.focus()}
                />
                <TextInput
                    ref={textInputRef}
                    placeholder='Search for workout or trainer'
                    placeholderTextColor={Colors.grayColor}
                    style={{ marginLeft: Sizes.fixPadding, flex: 1, ...Fonts.blackColor14Medium }}
                    selectionColor={Colors.primaryColor}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchFieldWrapStyle: {
        margin: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: Sizes.fixPadding * 2.0,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding,
    },
    suggestedWorkoutsWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        borderRadius: Sizes.fixPadding,
        height: height / 6.1,
        marginBottom: Sizes.fixPadding * 2.0,
    },
    suggestedWorkoutImageStyle: {
        position: 'absolute',
        bottom: 0.0,
        right: 0.0,
        width: width / 1.9,
        height: 100.0,
    },
    snackBarStyle: {
        position: 'absolute',
        bottom: -10.0,
        elevation: 0.0,
        left: -10.0,
        right: -10.0,
        backgroundColor: '#333333'
    }
})

export default SearchScreen;


