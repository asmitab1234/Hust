import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ReferralLink from '../Screens/Invite/ReferralLink';
import Rewards from '../Screens/Invite/Rewards';
import { moderateScale } from '../Constants/PixelRatio';
import { FONTS } from '../Constants/Fonts';

const Tab = createMaterialTopTabNavigator();

function TopTab() {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: {
                fontSize: moderateScale(16),
                fontFamily:FONTS.Poppins.regular,
                textTransform:'none'
            },
            tabBarIndicatorStyle: {
                backgroundColor: '#000000', 
            },
        }}
        tan
        >
            <Tab.Screen name="Referral Link" component={ReferralLink} />
            <Tab.Screen name="Your Rewards" component={Rewards} />
        </Tab.Navigator>
    );
}
export default TopTab