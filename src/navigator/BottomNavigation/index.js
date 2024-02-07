import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeScreen from '../../screens/Home';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../common/styles/color';
import { FontFamily } from '../../common/styles/font';
import { Images } from '../../common/styles/image';

const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Search" component={HomeScreen} options={{
                header: (props) => (
                    <View style={styles.headerStyle}>
                        <Text style={styles.title}>Hello Renzo!</Text>
                        <Text style={styles.description}>Are you ready to dance?</Text>
                    </View>
                ),
                tabBarIcon: () => (
                    <Image style={styles.tabBarIconStyle} source={Images.search} />
                ),
                tabBarLabelStyle: {
                    color: Colors.black,
                    fontSize: 10,
                    fontFamily: FontFamily.RobotoRegular
                }
            }} />
            <Tab.Screen name="Events" component={HomeScreen} options={{
                header: (props) => (
                    <View style={styles.headerStyle}>
                        <Text style={styles.title}>Hello Renzo!</Text>
                        <Text style={styles.description}>Are you ready to dance?</Text>
                    </View>
                ),
                tabBarIcon: () => (
                    <Image style={styles.tabBarIconStyle} source={Images.calendar} />
                ),
                tabBarLabelStyle: {
                    color: Colors.black,
                    fontSize: 10,
                    fontFamily: FontFamily.RobotoRegular,
                }
            }} />
            <Tab.Screen name="Favourites" component={HomeScreen} options={{
                header: (props) => (
                    <View style={styles.headerStyle}>
                        <Text style={styles.title}>Hello Renzo!</Text>
                        <Text style={styles.description}>Are you ready to dance?</Text>
                    </View>
                ),
                tabBarIcon: () => (
                    <Image style={styles.tabBarIconStyle} source={Images.heart} />
                ),
                tabBarLabelStyle: {
                    color: Colors.black,
                    fontSize: 10,
                    fontFamily: FontFamily.RobotoRegular
                }
            }} />
            <Tab.Screen name="Profile" component={HomeScreen} options={{
                header: (props) => (
                    <View style={styles.headerStyle}>
                        <Text style={styles.title}>Hello Renzo!</Text>
                        <Text style={styles.description}>Are you ready to dance?</Text>
                    </View>
                ),
                tabBarIcon: () => (
                    <Image style={styles.tabBarIconStyle} source={Images.user} />
                ),
                tabBarLabel: "Profile",
                tabBarLabelStyle: {
                    color: Colors.black,
                    fontSize: 10,
                    fontFamily: FontFamily.RobotoRegular
                }
            }} />
        </Tab.Navigator>
    )
}

export default BottomNavigation;

const styles = StyleSheet.create({
    tabBarIconStyle: { height: 24, width: 24 },
    headerStyle: { backgroundColor: Colors.white, padding: 20 },
    title: { color: Colors.black, fontSize: 26, fontFamily: FontFamily.GothicA1SemiBold },
    description: { color: "#747474", fontSize: 16, fontFamily: FontFamily.GothicA1Regular }
})