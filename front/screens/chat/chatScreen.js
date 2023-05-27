import React from 'react';
import { SafeAreaView, View, StatusBar, StyleSheet, Text, FlatList, TouchableOpacity, Image, } from "react-native";
import { Colors, Fonts, Sizes } from '../../constants/styles';

const chatsDataList = [
    {
        id: '1',
        trainerImage: require('../../assets/images/trainer/trainer1.png'),
        trainerName: 'Shilpa Patel',
        lastMessage: 'Lorem ipsum sit amet.',
        messageTime: '11:40 am',
    },
    {
        id: '2',
        trainerImage: require('../../assets/images/users/user1.png'),
        trainerName: 'Tiya Taylor',
        lastMessage: 'Lorem ipsum sit amet.',
        messageTime: '1 day ago',
    },
    {
        id: '3',
        trainerImage: require('../../assets/images/users/user2.png'),
        trainerName: 'Peter Johnson',
        lastMessage: 'Lorem ipsum sit amet.',
        messageTime: '1 day ago',
    },
    {
        id: '4',
        trainerImage: require('../../assets/images/users/user3.png'),
        trainerName: 'Suzein Smith',
        lastMessage: 'Lorem ipsum sit amet.',
        messageTime: '2 day ago',
    },
    {
        id: '5',
        trainerImage: require('../../assets/images/users/user4.png'),
        trainerName: 'Amenda Doe',
        lastMessage: 'Lorem ipsum sit amet.',
        messageTime: '3 day ago',
    },
    {
        id: '6',
        trainerImage: require('../../assets/images/users/user5.png'),
        trainerName: 'Russeil Taylor',
        lastMessage: 'Lorem ipsum sit amet.',
        messageTime: '3 day ago',
    },
    {
        id: '7',
        trainerImage: require('../../assets/images/users/user6.png'),
        trainerName: 'John Doe',
        lastMessage: 'Lorem ipsum sit amet.',
        messageTime: '3 day ago',
    },
]

const ChatScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                {chats()}
            </View>
        </SafeAreaView>
    )

    function chats() {

        const renderItem = ({ item }) => (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.push('Message', { item: item })}
                    style={{ flexDirection: 'row', justifyContent: 'space-between', }}
                >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
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
                                {item.lastMessage}
                            </Text>
                        </View>
                    </View>
                    <Text style={{ ...Fonts.blackColor13Medium }}>
                        {item.messageTime}
                    </Text>
                </TouchableOpacity>
                <View
                    style={{ height: 1.0, marginVertical: Sizes.fixPadding + 10.0, backgroundColor: Colors.grayColor }}
                />
            </View>
        )
        return (
            <FlatList
                data={chatsDataList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding - 5.0 }}
            />
        )
    }

    function header() {
        return (
            <Text style={{ margin: Sizes.fixPadding * 2.0, ...Fonts.blackColor18SemiBold }}>
                Chats
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    trainerImageWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 4.0,
        width: 60.0,
        height: 60.0,
        borderRadius: 30.0,
    }
})

export default ChatScreen;


