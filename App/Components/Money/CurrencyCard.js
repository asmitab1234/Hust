import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const CurrencyCard = ({ item }) => {
    const colors = useTheme()
    return (
        <Pressable
            onPress={() => NavigationService.navigate('Deposit')}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: moderateScale(8),
                // borderWidth:1
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
        </Pressable>
    )
}

export default CurrencyCard

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