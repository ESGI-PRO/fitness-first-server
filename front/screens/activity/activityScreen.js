import React, { useState } from 'react';
import { SafeAreaView, View, Dimensions, StatusBar, ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Colors, Fonts, Sizes } from '../../constants/styles';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { LineChart, PieChart, } from "react-native-chart-kit";

const { width, height } = Dimensions.get('window');

const monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sup', 'Oct', 'Nov', 'Des'];

const daysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const dateObj = new Date();

const todayDate = `${daysList[dateObj.getUTCDay()]} ${dateObj.getUTCDate()} ${monthsList[dateObj.getUTCMonth()]}`;

const caloriesStepsAndRestData = [
    {
        value: 100,
        color: '#8F4024',
    },
    {
        value: 35,
        color: '#DBDBDB',
    },
    {
        value: 70,
        color: Colors.primaryColor,
    },
];

const ActivityScreen = ({ navigation }) => {

    const [state, setState] = useState({
        showCalender: false,
        selectedDate: `${daysList[dateObj.getUTCDay()]} ${dateObj.getUTCDate()} ${monthsList[dateObj.getUTCMonth()]}`,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        showCalender,
        selectedDate,
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0, }}
                >
                    {currentDateInfo()}
                    {caloriesStepsAndRestInfo()}
                    {dailyCaloriesInfoWithGraph()}
                    {weightRecordInfoWithGraph()}
                </ScrollView>
            </View>
            {calender()}
        </SafeAreaView>
    )

    function weightRecordInfoWithGraph() {

        const chartConfig = {
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            strokeWidth: 2,
            barPercentage: 0.5,
            useShadowColorFromDataset: false,
            propsForDots: {
                r: "3",
                strokeWidth: "0",
            }
        };

        const data = {
            datasets: [
                {
                    data: [100, 93, 78, 80, 70, 80, 75, 65, 75, 75, 70, 62],
                    color: (opacity = 1) => `rgba(250, 156, 122, ${opacity})`,
                }
            ],
        };

        return (
            <View style={styles.weightRecordInfoWithGraphWrapStyle}>
                <View style={{
                    paddingHorizontal: Sizes.fixPadding,
                    paddingTop: Sizes.fixPadding * 3.0,
                }}>
                    <Text style={{ ...Fonts.blackColor14SemiBold }}>
                        Weight Record
                    </Text>
                    <Text style={{ ...Fonts.grayColor13Regular }}>
                        52 kg
                    </Text>
                </View>
                <View style={{ flex: 1, overflow: 'hidden', height: height / 6.7, paddingVertical: Sizes.fixPadding - 5.0, }}>
                    <LineChart
                        data={data}
                        width={width / 1.9}
                        height={height / 8.0}
                        chartConfig={chartConfig}
                        withInnerLines={false}
                        withShadow={false}
                        withHorizontalLabels={false}
                        bezier
                        yAxisInterval={1}
                        style={{ marginHorizontal: 10, marginLeft: -20.0, }}
                    />
                </View>
            </View>
        )
    }

    function dailyCaloriesInfoWithGraph() {

        const caloriesData = [70, 40, 50, 20, 55, 80, 60];

        return (
            <View style={styles.dailyCaloriesInfoWithGraphWrapStyle}>
                <View style={{ flex: 1, paddingHorizontal: Sizes.fixPadding, paddingTop: Sizes.fixPadding * 3.0, }}>
                    <Text style={{ ...Fonts.blackColor14SemiBold }}>
                        Daily Calories Intake
                    </Text>
                    <Text style={{ ...Fonts.grayColor13Regular }}>
                        1256 Cal
                    </Text>
                </View>
                <View style={styles.caloriesChartOuterWrapStyle}>
                    {
                        caloriesData.map((item, index) => (
                            <View key={`${index}`} style={styles.dailyCaloriesChartWrapStyle}>
                                <View style={{
                                    ...styles.caloriesChartUnfillStandStyle,
                                    flex: ((100 - item) / 100),
                                    borderBottomLeftRadius: (((100 - item) / 100) == 1) ? Sizes.fixPadding * 3.0 : 0.0,
                                    borderBottomRightRadius: (((100 - item) / 100) == 1) ? Sizes.fixPadding * 3.0 : 0.0,
                                }} />
                                <View style={{
                                    ...styles.caloriesChartFillStandStyle,
                                    flex: (item / 100),
                                    borderTopLeftRadius: ((item / 100) == 1) ? Sizes.fixPadding * 3.0 : 0.0,
                                    borderTopRightRadius: ((item / 100) == 1) ? Sizes.fixPadding * 3.0 : 0.0
                                }} />
                            </View>
                        ))
                    }
                </View>
            </View>
        )
    }

    function caloriesStepsAndRestInfo() {

        const chartConfig = {
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2,
            barPercentage: 0.5,
            useShadowColorFromDataset: false
        };

        return (
            <View>
                <View style={{ marginTop: Sizes.fixPadding * 3.0, alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                        <PieChart
                            data={caloriesStepsAndRestData}
                            width={210}
                            height={210}
                            chartConfig={chartConfig}
                            accessor={"value"}
                            backgroundColor={"transparent"}
                            paddingLeft={"25"}
                            center={[20, -10]}
                            hasLegend={false}
                        />
                        <View style={styles.activeCaloriesAndTotalStepWrapStyle}>
                            <Text numberOfLines={1} style={{ ...Fonts.grayColor13Regular }}>
                                Active Calories
                            </Text>
                            <Text style={{ ...Fonts.blackColor14SemiBold }}>
                                568 Cal
                            </Text>
                            <Text numberOfLines={1} style={{ marginTop: Sizes.fixPadding, ...Fonts.grayColor13Regular }}>
                                Total Steps
                            </Text>
                            <Text style={{ ...Fonts.blackColor14SemiBold }}>
                                2,123
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', }}>
                    {pieChartLabel({ color: Colors.primaryColor, label: 'Calories' })}
                    {pieChartLabel({ color: '#8F4024', label: 'Steps' })}
                    {pieChartLabel({ color: '#DBDBDB', label: 'Rest' })}
                </View>
            </View >
        )
    }

    function pieChartLabel({ color, label }) {
        return (
            <View style={{ marginRight: Sizes.fixPadding, flexDirection: 'row', alignItems: 'center' }}>
                <View
                    style={{
                        width: 18.0,
                        height: 18.0,
                        borderRadius: 9.0,
                        backgroundColor: color,
                    }}
                />
                <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor14Medium }}>
                    {label}
                </Text>
            </View>
        )
    }

    function calender() {

        const onChange = (e, selectedDate) => {
            updateState({ selectedDate: `${daysList[selectedDate.getUTCDay()]} ${selectedDate.getUTCDate()} ${monthsList[selectedDate.getUTCMonth()]}`, showCalender: false })
        };

        return (
            showCalender && <DateTimePicker
                mode="date"
                onChange={onChange}
                value={new Date()}
                maximumDate={new Date()}
            />
        )
    }

    function currentDateInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                {
                    selectedDate == todayDate
                        ?
                        <Text style={{ ...Fonts.blackColor14SemiBold }}>
                            Today
                        </Text>
                        :
                        null
                }
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => updateState({ showCalender: true })}
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                    <Text style={{ ...Fonts.blackColor14SemiBold }}>
                        {selectedDate}
                    </Text>
                    <MaterialIcons
                        name='arrow-drop-down'
                        color={Colors.blackColor}
                        size={22}
                        style={{ marginLeft: Sizes.fixPadding - 5.0, }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function header() {
        return (
            <Text style={{ margin: Sizes.fixPadding * 2.0, ...Fonts.blackColor18SemiBold }}>
                My Activity
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    dailyCaloriesInfoWithGraphWrapStyle: {
        margin: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        backgroundColor: Colors.whiteColor,
        elevation: 4.0,
        borderRadius: Sizes.fixPadding,
    },
    weightRecordInfoWithGraphWrapStyle: {
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        backgroundColor: Colors.whiteColor,
        elevation: 4.0,
        borderRadius: Sizes.fixPadding,
    },
    activeCaloriesAndTotalStepWrapStyle: {
        position: 'absolute',
        width: 140,
        height: 140,
        borderRadius: 70.0,
        backgroundColor: Colors.whiteColor,
        left: 27.5,
        top: 25,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    dailyCaloriesChartWrapStyle: {
        marginHorizontal: Sizes.fixPadding - 6.0,
        flexDirection: 'column',
        width: 7.0,
        height: '100%',
        borderRadius: Sizes.fixPadding * 3.0
    },
    caloriesChartUnfillStandStyle: {
        backgroundColor: Colors.lightGrayColor,
        borderTopRightRadius: Sizes.fixPadding * 3.0,
        borderTopLeftRadius: Sizes.fixPadding * 3.0,
    },
    caloriesChartFillStandStyle: {
        backgroundColor: Colors.primaryColor,
        borderBottomLeftRadius: Sizes.fixPadding * 3.0,
        borderBottomRightRadius: Sizes.fixPadding * 3.0,
    },
    caloriesChartOuterWrapStyle: {
        flexDirection: 'row',
        paddingVertical: Sizes.fixPadding - 5.0,
        height: height / 6.9,
        flex: 1,
        justifyContent: 'flex-end',
        marginRight: Sizes.fixPadding,
    }
})

export default ActivityScreen;


