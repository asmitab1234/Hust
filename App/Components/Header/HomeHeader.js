import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppTextInput, Icon, StatusBar, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const HomeHeader = () => {
    const colors = useTheme()
    return (
        <View>
            <StatusBar backgroundColor={colors.pageBackgroundColor} barStyle='dark-content' />
            <View
                style={styles.rowView}>
                <Pressable
                    onPress={() => NavigationService.navigate('Profile')}>
                    <Image
                        source={require('../../Assets/home/profile.png')}
                        style={styles.imgStyl}
                    />
                </Pressable>
                <AppTextInput
                    placeholder='Search'
                    inputStyle={styles.textStyl}
                    inputContainerStyle={styles.inputContainer}
                    leftIcon={{
                        name: 'search1',
                        type: 'AntDesign'
                    }}
                />

                <Image
                    source={require('../../Assets/home/bell.png')}
                    style={styles.notify}
                />
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(17),
        marginBottom: moderateScale(5)
    },
    imgStyl: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(40)
    },
    textStyl: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(14)
    },
    inputContainer: {
        height: moderateScale(38),
        width: moderateScale(235),
        borderRadius: moderateScale(40),
        backgroundColor: '#FFFFFF',
        // borderWidth:0
    },
    notify: {
        height: moderateScale(30),
        width: moderateScale(30)
    }
})