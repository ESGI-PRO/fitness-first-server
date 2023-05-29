import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Snackbar } from "react-native-paper";
import axios from "axios";
import training from "../../api/trainings";
import { Box } from "native-base";
import { TouchableOpacityBase } from "react-native";
const { width, height } = Dimensions.get("window");

const trainingsAPI = training;
const topWorkoutsList = [];

const categoriesList = [
  {
    id: "1",
    categoryName: "Yoga",
    categoryImage: require("../../assets/images/category/category1.png"),
    bgColor: "#E3F2FD",
  },
];

const exercicesList = [];

const topTrainersList = [];

const WorkoutScreen = ({ navigation }) => {
  const [state, setState] = useState({
    showSnackBar: false,
    snackBarMsg: null,
    topWorkouts: topWorkoutsList,
  });

  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  const { showSnackBar, snackBarMsg, topWorkouts } = state;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <View style={{ flex: 1 }}>
        {header()}
        <FlatList
          ListHeaderComponent={
            <>
              {topWorkoutsInfo()}
              {categoriesInfo()}
              {exercicesInfo()}
              {premiumInfo()}
              {topTrainersInfo()}
            </>
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0 }}
        />
      </View>
      <Snackbar
        visible={showSnackBar}
        onDismiss={() => updateState({ showSnackBar: false })}
        style={styles.snackBarStyle}
      >
        {snackBarMsg}
      </Snackbar>
    </SafeAreaView>
  );

  function topTrainersInfo() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.push("TrainerDetail", { item: item })}
        style={styles.topTrainerInfoWrapStyle}
      >
        <Image source={item.trainerImage} style={styles.topTrainerImageStyle} />
        <View
          style={{
            ...styles.topTrainerDetailWrapStyle,
            backgroundColor: item.bgColor,
          }}
        >
          <Text numberOfLines={1} style={{ ...Fonts.blackColor12Regular }}>
            {item.trainerName}
          </Text>
          <Text numberOfLines={1} style={{ ...Fonts.blackColor10Regular }}>
            {item.trainerSpeciality}
          </Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <View>
        <Text
          style={{
            marginHorizontal: Sizes.fixPadding * 2.0,
            marginBottom: Sizes.fixPadding + 9.0,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          Top Trainers
        </Text>
        <FlatList
          data={topTrainersList}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: Sizes.fixPadding * 2.0,
            paddingRight: Sizes.fixPadding - 5.0,
          }}
        />
      </View>
    );
  }

  function premiumInfo() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.push("PremiumPlans")}
      >
        <ImageBackground
          source={require("../../assets/images/premium_banner.png")}
          style={styles.premiumInfoBackImageStyle}
          borderRadius={Sizes.fixPadding + 5.0}
        >
          <Text style={{ textAlign: "center", ...Fonts.whiteColor16SemiBold }}>
            {`GO PREMIUM\nGET UNLIMITED ACCESS`}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  function viewDetail(item) {
    console.log("view: ", item);
  }

  async function getExercicesFetch() {
    trainingsAPI.getExercices().then((response) => {
      response.forEach((it) => {
        exercicesList.push({
          categoryName: it.name,
          categoryImage: require("../../assets/images/category/category1.png"),
          bgColor: "#E3F2FD",
          ...it,
        });
      });
    });
  }

  function exercicesInfo() {
    const list = [];

    useEffect(() => {
      getExercicesFetch();

      return () => {
        getExercicesFetch();
      };
    }, []);

    const renderItem = ({ item }) => (
      <View
        style={{
          backgroundColor: item.bgColor,
          ...styles.categoryInfoWrapStyle,
        }}
        key={`${item.id}`}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.push("ExerciceDetail", { item: item })}
          style={styles.topWorkoutsWrapStyle}
        >
          <Image
            source={item.categoryImage}
            style={styles.categoryImageStyle}
          />
          <Text style={{ textAlign: "center", ...Fonts.blackColor14SemiBold }}>
            {item.categoryName}
          </Text>
        </TouchableOpacity>
      </View>
    );

    return (
      <View className="my-3">
        <Text
          style={{
            marginHorizontal: Sizes.fixPadding * 2.0,
            marginBottom: Sizes.fixPadding + 10.0,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          Exercices
        </Text>
        <FlatList
          data={exercicesList}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingLeft: Sizes.fixPadding * 2.0,
            paddingRight: Sizes.fixPadding - 5.0,
          }}
        />
      </View>
    );
  }

  function categoriesInfo() {
    const renderItem = ({ item }) => (
      <View
        style={{
          backgroundColor: item.bgColor,
          ...styles.categoryInfoWrapStyle,
        }}
      >
        <Image source={item.categoryImage} style={styles.categoryImageStyle} />
        <Text style={{ textAlign: "center", ...Fonts.blackColor14SemiBold }}>
          {item.categoryName}
        </Text>
      </View>
    );
    return (
      <View>
        <Text
          style={{
            marginHorizontal: Sizes.fixPadding * 2.0,
            marginBottom: Sizes.fixPadding + 10.0,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          Categories
        </Text>
        <FlatList
          data={exercicesList}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingLeft: Sizes.fixPadding * 2.0,
            paddingRight: Sizes.fixPadding - 5.0,
          }}
        />
      </View>
    );
  }

  function updateTopWorkouts({ id }) {
    const newList = topWorkouts.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, isFavorite: !item.isFavorite };
        updateState({
          showSnackBar: true,
          snackBarMsg: updatedItem.isFavorite
            ? `${updatedItem.workoutName} Add To Favorite List.`
            : `${updatedItem.workoutName} Remove From Favorite List`,
        });
        return updatedItem;
      }
      return item;
    });
    updateState({ topWorkouts: newList });
  }

  function getWorkouts() {
    trainingsAPI.getTrainings().then((response) => {
      response.forEach((item) => {
        if (item.userId !== "ERJHGFGH-FGHJK") {
          topWorkoutsList.push({
            id: item.id,
            workoutImage: require("../../assets/images/workout/workout1.png"),
            workoutName: item.name,
            workoutDescription: item.description,
            workoutMinute: 9,
            workoutLevel: 9,
            isFavorite: false,
            ...item,
          });
        }
      });
    });
  }

  function topWorkoutsInfo() {
    useEffect(() => {
      getWorkouts();
      return () => {
        getWorkouts();
      };
    });
    return (
      <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
        <Text
          style={{
            marginBottom: Sizes.fixPadding * 2.0,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          Top Workouts
        </Text>
        {topWorkouts.map((item, i) => (
          <View
            key={`${item.id}`}
            className={i > 2 ? "hidden" : ""}
          >
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.push("WorkoutDetail", { item: item })}
              style={styles.topWorkoutsWrapStyle}
            >
              <View style={{ padding: Sizes.fixPadding }}>
                <Text
                //   style={{
                //     marginBottom: Sizes.fixPadding - 7.0,
                //     ...Fonts.blackColor14Medium,
                //   }}
                  style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                >
                  {item.workoutName}
                </Text>
                {/* {item.workoutDescription ? (
                  <Text
                    style={{
                      marginBottom: Sizes.fixPadding - 7.0,
                      ...Fonts.blackColor12Regular,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: 20,
                    }}
                  >
                    {item.workoutDescription}
                  </Text>
                ) : null} */}
                <Text style={{ ...Fonts.blackColor12SemiBold }}>
                  {item.workoutMinute} Min - {item.workoutLevel} level
                </Text>
                <MaterialIcons
                  name={item.isFavorite ? "favorite" : "favorite-border"}
                  color={Colors.blackColor}
                  size={20}
                  style={{
                    alignSelf: "flex-start",
                    marginTop: Sizes.fixPadding - 5.0,
                  }}
                  onPress={() => updateTopWorkouts({ id: item.id })}
                />
              </View>
              <Image
                source={item.workoutImage}
                style={styles.topWorkoutImageStyle}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }

  function header() {
    return (
      <View style={styles.headerWrapStyle}>
        <Text style={{ ...Fonts.blackColor18SemiBold }}>Workout</Text>
        <MaterialIcons
          name="search"
          size={22}
          color="black"
          onPress={() => navigation.push("Search")}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headerWrapStyle: {
    margin: Sizes.fixPadding * 2.0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topWorkoutsWrapStyle: {
    backgroundColor: Colors.whiteColor,
    elevation: 3.0,
    borderRadius: Sizes.fixPadding,
    height: height / 6.1,
    marginBottom: Sizes.fixPadding * 2.0,
  },
  topWorkoutImageStyle: {
    position: "absolute",
    bottom: 0.0,
    right: 0.0,
    width: width / 1.9,
    height: 100.0,
  },
  categoryInfoWrapStyle: {
    borderRadius: Sizes.fixPadding + 5.0,
    width: width / 4.5,
    height: height / 7.9,
    marginRight: Sizes.fixPadding + 5.0,
  },
  categoryImageStyle: {
    width: width / 4.5,
    height: height / 7.9,
    position: "absolute",
    bottom: 0.0,
  },
  premiumInfoBackImageStyle: {
    height: 100.0,
    margin: Sizes.fixPadding * 2.0,
    alignItems: "center",
    justifyContent: "center",
  },
  topTrainerDetailWrapStyle: {
    paddingVertical: Sizes.fixPadding - 7.0,
    paddingHorizontal: Sizes.fixPadding - 5.0,
    borderBottomLeftRadius: Sizes.fixPadding + 5.0,
    borderBottomRightRadius: Sizes.fixPadding + 5.0,
  },
  topTrainerImageStyle: {
    width: width / 4.4,
    height: height / 11.2,
    borderTopLeftRadius: Sizes.fixPadding + 5.0,
    borderTopRightRadius: Sizes.fixPadding + 5.0,
  },
  topTrainerInfoWrapStyle: {
    width: width / 4.4,
    elevation: 2.0,
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding + 5.0,
    marginRight: Sizes.fixPadding + 5.0,
    marginVertical: Sizes.fixPadding - 9.0,
  },
  snackBarStyle: {
    position: "absolute",
    bottom: 55.0,
    elevation: 0.0,
    left: -10.0,
    right: -10.0,
    backgroundColor: "#333333",
  },
});

export default WorkoutScreen;
