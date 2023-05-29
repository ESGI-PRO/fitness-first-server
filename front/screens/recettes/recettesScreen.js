import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

  return (
    <SafeAreaView>
      <View>
          <Text style={{paddingTop: 50}}>Mes Recettes</Text>
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




