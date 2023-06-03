import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Animated,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { Colors, Fonts, Sizes } from "../../../constants/styles";
import { SwipeListView } from "react-native-swipe-list-view";
// import { Button, Snackbar } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  Button,
  Actionsheet,
  useDisclose,
  FormControl,
  TextArea,
  Box,
  Divider,
  Stack,
  Flex,
} from "native-base";
import { Input } from "@rneui/base";
import { Svg, Path } from "react-native-svg";
import training from "../../../api/trainings";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const API = training;
const healthTipsList = [
  {
    key: "1",
    healthTipImage: require("../../../assets/images/tips/tip1.png"),
    healthTip: "Be Active",
    healthTipDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
  {
    key: "2",
    healthTipImage: require("../../../assets/images/tips/tip2.png"),
    healthTip: "Avoid harmful use of alcohol",
    healthTipDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
];

var categoriesList = [
  // {
  //   id: "1",
  //   categoryName: "Yoga",
  //   categoryImage: require("../../../assets/images/category/category1.png"),
  //   bgColor: "#E3F2FD",
  // },
  // {
  //   id: "2",
  //   categoryName: "Strength training",
  //   categoryImage: require("../../../assets/images/category/category2.png"),
  //   bgColor: "#FFEBEE",
  // },
  // {
  //   id: "3",
  //   categoryName: "Balance exrcises",
  //   categoryImage: require("../../../assets/images/category/category3.png"),
  //   bgColor: "#E8F5E9",
  // },
  // {
  //   id: "4",
  //   categoryName: "Stretching",
  //   categoryImage: require("../../../assets/images/category/category4.png"),
  //   bgColor: "#EDE7F6",
  // },
];

const rowSwipeAnimatedValues = {};

Array(healthTipsList.length + 1)
  .fill("")
  .forEach((_, i) => {
    rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
  });

const TrainingAddScreen = ({ navigation }) => {
  const [showSnackBar, setShowSnackBar] = useState(false);

  const [listData, setListData] = useState(healthTipsList);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
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
        onPress={() => navigation.push("HealthTipsDetail", { item: data.item })}
        style={styles.healthTipsInfoWrapStyle}
      >
        <Image
          source={data.item.healthTipImage}
          style={styles.healthTipImageStyle}
        />
        <View
          style={{
            flex: 1,
            paddingVertical: Sizes.fixPadding - 5.0,
            paddingHorizontal: Sizes.fixPadding,
          }}
        >
          <Text
            style={{
              marginBottom: Sizes.fixPadding - 8.0,
              ...Fonts.blackColor14SemiBold,
            }}
          >
            {data.item.healthTip}
          </Text>
          <Text style={{ ...Fonts.grayColor13Regular }}>
            {data.item.healthTipDetail}
          </Text>
        </View>
      </TouchableOpacity>
    </TouchableHighlight>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={{ alignItems: "center", flex: 1 }}>
      <TouchableOpacity
        style={styles.backDeleteContinerStyle}
        onPress={() => deleteRow(rowMap, data.item.key)}
      >
        <Animated.View
          style={[
            {
              transform: [
                {
                  scale: rowSwipeAnimatedValues[data.item.key].interpolate({
                    inputRange: [45, 100],
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

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editExos, setEditExos] = useState({});

  const [exercicesSelected, setExercices] = useState([]);

  const [durationStart, setDurationStart] = useState(new Date());
  const [durationEnd, setDurationEnd] = useState(new Date());
  const { isOpen, onOpen, onClose } = useDisclose();

  const handleFormSubmit = async () => {
    // Vous pouvez traiter les informations saisies ici
    var values = {
      name,
      description,
      durationStart,
      durationEnd,
      category: 5,
      userId: "ERJHGFGH-FGHJK",
      image:
        "https://randomwordgenerator.com/img/picture-generator/53e1d04a4c5aa414f1dc8460962e33791c3ad6e04e5074417c2b79d59448cc_640.jpg",
      listExercices: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      trainingOnExercices: {
        create: exercicesSelected,
      },
    };
    console.log(values);

    await axios.post("http://localhost:8000/training/", values).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    // console.values;
  };

  async function getExercicesFetch() {
    categoriesList.length === 0;
    API.getExercices().then((response) => {
      categoriesList.push(...response);
    });
  }

  const addOrRemoveExercices = (item) => {
    const id = item.id;
    const elementPlus = {
      exerciceId: id,
      series: 0,
      repetition: 0,
    };

    var condition = exercicesSelected.find((element) => element.id === id);

    if (!condition) {
      console.log("id " + id + " ajouté ");

      // console.log([...exercicesSelected, elementPlus])
      setEditExos({ name: item.name, ...elementPlus });

      onOpen(true);
    } else {
      console.log("id " + id + " en cours de modification ");
      setEditExos(condition);
      onOpen(true);
    }
    console.log(
      "list des exos selectionnés " + JSON.stringify(exercicesSelected)
    );
  };

  function exercicesList() {
    useEffect(() => {
      getExercicesFetch();

      return () => {
        getExercicesFetch();
      };
    }, []);
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          ...styles.categoryInfoWrapStyle,
          backgroundColor: exercicesSelected.find(
            (element) => element.exerciceId === item.id
          )
            ? "green"
            : "white",
          width: width / 4,
        }}
        onPress={() => addOrRemoveExercices(item)}
        className="flex justify-center items-center align-center shadow-md"
      >
        <Text fontSize="xs">{item.name}</Text>

        {/* <Image source={item.categoryImage} style={styles.categoryImageStyle} /> */}
        {/* <Button
          style={{
            textAlign: "center",
            ...Fonts.blackColor14SemiBold,
            margin: 10,
            width: 80,
            textAlign: "center",
          }}
          className=" flex justify-center items-center"
          onPress={() => addOrRemoveExercices(item)}
        >
         
        </Button> */}
      </TouchableOpacity>
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
          Exercices ({exercicesSelected?.length} selectionnés){" "}
          {JSON.stringify(exercicesSelected)}
        </Text>

        <FlatList
          style={{
            flex: 1,
            // backgroundColor: "blue",
          }}
          data={categoriesList}
          horizontal={false}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{
            // backgroundColor: "yellow",
            paddingLeft: Sizes.fixPadding * 2.0,
            paddingRight: Sizes.fixPadding * 2.0,
          }}
        />
      </View>
    );
  }

  function DatesList() {
    return (
      <View>
        <Text
          style={{
            marginHorizontal: Sizes.fixPadding * 2.0,
            marginBottom: Sizes.fixPadding + 10.0,
            ...Fonts.blackColor16SemiBold,
            paddingTop: 20,
          }}
        >
          Date de debut du programme
        </Text>

        <View className="flex items-center w-full">
          <DateTimePicker
            className="mt-8 px-2"
            mode="date"
            value={durationStart}
            format="YYYY-MM-DD"
            minimumDate={new Date()}
            onDateChange={(text) => setDurationStart(text)}
          />
        </View>

        <Text
          style={{
            marginHorizontal: Sizes.fixPadding * 2.0,
            marginBottom: Sizes.fixPadding + 10.0,
            ...Fonts.blackColor16SemiBold,
            paddingTop: 20,
          }}
        >
          Date de fin du programme
        </Text>

        <View className="flex items-center w-full">
          <DateTimePicker
            className="m-8"
            style={{
              display: "flex",
            }}
            mode="date"
            format="YYYY-MM-DD"
            value={durationEnd}
            minimumDate={durationStart}
            onDateChange={(text) => setDurationEnd(text)}
            // maximumDate={new Date()}
          />
        </View>
      </View>
    );
  }

  function ActionsheetExercices() {
    const [series, setSeries] = useState(0);
    const [repetition, setRepetitions] = useState(0);

    useEffect(() => {
      console.log(editExos);
      setRepetitions(editExos.repetition);
      setSeries(editExos.series);
      return () => {
        setRepetitions(editExos.repetition);
        setSeries(editExos.series);
      };
    }, []);

    function addSeries() {
      console.log(series, repetition);
      var newArray = {
        exerciceId: editExos.exerciceId,
        series: Number(series),
        repetition: Number(repetition),
      };
      if (series && repetition) {
        if (
          !exercicesSelected.find(
            (element) => element.id === editExos.exerciceId
          )
        ) {
          setExercices([...exercicesSelected, newArray]);
          setEditExos(0);
          setSeries(0);
          setRepetitions(0);

          console.log("EXO AJOUTE ", exercicesSelected);
        } else {
          setEditExos(0);
          setSeries(0);
          setRepetitions(0);
          setExercices([
            ...exercicesSelected.filter(
              (element) => element.id !== editExos.exerciceId
            ),
            ...newArray,
          ]);
          console.log("EXO MODIFIER  : ", exercicesSelected);
        }

        onClose(true);
      }
    }

    function removeExercices(id) {
      console.log("id " + id + " supprimé ");
      const newArray = exercicesSelected.filter(
        (item) => item.exerciceId !== id
      );

      setExercices([...newArray]);
      setEditExos("");
      onClose(true);
    }

    return (
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content className="flex justify-start items-center">
          <Box>
            <Text className="font-bold text-center my-5">{editExos.name}</Text>
            <Box w="100%" maxWidth="300px">
              <Text bold fontSize="xl" mb="4">
                Series
              </Text>
              <FormControl mb="5" style={{ width: 300 }}>
                <FormControl.Label>
                  Combien de series pour cette exos ?{" "}
                </FormControl.Label>
                <Input
                  type="number"
                  placeholder="5"
                  value={editExos.series}
                  onChangeText={(text) => setSeries(text)}
                  selectionColor={Colors.primaryColor}
                />
                <FormControl.HelperText>
                  Tapez le nombre de series
                </FormControl.HelperText>
              </FormControl>
              <Divider />
            </Box>
          </Box>
          <Box>
            <Box w="100%" maxWidth="300px">
              <Text bold fontSize="xl" mb="4">
                Repetitions
              </Text>
              <FormControl mb="5" style={{ width: 300 }}>
                <FormControl.Label>
                  Combien de repetition pour cette exos ?
                </FormControl.Label>
                <Input
                  type="number"
                  placeholder="5"
                  value={editExos.repetition}
                  onChangeText={(text) => setRepetitions(text)}
                  selectionColor={Colors.primaryColor}
                />
                <FormControl.HelperText>
                  Choississez votre repetition
                </FormControl.HelperText>
              </FormControl>
              <Divider />
            </Box>
          </Box>

          <Box
            w="100%"
            maxWidth="300px"
            className="flex flex-row justify-between "
          >
            <Button colorScheme="green" onPress={addSeries}>
              Valider
            </Button>

            <Button
              colorScheme="red"
              onPress={() => removeExercices(editExos.exerciceId)}
            >
              Supprimer
            </Button>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {listData.length == 0 ? (
        noDataInfo()
      ) : (
        <ScrollView >
          <View className="flex m-5">
            <FormControl isRequired isInvalid={name?.length === 0} className="">
              <FormControl.Label>Nom </FormControl.Label>
              <Input
                placeholder="Nom de votre programme"
                value={name}
                onChangeText={(text) => setName(text)}
              />
              {/* <FormControl.HelperText>
                We'll keep this between us.
              </FormControl.HelperText> */}
              <FormControl.ErrorMessage>
                Something is wrong.
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl
              isRequired
              isInvalid={description?.length === 0}
              className=""
            >
              <FormControl.Label>Description</FormControl.Label>
              <TextArea
                shadow={2}
                h={20}
                placeholder="Decrivez votre programme ..."
                value={description}
                onChangeText={(text) => setDescription(text)}
                selectionColor={Colors.primaryColor}
                className="m-1"
                _light={{
                  placeholderTextColor: "trueGray.700",
                  bg: "coolGray.100",
                  _hover: {
                    bg: "coolGray.200",
                  },
                  _focus: {
                    bg: "coolGray.200:alpha.70",
                  },
                }}
                _dark={{
                  bg: "coolGray.800",
                  _hover: {
                    bg: "coolGray.900",
                  },
                  _focus: {
                    bg: "coolGray.900:alpha.70",
                  },
                }}
              />
              {/* <FormControl.HelperText>
                We'll keep this between us.
              </FormControl.HelperText> */}
              <FormControl.ErrorMessage>
                Something is wrong.
              </FormControl.ErrorMessage>
            </FormControl>

            {exercicesList()}

            {DatesList()}

            {ActionsheetExercices()}

            
          </View>
          <Button
              colorScheme="green"
              className="p-5 mt-7"
              onPress={handleFormSubmit}
            >
              Ajouter
            </Button>
        </ScrollView>
      )}
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
          Favorite health tips list is empty
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  healthTipsInfoWrapStyle: {
    borderRadius: Sizes.fixPadding,
    marginHorizontal: Sizes.fixPadding * 2.0,
    backgroundColor: Colors.whiteColor,
    elevation: 4.0,
    marginBottom: Sizes.fixPadding * 3.0,
  },
  categoryInfoWrapStyle: {
    borderRadius: Sizes.fixPadding + 5.0,
    width: width / 4.5,
    marginRight: Sizes.fixPadding + 5.0,
    marginVertical: 4,
    padding: Sizes.fixPadding
  },
  healthTipImageStyle: {
    height: 100.0,
    width: "100%",
    borderTopLeftRadius: Sizes.fixPadding,
    borderTopRightRadius: Sizes.fixPadding,
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

export default TrainingAddScreen;
