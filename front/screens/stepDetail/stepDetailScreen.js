import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Dimensions,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from "@expo/vector-icons";
import Dialog from "react-native-dialog";

const { width } = Dimensions.get("window");

const StepDetailScreen = ({ navigation, route }) => {
  const item = route.params.item;

  useEffect(() => {
    console.log("StepDetailScreen", item);

    return () => {
        console.log("StepDetailScreen", item);
    }
  }, [])

  const [state, setState] = useState({
    showReadyDialog: false,
  });

  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  const { showReadyDialog } = state;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <View style={{ flex: 1 }}>
        {header()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {exerciseImageWithName()}
          {exerciseDetail()}
          {stepNumberInfo()}
        </ScrollView>
      </View>
      {startNowButton()}
      {readyDialog()}
    </SafeAreaView>
  );

  function readyDialog() {
    return (
      <Dialog.Container
        visible={showReadyDialog}
        contentStyle={styles.dialogWrapStyle}
        headerStyle={{ margin: 0.0 }}
        onRequestClose={() => {
          updateState({ showReadyDialog: false });
        }}
      >
        <View style={{ backgroundColor: "white", alignItems: "center" }}>
          <Text style={{ ...Fonts.blackColor16SemiBold }}>Are you Ready?</Text>
          <Text
            style={{
              marginVertical: Sizes.fixPadding,
              textAlign: "center",
              ...Fonts.grayColor13Regular,
            }}
          >
            Are you excited to start workout feel the energy inside you, focus
            on your today's goal, visiulise your dream body ads lets start
          </Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              updateState({ showReadyDialog: false });
              navigation.push("StartExercise");
            }}
            style={styles.readyButtonStyle}
          >
            <Text style={{ ...Fonts.whiteColor18Bold }}>Yes, I'm Ready</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => updateState({ showReadyDialog: false })}
            style={styles.holdOnButtonStyle}
          >
            <Text style={{ ...Fonts.primaryColor18Bold }}>No Hold On</Text>
          </TouchableOpacity>
        </View>
      </Dialog.Container>
    );
  }

  function startNowButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => updateState({ showReadyDialog: true })}
        style={styles.startNowButtonStyle}
      >
        <Text style={{ ...Fonts.whiteColor18Bold }}>Start Now</Text>
      </TouchableOpacity>
    );
  }

  function stepNumberInfo() {
    return (
      <Text style={{ textAlign: "center", ...Fonts.blackColor16ExtraBold }}>
        {item.stepNumber} / {item.totalSteps}
      </Text>
    );
  }

  function exerciseDetail() {
    return (
      <View style={{ margin: Sizes.fixPadding * 2.0 }}>
        <Text
          key={`${item.infos.id}`}
          style={{
            marginBottom: Sizes.fixPadding,
            ...Fonts.grayColor13Regular,
          }}
        >
          {item.infos.id}. {item.infos?.instructions};{" "}
        </Text>
      </View>
    );
  }

  function exerciseImageWithName() {
    return (
      <View>
        <Image source={item.exerciseImage} style={styles.exerciseImageStyle} />
        <View style={styles.exerciseNameWrapStyle}>
          <Text style={{ ...Fonts.whiteColor14Medium }}>
            {item.stepNumber}. {item.exerciseName}
          </Text>
        </View>
      </View>
    );
  }

  function header() {
    return (
      <View style={{ padding: Sizes.fixPadding * 2.0 }}>
        <MaterialIcons
          name="arrow-back-ios"
          color={Colors.blackColor}
          size={22}
          onPress={() => navigation.pop()}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  exerciseImageStyle: {
    height: 180.0,
    width: "100%",
    alignSelf: "center",
    resizeMode: "contain",
  },
  exerciseNameWrapStyle: {
    backgroundColor: Colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Sizes.fixPadding,
  },
  startNowButtonStyle: {
    backgroundColor: Colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    margin: Sizes.fixPadding * 2.0,
    borderRadius: Sizes.fixPadding * 3.0,
    paddingVertical: Sizes.fixPadding + 2.0,
  },
  dialogWrapStyle: {
    borderRadius: Sizes.fixPadding + 5.0,
    width: width - 40,
    paddingTop: Sizes.fixPadding,
    paddingBottom: Sizes.fixPadding * 2.0,
    paddingHorizontal: Sizes.fixPadding + 5.0,
  },
  holdOnButtonStyle: {
    backgroundColor: Colors.whiteColor,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    borderRadius: Sizes.fixPadding * 2.5,
    paddingVertical: Sizes.fixPadding,
    borderColor: Colors.primaryColor,
    borderWidth: 1.0,
  },
  readyButtonStyle: {
    backgroundColor: Colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    borderRadius: Sizes.fixPadding * 2.5,
    paddingVertical: Sizes.fixPadding,
    marginVertical: Sizes.fixPadding * 2.0,
  },
});

export default StepDetailScreen;
