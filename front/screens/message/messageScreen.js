import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput, SafeAreaView, StatusBar } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Fonts, Colors, Sizes, } from "../../constants/styles";

const messagesData = [
    {
        id: '1',
        message: 'Hey Shilpa',
        time: '11:40 am',
        isSender: true,
    },
    {
        id: '2',
        message: `Hello Samantha\nHow may i help you?`,
        time: '11:42 am',
        isSender: false,
    },
    {
        id: '3',
        message: `Suggest some exercise for me`,
        time: '11:45 am',
        isSender: true,
    },
    {
        id: '4',
        message: `Sure, why not\njust give a minut i'll text you`,
        time: '11:48 am',
        isSender: false,
    },
]

const MessageScreen = ({ navigation, route }) => {

    const [messagesList, setMessagesList] = useState(messagesData);

    const item = route.params.item;

    function messages() {

        const renderItem = ({ item }) => {
            return (
                <View style={{
                    alignItems: item.isSender == true ? 'flex-end' : 'flex-start',
                    marginHorizontal: Sizes.fixPadding * 2.0,
                    marginVertical: Sizes.fixPadding,
                }}>
                    <View style={{
                        ...styles.messageWrapStyle,
                        backgroundColor: item.isSender == true ? Colors.primaryColor : '#D0D0D0',
                    }}>
                        <Text style={{
                            textAlign: item.isSender == true ? 'right' : 'left',
                            ...item.isSender == true ? { ...Fonts.whiteColor14Regular } : { ...Fonts.blackColor14Regular }
                        }}>
                            {item.message}
                        </Text>
                        <Text style={{
                            textAlign: 'right',
                            ...item.isSender == true ? { ...Fonts.whiteColor12Regular } : { ...Fonts.blackColor12Regular }
                        }}>
                            {item.time}
                        </Text>
                    </View>
                </View>
            )
        }

        return (
            <FlatList
                inverted
                data={messagesList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingVertical: Sizes.fixPadding * 2.0,
                    flexDirection: 'column-reverse'
                }}
            />
        )
    }

    function addMessage({ message }) {

        const oldMessages = messagesList;
        let date = Date();
        let hour = (new Date(date)).getHours();
        let minute = (new Date(date)).getMinutes();
        let AmPm = hour >= 12 ? 'pm' : 'am';
        let finalhour = hour >= 12 ? (hour - 12) : hour;

        const newMessage = {
            id: messagesList.length + 1,
            message: message,
            time: `${finalhour}:${minute} ${AmPm}`,
            isSender: true,
            isSeen: false,
        }

        oldMessages.push(newMessage);
        setMessagesList(oldMessages);
    }

    function typeMessage() {
        const [message, setMessage] = useState('');
        return (
            <View style={styles.bottomContainerStyle}>
                <View style={styles.textFieldWrapStyle}>
                    <TextInput
                        selectionColor={Colors.whiteColor}
                        value={message}
                        onChangeText={setMessage}
                        placeholder='Write your message'
                        style={{ ...Fonts.whiteColor12Medium, flex: 1, }}
                        placeholderTextColor={Colors.whiteColor}
                    />
                    <MaterialCommunityIcons
                        name="send"
                        size={16}
                        color={Colors.whiteColor}
                        onPress={() => {
                            if (message != '') {
                                addMessage({ message: message })
                                setMessage('');
                            }
                        }}
                    />
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <View style={{ flex: 1, }}>
                    {messages()}
                    {typeMessage()}
                </View>
            </View>
        </SafeAreaView>
    )

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons
                    name="arrow-back-ios"
                    size={22}
                    color={Colors.blackColor}
                    onPress={() => navigation.pop()}
                />
                <View style={{ flex: 1, marginLeft: Sizes.fixPadding + 5.0, }}>
                    <Text style={{ ...Fonts.blackColor18SemiBold, }}>
                        {item.trainerName}
                    </Text>
                    <Text style={{ ...Fonts.grayColor13Regular }}>
                        {item.trainerSpeciality ? item.trainerSpeciality : 'Yoga trainer'}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: Sizes.fixPadding - 5.0,
        paddingRight: Sizes.fixPadding * 2.0,
        margin: Sizes.fixPadding * 2.0,
    },
    messageWrapStyle: {
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding - 6.0,
        borderRadius: Sizes.fixPadding - 5.0,
    },
    bottomContainerStyle: {
        flexDirection: 'row',
        marginBottom: Sizes.fixPadding,
        alignItems: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
    },
    textFieldWrapStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding + 10.0,
        height: 40.0,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Sizes.fixPadding,
    },
    propertyImageContentStyle: {
        borderRadius: Sizes.fixPadding,
        height: 160.0,
        width: 130.0,
        backgroundColor: Colors.whiteColor,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 50,
        borderColor: 'rgba(128, 128, 128, 0.2)',
        borderWidth: 1.5,
        elevation: 3.0
    },
    viewMoreButtonStyle: {
        height: 31.0,
        width: 95.0,
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomSheetContentStyle: {
        flexDirection: 'row',
        backgroundColor: Colors.whiteColor,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingVertical: Sizes.fixPadding * 2.0
    }
})

export default MessageScreen;