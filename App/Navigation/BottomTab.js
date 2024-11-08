import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import { Image, StyleSheet } from 'react-native';
import { Icon, useTheme } from 'react-native-basic-elements';
import Upgrade from '../Screens/Upgrade/Upgrade';
import Invite from '../Screens/Invite/Invite';
import { FONTS } from '../Constants/Fonts';
import { moderateScale } from '../Constants/PixelRatio';

const Tab = createBottomTabNavigator();

function BottomTab() {
    const colors = useTheme()
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: FONTS.Poppins.regular,
                    fontSize: moderateScale(12),
                    // marginBottom: moderateScale(5)
                },
                tabBarInactiveTintColor: '#939393',
                tabBarActiveTintColor: colors.buttonColor
            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name='home'
                            type='Entypo'
                            style={styles.bottomImg}
                            color={focused ? colors.buttonColor : '#939393'}
                        />
                    )
                }}
                name="Home" component={Home}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Upgrade',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name='arrow-up-circle'
                            type='Feather'
                            style={styles.bottomImg}
                            color={focused ? colors.buttonColor : '#939393'}
                        />
                    )
                }}
                name="Upgrade" component={Upgrade}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Invite',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            source={require('../Assets/home/invite.png')}
                            style={styles.bottomImg}
                            tintColor={focused ? colors.buttonColor : '#939393'}
                        />
                    )
                }}
                name="Invite"
                component={Invite}
            />


        </Tab.Navigator>
    );
}
export default BottomTab
const styles = StyleSheet.create({
    bottomImg: {
        height: moderateScale(22),
        width: moderateScale(22)
    }
})