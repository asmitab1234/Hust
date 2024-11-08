import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const CountryComponent = ({ item }) => {
    const colors = useTheme()
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical:moderateScale(10)
            }}>
            <Image
                source={item.img}
                style={styles.flag}
            />
            <Text
                style={styles.balanceText}>
                {item.country}
            </Text>

        </View>
    )
}

export default CountryComponent

const styles = StyleSheet.create({
    flag: {
        height: moderateScale(50),
        width: moderateScale(50),
        marginRight: moderateScale(10)
    },
    balanceText: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(15)
    },
})