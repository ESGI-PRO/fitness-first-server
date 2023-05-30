import React from "react";
import { SafeAreaView, View, StatusBar, FlatList, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Colors, Fonts, Sizes, } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';

const trainersList = [
    {
        id: '1',
        trainerImage: require('../../assets/images/trainer/trainer1.png'),
        trainerName: 'Shilpa Patel',
        trainerSpeciality: 'Yoga Trainer',
    },
    {
        id: '3',
        trainerImage: require('../../assets/images/users/user2.png'),
        trainerName: 'Peter Johnson',
        trainerSpeciality: 'Fitness Trainer',
    },
    {
        id: '4',
        trainerImage: require('../../assets/images/users/user3.png'),
        trainerName: 'Suzein Smith',
        trainerSpeciality: 'Fitness Trainer',
    },
    {
        id: '2',
        trainerImage: require('../../assets/images/users/user1.png'),
        trainerName: 'Tiya Taylor',
        trainerSpeciality: 'Yoga Trainer',
    },
    {
        id: '6',
        trainerImage: require('../../assets/images/users/user5.png'),
        trainerName: 'Russeil Taylor',
        trainerSpeciality: 'Muscale Trainer',
    },
    {
        id: '5',
        trainerImage: require('../../assets/images/users/user4.png'),
        trainerName: 'Amenda Doe',
        trainerSpeciality: 'Fitness Trainer',
    },
    {
        id: '7',
        trainerImage: require('../../assets/images/users/user6.png'),
        trainerName: 'John Doe',
        trainerSpeciality: 'Muscale Trainer',
    },
];

const TrainersScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                {trainers()}
            </View>
        </SafeAreaView>
    )

    function trainers() {
        const renderItem = ({ item }) => (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.push('TrainerDetail', { item: item })}
                    style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
                >
                    <View style={styles.trainerImageWrapStyle}>
                        <Image
                            source={item.trainerImage}
                            style={{ width: 60.0, height: 60.0, borderRadius: 30.0, }}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: Sizes.fixPadding, }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor18Medium }}>
                            {item.trainerName}
                        </Text>
                        <Text style={{ ...Fonts.grayColor13Regular }}>
                            {item.trainerSpeciality}
                        </Text>
                    </View>
                </TouchableOpacity>
                <View
                    style={{ height: 1.0, marginVertical: Sizes.fixPadding + 10.0, backgroundColor: Colors.grayColor }}
                />
            </View>
        )
        return (
            <FlatList
                data={trainersList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: Sizes.fixPadding, paddingTop: Sizes.fixPadding - 5.0 }}
            />
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons
                    name="arrow-back-ios"
                    size={22}
                    color={Colors.blackColor}
                    onPress={() => navigation.pop()}
                />
                <Text style={{ marginLeft: Sizes.fixPadding + 5.0, ...Fonts.blackColor18SemiBold }}>
                    My Trainer
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: Sizes.fixPadding * 2.0,
        backgroundColor: Colors.lightWhiteColor,
        elevation: 3.0,
    },
});

export default TrainersScreen;