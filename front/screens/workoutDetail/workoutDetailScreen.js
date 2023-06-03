import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Dimensions,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Snackbar } from "react-native-paper";
import training from "../../api/trainings";

const API = training
const { width, height } = Dimensions.get("window");

var workoutStepsList = [
  //   {
  //     id: "1",
  //     exerciseImage: require("../../assets/images/workout/workout4.png"),
  //     exerciseName: "Barbell Bench Press",
  //     burns: 6,
  //     time: "1 Min",
  //     stepNumber: 1,
  //   },
  //   {
  //     id: "2",
  //     exerciseImage: require("../../assets/images/workout/workout5.png"),
  //     exerciseName: "Barbell Back Squat",
  //     burns: 6,
  //     time: "1 Min",
  //     stepNumber: 2,
  //   },
  //   {
  //     id: "3",
  //     exerciseImage: require("../../assets/images/workout/workout6.png"),
  //     exerciseName: "Pull-Ups",
  //     burns: 6,
  //     time: "1 Min",
  //     stepNumber: 3,
  //   },
  //   {
  //     id: "4",
  //     exerciseImage: require("../../assets/images/workout/workout2.png"),
  //     exerciseName: "Lying Dumbell Hamstring Curls",
  //     burns: 6,
  //     time: "1 Min",
  //     stepNumber: 4,
  //   },
  //   {
  //     id: "5",
  //     exerciseImage: require("../../assets/images/workout/workout7.png"),
  //     exerciseName: "Standing Overhead Press",
  //     burns: 6,
  //     time: "1 Min",
  //     stepNumber: 5,
  //   },
  //   {
  //     id: "6",
  //     exerciseImage: require("../../assets/images/workout/workout8.png"),
  //     exerciseName: "Face Pulls",
  //     burns: 6,
  //     time: "1 Min",
  //     stepNumber: 6,
  //   },
  //   {
  //     id: "7",
  //     exerciseImage: require("../../assets/images/workout/workout9.png"),
  //     exerciseName: "Drag Curls",
  //     burns: 6,
  //     time: "1 Min",
  //     stepNumber: 7,
  //   },
  //   {
  //     id: "8",
  //     exerciseImage: require("../../assets/images/workout/workout10.png"),
  //     exerciseName: "Jumping Jacks",
  //     burns: 6,
  //     time: "1 Min",
  //     stepNumber: 8,
  //   },
  //   {
  //     id: "9",
  //     exerciseImage: require("../../assets/images/workout/workout11.png"),
  //     exerciseName: "Soulder Rotation",
  //     burns: 6,
  //     time: "1 Min",
  //     stepNumber: 9,
  //   },
];

