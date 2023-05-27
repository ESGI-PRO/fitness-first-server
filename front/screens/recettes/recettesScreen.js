import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { Snackbar } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { Button, Flex } from "native-base";

const healthTipsList = [
  {
    id: "1",
    healthTipImage: require("../../assets/images/tips/tip1.png"),
    healthTip: "Recette 1",
    healthTipDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    isFavorite: false,
  },
  {
    id: "2",
    healthTipImage: require("../../assets/images/tips/tip2.png"),
    healthTip: "Recette 2",
    healthTipDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    isFavorite: false,
  },
  {
    id: "3",
    healthTipImage: require("../../assets/images/tips/tip3.png"),
    healthTip: "Recette 3",
    healthTipDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    isFavorite: false,
  },
  {
    id: "4",
    healthTipImage: require("../../assets/images/tips/tip4.png"),
    healthTip: "Recette 4",
    healthTipDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    isFavorite: false,
  },
];

const RecettesScreen = ({ navigation }) => {
  const [state, setState] = useState({
    healthTips: healthTipsList,
    showSnackBar: false,
    snackBarMsg: null,
  });

  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  const { healthTips, showSnackBar, snackBarMsg } = state;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <View style={{ flex: 1 }}>
        {header()}

        {healthTipsInfo()}
      </View>
      <Snackbar
        visible={showSnackBar}
        onDismiss={() => updateState({ showSnackBar: false })}
        style={styles.snackBarStyle}
        elevation={0}
      >
        {snackBarMsg}
      </Snackbar>
    </SafeAreaView>
  );

  function updateHealthTips({ id }) {
    const newList = healthTips.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item, isFavorite: !item.isFavorite };
        updateState({
          showSnackBar: true,
          snackBarMsg: updatedItem.isFavorite
            ? `${updatedItem.healthTip} Add To Favorite List.`
            : `${updatedItem.healthTip} Remove From Favorite List`,
        });
        return updatedItem;
      }
      return item;
    });
    updateState({ healthTips: newList });
  }

  function healthTipsInfo() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.push("RecettesDetailsScreen", { item: item })}
        style={styles.healthTipsInfoWrapStyle}
      >
        <View>
          <Image
            source={item.healthTipImage}
            style={styles.healthTipImageStyle}
          />
          <MaterialIcons
            name={item.isFavorite ? "favorite" : "favorite-border"}
            color={Colors.primaryColor}
            size={24}
            style={{ position: "absolute", right: 5.0, top: 5.0 }}
            onPress={() => updateHealthTips({ id: item.id })}
          />
        </View>
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
            {item.healthTip}
          </Text>
          <Text style={{ ...Fonts.grayColor13Regular }}>
            {item.healthTipDetail}
          </Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <FlatList
        data={healthTips}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
      />
    );
  }

  function header() {
    return (
      <Flex direction="row" className="flex justify-between mx-2">
        <Text
          style={{
            margin: Sizes.fixPadding * 2.0,
            ...Fonts.blackColor18SemiBold,
          }}
        >
          Mes Recettes
        </Text>

        <Button
          colorScheme="primary"
          onPress={() => {
            console.log("hello");
          }}
        >
          Primary
        </Button>
      </Flex>
    );
  }
};

const styles = StyleSheet.create({
  snackBarStyle: {
    position: "absolute",
    bottom: -10.0,
    left: -10.0,
    right: -10.0,
    backgroundColor: "#333333",
  },
  healthTipsInfoWrapStyle: {
    borderRadius: Sizes.fixPadding,
    marginHorizontal: Sizes.fixPadding * 2.0,
    backgroundColor: Colors.whiteColor,
    elevation: 4.0,
    marginBottom: Sizes.fixPadding * 2.0,
  },
  healthTipImageStyle: {
    height: 100.0,
    width: "100%",
    borderTopLeftRadius: Sizes.fixPadding,
    borderTopRightRadius: Sizes.fixPadding,
  },
});

export default RecettesScreen;
