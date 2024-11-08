import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const BankCard = ({ item }) => {
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
                <View>
                    <Text
                        style={styles.balanceText}>
                        {item.country}
                    </Text>
                    <Text
                        style={{
                            ...styles.balanceText,
                            fontSize: moderateScale(12),
                            color: '#797C7B'
                        }}>
                        {item.type}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default BankCard

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