const WorkoutDetailScreen = ({ navigation, route }) => {
  const item = route.params.item;

  useEffect(() => {
    getStarded();

    return () => {
      getStarded();
    };
  } , []);

  const [exercices, setExercices] = useState([]);
  const [exercicesD, setExercicesD] = useState([]);

  const [state, setState] = useState({
    showSnackBar: false,
    isFavorite: false,
  });

  function getStarded() {
    workoutStepsList.length = 0;

    console.log(item?.trainingOnExercices)

    item?.trainingOnExercices?.forEach((item, i) => {
      console.log(i)
      API.getExerciceByID(item.exerciceId).then((exercice) => {
        var v = {
          id: item.exerciceId,
          exerciseImage: require(`../../assets/images/workout/workout4.png`),
          exerciseName: exercice.name,
          burns: item.repetition,
          series: item.series,
          time: "1 Min",
          stepNumber: i + 1,
          infos: { ...exercice },
        };

        workoutStepsList.push(v);
      });
    });
  }

  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  const { showSnackBar, isFavorite } = state;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <View style={{ flex: 1 }}>
        {header()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {workoutInfo()}
          {workoutDetailInfo()}
          {workoutSteps()}
        </ScrollView>
      </View>
      <Snackbar
        visible={showSnackBar}
        onDismiss={() => updateState({ showSnackBar: false })}
        style={styles.snackBarStyle}
      >
        {isFavorite
          ? `${item.workoutName} Add To Favorite List.`
          : `${item.workoutName} Remove From Favorite List.`}
      </Snackbar>
    </SafeAreaView>
  );

  function workoutSteps() {
    return (
      <View>
        {workoutStepsList.map((items) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.push("StepDetail", { item: {...items , totalSteps: item.trainingOnExercices?.length} })}
            key={items.id}
            style={styles.workoutStepsWrapStyle}
          >
            <View style={styles.workoutStepsDetailWrapStyle}>
              <Image
                source={items.exerciseImage}
                style={{
                  width: width / 4.5,
                  height: height / 8.0,
                }}
              />
              <View>
                <Text style={{ ...Fonts.blackColor13Medium }}>
                  {items.exerciseName}
                </Text>
                <Text style={{ ...Fonts.grayColor13Regular }}>
                  Repetitons : {items.burns}
                </Text>
                <Text style={{ ...Fonts.grayColor13Regular }}>
                  Series : {items.series}
                </Text>
                <Text style={{ ...Fonts.grayColor13Regular }}>
                  Temps par series : {items.time}
                </Text>
              </View>
            </View>
            <View style={{ justifyContent: "space-between" }}>
              <Text
                style={{
                  paddingHorizontal: Sizes.fixPadding,
                  paddingVertical: Sizes.fixPadding - 5.0,
                  ...Fonts.blackColor10Bold,
                }}
              >
                Step:{items.stepNumber}
              </Text>
              <View style={styles.workoutStepForwardArrowWrapStyle}>
                <MaterialIcons
                  name="arrow-forward"
                  color={Colors.whiteColor}
                  size={22}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  function workoutDetailInfo() {
    return (
      <View
        style={{
          marginBottom: Sizes.fixPadding * 2.0,
          marginHorizontal: Sizes.fixPadding * 2.0,
        }}
      >
        <Text style={{ ...Fonts.blackColor13Medium }}>
          {item.trainingOnExercices?.length > 1
            ? `${item.trainingOnExercices?.length} Exercices`
            : `${item.trainingOnExercices?.length} Exercice`}{" "}
          • 9 Minutes • 54 Calories • Beginner
        </Text>
        <Text
          style={{
            marginVertical: Sizes.fixPadding + 5.0,
            ...Fonts.grayColor13Regular,
          }}
        >
          {item.description}
        </Text>
        <View
          style={{
            height: 3.0,
            backgroundColor: Colors.primaryColor,
            width: "25%",
          }}
        />
      </View>
    );
  }

  function workoutInfo() {
    return (
      <View style={{ overflow: "hidden", paddingBottom: 5 }}>
        <View style={styles.workoutsWrapStyle}>
          <View style={{ paddingHorizontal: Sizes.fixPadding * 2.0 }}>
            <Text
              style={{
                marginBottom: Sizes.fixPadding - 7.0,
                ...Fonts.blackColor14Medium,
              }}
            >
              {item.name}
            </Text>
            {item.description ? (
              <Text
                style={{
                  marginBottom: Sizes.fixPadding - 7.0,
                  ...Fonts.blackColor12Regular,
                }}
              >
                {item.description}
              </Text>
            ) : null}
            <Text style={{ ...Fonts.blackColor12SemiBold }}>
              0 Min - 0 level
            </Text>
            <MaterialIcons
              name={isFavorite ? "favorite" : "favorite-border"}
              color={Colors.blackColor}
              size={20}
              style={{
                alignSelf: "flex-start",
                marginTop: Sizes.fixPadding - 5.0,
              }}
              onPress={() =>
                updateState({ isFavorite: !isFavorite, showSnackBar: true })
              }
            />
          </View>
          <Image src={item.image} style={styles.workoutImageStyle} />
        </View>
      </View>
    );
  }

  function header() {
    return (
      <View style={styles.headerWrapStyle}>
        <MaterialIcons
          name="arrow-back-ios"
          color={Colors.blackColor}
          size={22}
          onPress={() => navigation.pop()}
        />
        <Ionicons
          name="share-social-outline"
          size={22}
          color={Colors.blackColor}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headerWrapStyle: {
    backgroundColor: Colors.whiteColor,
    padding: Sizes.fixPadding * 2.0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  workoutsWrapStyle: {
    backgroundColor: Colors.whiteColor,
    elevation: 4.0,
    borderBottomLeftRadius: Sizes.fixPadding + 2.0,
    borderBottomRightRadius: Sizes.fixPadding + 2.0,
    height: 110.0,
    marginBottom: Sizes.fixPadding * 2.0,
  },
  workoutImageStyle: {
    position: "absolute",
    bottom: 0.0,
    right: 0.0,
    width: width / 1.9,
    height: 100.0,
  },
  snackBarStyle: {
    position: "absolute",
    bottom: -10.0,
    elevation: 0.0,
    left: -10.0,
    right: -10.0,
    backgroundColor: "#333333",
  },
  workoutStepsWrapStyle: {
    marginHorizontal: Sizes.fixPadding * 2.0,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.whiteColor,
    elevation: 2.0,
    borderRadius: Sizes.fixPadding + 5.0,
    marginBottom: Sizes.fixPadding * 2.0,
  },
  workoutStepsDetailWrapStyle: {
    flex: 1,
    paddingVertical: Sizes.fixPadding + 3.0,
    flexDirection: "row",
    alignItems: "center",
  },
  workoutStepForwardArrowWrapStyle: {
    backgroundColor: Colors.primaryColor,
    borderBottomRightRadius: Sizes.fixPadding + 5.0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    paddingVertical: Sizes.fixPadding - 4.0,
    paddingHorizontal: Sizes.fixPadding - 4.0,
  },
});

export default WorkoutDetailScreen;
