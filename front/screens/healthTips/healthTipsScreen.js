import React, { useEffect, useState } from "react";
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
import { MaterialIcons } from "@expo/vector-icons";
import { Snackbar } from "react-native-paper";

import nutrition from "../../api/nutrition";
import { Button } from "native-base";

const nutritionAPI = nutrition;
const healthTipsList = [];

const HealthTipsScreen = ({ navigation }) => {
  const [state, setState] = useState({
    healthTips: healthTipsList,
    showSnackBar: false,
    snackBarMsg: null,
  });

  const [recettes, setRecettes] = useState([]);

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

  async function getRecettes() {
    await nutritionAPI.getRecettes().then((response) => {
      response.forEach((element) => {
        healthTipsList.push({
          healthTipImage: require("../../assets/images/tips/tip1.png"),
          healthTip: element.title,
          healthTipDetail: "",
          // "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
          isFavorite: false,
          ...element,
        });
      });
    });
  }

  function healthTipsInfo() {
    useEffect(() => {
      getRecettes();

      return () => {
        getRecettes();
      };
    }, []);
    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.push("HealthTipsDetail", { item: item })}
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
        data={healthTipsList}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
      />
    );
  }

  function header() {
    return (
      <View>
        <View className="flex flex-row justify-around items-center ">
          <Text
            style={{
              margin: Sizes.fixPadding * 2.0,
              ...Fonts.blackColor18SemiBold,
            }}
          >
            Nos recettes
          </Text>

          <Button rounded colorScheme="orange" onPress={() => navigation.push('AddRecettes')} success>
            <Text className="text-white border border-rounded bg-orange rounded-lg">+</Text>
          </Button>
        </View>

        <Text
          style={{
            margin: Sizes.fixPadding * 2.0,
          }}
          fontSize="xs"
          className="italic"
        >
          Retrouvez ici , l'ensemble de nos recettes de qualité dedié à chaque
          programme
        </Text>
      </View>
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

export default HealthTipsScreen;
