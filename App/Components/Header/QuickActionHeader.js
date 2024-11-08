import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppBar, StatusBar, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'

const QuickActionHeader = ({ title = ' ' }) => {
    const colors = useTheme()
    return (
        <AppBar.Back
            icon={{
                name: 'close',
                type: 'AntDesign',
                size: moderateScale(23)
            }}
            onLeftIconPress={() => NavigationService.back()}
            title={title}
            titleStyle={{
                ...styles.titleStyle,
                color: colors.buttonColor
            }}
            titlePosition='middle'
        />
    )
}

export default QuickActionHeader

const styles = StyleSheet.create({
    titleStyle: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(20)
    }
})