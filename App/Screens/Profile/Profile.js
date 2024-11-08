import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, StatusBar, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import ProfileComponent from '../../Components/Profile/ProfileComponent'
const { height, width } = Dimensions.get('window')
const Profile = () => {
    const colors = useTheme()
    const profileArr = [
        {
            img: require('../../Assets/Profile/1.png'),
            title: 'Personal Information',
            handelClick:'PersonalInformation'
        },
        {
            img: require('../../Assets/Profile/1.png'),
            title: 'Account Status',
            type: 'On',
            handelClick:'ActiveStatus'
        },
        {
            img: require('../../Assets/Profile/2.png'),
            title: 'Refer a friend',
             handelClick:'Invite'
        },
        {
            img: require('../../Assets/Profile/3.png'),
            title: 'Notification',
        },
        {
            img: require('../../Assets/Profile/4.png'),
            title: 'Currency preference',
            handelClick:'CurrencyPreference'
        },
        {
            img: require('../../Assets/Profile/5.png'),
            title: 'Language',
            type: 'English'
        },
        {
            img: require('../../Assets/Profile/6.png'),
            title: 'Security',
        },
        {
            img: require('../../Assets/Profile/7.png'),
            title: 'Connected device',
        },
        {
            img: require('../../Assets/Profile/8.png'),
            title: 'Support',
        },
        {
            img: require('../../Assets/Profile/9.png'),
            title: 'Live support chat',
        },
        {
            img: require('../../Assets/Profile/10.png'),
            title: 'FAQ',
        },
        {
            img: require('../../Assets/Profile/11.png'),
            title: 'Condition of use',
        },
        {
            img: require('../../Assets/Profile/12.png'),
            title: 'LOG OUT',
        },
    ]
    return (
        <Container>
            <StatusBar barStyle='dark-content' backgroundColor={'transparent'} translucent={true} />
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        ...styles.roundBox,
                        backgroundColor: colors.buttonColor
                    }}>
                    <Image
                        source={require('../../Assets/home/profile.png')}
                        style={styles.profileImg}
                    />
                    <Text
                        style={{
                            ...styles.nameText,
                            color: colors.secondaryFontColor,
                            marginBottom: moderateScale(55),
                            marginTop: moderateScale(10)
                        }}>
                        lorem ipsum
                    </Text>
                </View>

                {profileArr.map((item, index) => (
                    <ProfileComponent
                        key={index}
                        item={item}
                    />
                ))}

            </ScrollView>
        </Container>
    )
}

export default Profile

const styles = StyleSheet.create({
    roundBox: {
        height: height / 3,
        width: width*1.4,
        borderBottomLeftRadius: width,
        borderBottomRightRadius: width,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden",
        alignSelf:"center"
    },
    profileImg: {
        height: moderateScale(100),
        width: moderateScale(100),
        marginTop: 100,
        borderRadius: moderateScale(100)
    },
    nameText: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(18)
    }
})