import React, { useEffect, useState } from "react";
import {
  Animated,
  View,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { Colors, Fonts, Sizes } from "../../../constants/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";
import { Snackbar } from "react-native-paper";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import training from "../../../api/trainings";
import { Heading } from "native-base";
const API = training
const { width } = Dimensions.get("window");

var recettesList = [
  
];

var trainingsList = [];

const rowSwipeAnimatedValues = {};
Array(trainingsList.length + 1)
  .fill("")
  .forEach((_, i) => {
    rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
  });

const NosTrainingsScreen = ({ navigation }) => {
  useEffect(() => {
    getTrainingFetch();
    return () => {
      getTrainingFetch();
    };
  }, []);

  const [showSnackBar, setShowSnackBar] = useState(false);

  const [listData, setListData] = useState(trainingsList);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => id === rowKey);
    newData.splice(prevIndex, 1);
    setShowSnackBar(true);
    setListData(newData);
  };

  const onSwipeValueChange = (swipeData) => {
    const { key, value } = swipeData;
    rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  };

  const renderItem = (data) => (
    <TouchableHighlight
      style={{ backgroundColor: Colors.bodyBackColor }}
      activeOpacity={0.9}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.push("WorkoutDetail", { item: data })}
        style={styles.favoriteWorkoutsWrapStyle}
      >
        <View style={{ padding: Sizes.fixPadding }}>
          <Text
            style={{
              marginBottom: Sizes.fixPadding - 7.0,
              ...Fonts.blackColor14Medium,
            }}
          >
            {data.name}
          </Text>
          {data.description ? (
            <Text
              style={{
                marginBottom: Sizes.fixPadding - 7.0,
                ...Fonts.blackColor12Regular,
              }}
            >
              {data.description}
            </Text>
          ) : null}
          <Text style={{ ...Fonts.blackColor12SemiBold }}>0 Min - 0 level</Text>
        </View>
        <Image source={img} style={styles.favoriteWorkoutImageStyle} />
      </TouchableOpacity>
    </TouchableHighlight>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={{ alignItems: "center", flex: 1 }}>
      <TouchableOpacity
        style={styles.backDeleteContinerStyle}
        onPress={() => deleteRow(rowMap, data.id)}
      >
        <Animated.View
          style={[
            {
              transform: [
                {
                  scale: rowSwipeAnimatedValues[data.id].interpolate({
                    inputRange: [45, 90],
                    outputRange: [0, 1],
                    extrapolate: "clamp",
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
            style={{ alignSelf: "center" }}
          />
          <Text style={{ ...Fonts.whiteColor13Regular }}>Delete</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );

  async function getTrainingFetch() {

    API.getTrainings().then((response) => {
      trainingsList.length = 0

      var all = response.filter((element) => element.userId !== "ERJHGFGH-FGHJK")
      trainingsList.push(...all);
      setListData(...response);
      console.log("Categories:", trainingsList?.length, trainingsList);
    });
  }

  return (
    <View style={{ flex: 1 }}>
      {listData.length == 0 ? (
        noDataInfo()
      ) : (
        <ScrollView className="m-5">
          <Heading >Nos programmes certifiés </Heading>
          <Text  fontSize="xs" className="py-5">Retrouvez et choissisez les meilleurs programmes adaptés a votre profil</Text>
          
          
          <View style={{ flex: 1 }}>
            {trainingsList.map((item) => {
              return (
                // <>
                // <Text>{item.name}</Text>
                // </>

                <View key={`${item.id}`} className="border border-spacing-2 border-cyan-700 rounded m-2">
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() =>
                      navigation.push("WorkoutDetail", { item: item })
                    }
                    style={styles.suggestedWorkoutsWrapStyle}
                  >
                    <View style={{ padding: Sizes.fixPadding }}>
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
                      {/* <Text style={{ ...Fonts.blackColor12SemiBold }}>
                                        {item.workoutMinute} Min - {item.workoutLevel} level
                                    </Text> */}
                      <MaterialIcons
                        name={item.isFavorite ? "favorite" : "favorite-border"}
                        color={Colors.blackColor}
                        size={20}
                        style={{
                          alignSelf: "flex-start",
                          marginTop: Sizes.fixPadding - 5.0,
                        }}
                        onPress={() => updateSuggestedWorkouts({ id: item.id })}
                      />
                    </View>
                    <Image
                      source={item.image}
                      style={styles.suggestedWorkoutImageStyle}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      )}
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <MaterialIcons
          name="favorite-border"
          size={30}
          color={Colors.grayColor}
        />
        <Text
          style={{
            ...Fonts.grayColor14Medium,
            marginTop: Sizes.fixPadding - 5.0,
          }}
        >
          Favorite workout list is empty
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  favoriteWorkoutsWrapStyle: {
    backgroundColor: Colors.whiteColor,
    elevation: 3.0,
    borderRadius: Sizes.fixPadding,
    height: 110.0,
    marginBottom: Sizes.fixPadding * 3.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
  },
  favoriteWorkoutImageStyle: {
    position: "absolute",
    bottom: 0.0,
    right: 0.0,
    width: width / 1.9,
    height: 100.0,
  },
  snackBarStyle: {
    position: "absolute",
    bottom: -10.0,
    left: -10.0,
    right: -10.0,
    backgroundColor: "#333333",
  },
  backDeleteContinerStyle: {
    alignItems: "center",
    bottom: 25.0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 100,
    backgroundColor: Colors.primaryColor,
    right: 0,
  },
});

export default NosTrainingsScreen;
