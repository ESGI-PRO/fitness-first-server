import React, { Component, useState } from "react";
import { SafeAreaView, View, StatusBar, StyleSheet, Text } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { TabView, TabBar } from 'react-native-tab-view';
import FavoriteHealthTips from "../favoriteHealthTips/favoriteHealthTipsScreen";
import FavoriteWorkouts from "../favoriteWorkouts/favoriteWorkoutsScreen";

const FavoriteListScreen = ({ navigation }) => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Workout' },
        { key: 'second', title: 'Helth Tips' },
    ]);

    const renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
            case 'first':
                return <FavoriteWorkouts navigation={navigation} />;
            case 'second':
                return <FavoriteHealthTips navigation={navigation} />;
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    swipeEnabled={false}
                    renderTabBar={props => (
                        <TabBar
                            {...props}
                            indicatorStyle={{ elevation: 0.0, height: 3.0, backgroundColor: Colors.primaryColor, }}
                            style={{ elevation: 0.0, marginHorizontal: Sizes.fixPadding * 2.0, backgroundColor: Colors.bodyBackColor, }}
                            renderLabel={({ route, focused }) => (
                                <Text
                                    style={focused ? { ...Fonts.primaryColor16Bold } : { ...Fonts.grayColor16Bold }}>
                                    {route.title}
                                </Text>
                            )}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    )

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
                    Favorite List
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
})

export default FavoriteListScreen;