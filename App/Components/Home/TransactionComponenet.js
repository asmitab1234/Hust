import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const TransactionComponenet = ({ item }) => {
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
                <View
                    style={styles.flag}
                >
                    <Icon
                        name='arrow-down-left'
                        type='Feather'
                        size={35}
                    />
                </View>
                <View>
                    <Text
                        style={styles.balanceText}>
                        {item.title}
                    </Text>
                    <Text
                        style={{
                            ...styles.balanceText,
                            fontSize: moderateScale(12),
                            color: '#797C7B'
                        }}>
                        {item.date}
                    </Text>
                </View>
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

export default TransactionComponenet

const styles = StyleSheet.create({
    flag: {
        height: moderateScale(50),
        width: moderateScale(50),
        marginRight: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: moderateScale(10)
    },
    balanceText: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(13)
    },
})