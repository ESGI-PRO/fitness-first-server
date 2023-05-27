import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, Image, BackHandler } from "react-native";
import { Colors, Fonts, Sizes } from "../constants/styles";
import ProfileScreen from "../screens/profile/profileScreen";
import ActivityScreen from "../screens/activity/activityScreen";
import WorkoutScreen from "../screens/workout/workoutScreen";
import HealthTipsScreen from "../screens/healthTips/healthTipsScreen";
import ChatScreen from "../screens/chat/chatScreen";
import { useFocusEffect } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabBarScreen = ({ navigation }) => {

    const backAction = () => {
        backClickCount == 1 ? BackHandler.exitApp() : _spring();
        return true;
    }

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
            return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
        }, [backAction])
    );

    function _spring() {
        setbackClickCount(1);
        setTimeout(() => {
            setbackClickCount(0)
        }, 1000)
    }

    const [backClickCount, setbackClickCount] = useState(0)

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { height: 60.0, paddingBottom: Sizes.fixPadding - 2.0, paddingTop: Sizes.fixPadding - 2.0 },
                    tabBarActiveTintColor: Colors.primaryColor,
                    tabBarInactiveTintColor: Colors.grayColor
                }}
            >
                <Tab.Screen name="Workout" component={WorkoutScreen}
                    options={{
                        tabBarIcon: ({ focused, color }) => (
                            <Image
                                source={require('../assets/images/icons/workout.png')}
                                style={{ width: 20.0, height: 20.0, resizeMode: 'contain', tintColor: color }}
                            />
                        ),
                        tabBarLabel: ({ focused, color }) => (
                            <Text numberOfLines={1} style={{
                                ...focused ?
                                    { ...Fonts.primaryColor10Bold }
                                    :
                                    { ...Fonts.grayColor10Bold }
                            }}>
                                WORKOUT
                            </Text>
                        )
                    }}
                />
                <Tab.Screen name="HealthTips" component={HealthTipsScreen}
                    options={{
                        tabBarIcon: ({ focused, color }) => (
                            <Image
                                source={require('../assets/images/icons/health.png')}
                                style={{ width: 20.0, height: 20.0, resizeMode: 'contain', tintColor: color }}
                            />
                        ),
                        tabBarLabel: ({ focused, color }) => (
                            <Text numberOfLines={1} style={{
                                ...focused ?
                                    { ...Fonts.primaryColor10Bold }
                                    :
                                    { ...Fonts.grayColor10Bold }
                            }}>
                                HEALTH TIPS
                            </Text>
                        )
                    }}
                />
                <Tab.Screen name="Activity" component={ActivityScreen}
                    options={{
                        tabBarIcon: ({ focused, color }) => (
                            <Image
                                source={require('../assets/images/icons/activity.png')}
                                style={{ width: 20.0, height: 20.0, resizeMode: 'contain', tintColor: color }}
                            />
                        ),
                        tabBarLabel: ({ focused, color }) => (
                            <Text numberOfLines={1} style={{
                                ...focused ?
                                    { ...Fonts.primaryColor10Bold }
                                    :
                                    { ...Fonts.grayColor10Bold }
                            }}>
                                MY ACTIVITY
                            </Text>
                        )
                    }}
                />
                <Tab.Screen name="Chat" component={ChatScreen}
                    options={{
                        tabBarIcon: ({ focused, color }) => (
                            <Image
                                source={require('../assets/images/icons/chat.png')}
                                style={{ width: 20.0, height: 20.0, resizeMode: 'contain', tintColor: color }}
                            />
                        ),
                        tabBarLabel: ({ focused, color }) => (
                            <Text numberOfLines={1} style={{
                                ...focused ?
                                    { ...Fonts.primaryColor10Bold }
                                    :
                                    { ...Fonts.grayColor10Bold }
                            }}>
                                CHAT
                            </Text>
                        )
                    }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ focused, color }) => (
                            <Image
                                source={require('../assets/images/icons/profile.png')}
                                style={{ width: 20.0, height: 20.0, resizeMode: 'contain', tintColor: color }}
                            />
                        ),
                        tabBarLabel: ({ focused, color }) => (
                            <Text numberOfLines={1} style={{
                                ...focused ?
                                    { ...Fonts.primaryColor10Bold }
                                    :
                                    { ...Fonts.grayColor10Bold }
                            }}>
                                PROFILE
                            </Text>
                        )
                    }}
                />
            </Tab.Navigator>
            {backClickCount == 1
                ?
                <View style={styles.exitWrapStyle}>
                    <Text style={{ ...Fonts.whiteColor12Medium }}>
                        Press Back Once Again to Exit
                    </Text>
                </View>
                :
                null}
        </>
    );
}

const styles = StyleSheet.create({
    exitWrapStyle: {
        backgroundColor: "#333333",
        position: "absolute",
        bottom: 20,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default BottomTabBarScreen;