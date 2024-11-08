import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const CardTransactionComponent = ({ item }) => {
    const colors = useTheme()
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: moderateScale(8)
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <Image
                    source={item.img}
                    style={styles.flag}
                />

                <Text
                    style={{
                        ...styles.balanceText,
                        color: '#797C7B'
                    }}>
                    {item.title}
                </Text>


            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        ...styles.balanceText,
                        color: '#797C7B'
                    }}>
                    {item.cash}
                </Text>
                <Icon
                    name='chevron-small-right'
                    type='Entypo'
                    style={{ marginLeft: moderateScale(5) }}
                />
            </View>
        </View>
    )
}

export default CardTransactionComponent

const styles = StyleSheet.create({
    flag: {
        height: moderateScale(50),
        width: moderateScale(50),
        marginRight: moderateScale(10)
    },
    balanceText: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(13)
    },
})