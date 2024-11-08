import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const RecipentsComponent = ({ item }) => {
    return (
        <View
            style={{
                alignItems: 'center',
                marginHorizontal:moderateScale(10)
            }}>
            <Image
                source={item.img}
                style={styles.imgStyl}
            />
            <Text
                style={styles.balanceText}>
                {item.name}
            </Text>
        </View>
    )
}

export default RecipentsComponent

const styles = StyleSheet.create({
    imgStyl: {
        height: moderateScale(50),
        width: moderateScale(50),
        borderRadius: moderateScale(50)
    },
    balanceText: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(14)
    },
})