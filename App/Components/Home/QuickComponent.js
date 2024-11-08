import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const QuickComponent = ({ item }) => {
    const colors = useTheme()
    return (
        <Pressable
            onPress={() => NavigationService.navigate(item.handelClick)}
            style={{
                ...styles.actionBox,
                backgroundColor: colors.buttonColor
            }}>
            <Image
                source={item.img}
                style={styles.imgStyl}
            />
            <Text
                style={{
                    ...styles.balanceText,
                    color: colors.secondaryFontColor
                }}>
                {item.title}
            </Text>
        </Pressable>
    )
}

export default QuickComponent

const styles = StyleSheet.create({
    actionBox: {
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(10),
        borderRadius: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgStyl: {
        height: moderateScale(20),
        width: moderateScale(20),
        marginRight: moderateScale(5)
    },
    balanceText: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(15)
    },
})