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
import { Colors, Fonts, Sizes } from "../../../constants/styles";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Snackbar } from "react-native-paper";
import training from "../../../api/trainings";
import { Heading } from "native-base";

const API = training
const { width, height } = Dimensions.get("window");
const IMG = require("../../../assets/images/workout/workout1.png");
var workoutStepsList = [];

const ExercicesDetailScreen = ({ navigation, route }) => {
  const item = route.params.item;

  useEffect(() => {
    console.log(item);
    return () => {};
  });

  const [exercices, setExercices] = useState([]);
  const [exercicesD, setExercicesD] = useState([]);

  const [state, setState] = useState({
    showSnackBar: false,
    isFavorite: false,
  });

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
          <View className="mx-5">
            <Heading>Instructions </Heading>
          </View>
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
    return <Text className="m-4">{item.instructions}</Text>;
  }

  function workoutDetailInfo() {
    return (
      <View
        style={{
          marginBottom: Sizes.fixPadding * 2.0,
          marginHorizontal: Sizes.fixPadding * 2.0,
        }}
      >
        <Text style={{ ...Fonts.blackColor12SemiBold }} className="my-2">
          Equipement: {item?.equipment} - Niveau : {item?.difficulty}
        </Text>
        <Text style={{ ...Fonts.blackColor12SemiBold }} className="my-2">
          Niveau : {item?.difficulty}
        </Text>
        <Text style={{ ...Fonts.blackColor12SemiBold }} className="my-2">
          Muscle ciblé : {item?.muscle?.name}
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
          <Image source={IMG} style={styles.workoutImageStyle} />
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

export default ExercicesDetailScreen;
