import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack';
import { LogBox } from 'react-native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import LoadingScreen from "./components/loadingScreen";
import BottomTabBarScreen from "./components/bottomTabBarScreen";
import SearchScreen from "./screens/search/searchScreen";
import WorkoutDetailScreen from "./screens/workoutDetail/workoutDetailScreen";
import StepDetailScreen from "./screens/stepDetail/stepDetailScreen";
import StartExerciseScreen from "./screens/startExercise/startExerciseScreen";
import TakeRestScreen from "./screens/takeRest/takeRestScreen";
import TrainerDetailScreen from "./screens/trainerDetail/trainerDetailScreen";
import MessageScreen from "./screens/message/messageScreen";
import PremiumPlansScreen from "./screens/premiumPlans/premiumPlansScreen";
import HealthTipsDetailScreen from "./screens/healthTipsDetail/healthTipsDetailScreen";
import EditProfileScreen from "./screens/editProfile/editProfileScreen";
import TrainersScreen from "./screens/trainers/trainersScreen";
import FavoriteListScreen from "./screens/favoriteList/favoriteListScreen";
import NotificationsScreen from "./screens/notifications/notificationsScreen";
import GoalScreen from "./screens/goal/goalScreen";
import SplashScreen from "./screens/splashScreen";
import OnboardingScreen from "./screens/onboarding/onboardingScreen";
import LoginRegisterScreen from "./screens/auth/loginRegisterScreen";
import RecettesScreen from './screens/recettes/recettesScreen';

LogBox.ignoreAllLogs();

const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} options={{ ...TransitionPresets.DefaultTransition }} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="LoginRegister" component={LoginRegisterScreen} options={{ ...TransitionPresets.DefaultTransition }} />
        <Stack.Screen name="BottomTabBar" component={BottomTabBarScreen} options={{ ...TransitionPresets.DefaultTransition }} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="WorkoutDetail" component={WorkoutDetailScreen} />
        <Stack.Screen name="StepDetail" component={StepDetailScreen} />
        <Stack.Screen name="StartExercise" component={StartExerciseScreen} />
        <Stack.Screen name="TakeRest" component={TakeRestScreen} />
        <Stack.Screen name="TrainerDetail" component={TrainerDetailScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="PremiumPlans" component={PremiumPlansScreen} />
        <Stack.Screen name="HealthTipsDetail" component={HealthTipsDetailScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen}
          sharedElements={(route) => {
            const id = route.params.id;
            return [id];
          }}
        />
        <Stack.Screen name="Trainers" component={TrainersScreen} />
        <Stack.Screen name="FavoriteList" component={FavoriteListScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        {/* Recettes */}
        <Stack.Screen name="Recettes" component={RecettesScreen} />
        {/* Recettes */}
        <Stack.Screen name="Goal" component={GoalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;