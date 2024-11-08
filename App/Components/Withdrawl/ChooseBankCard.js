import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import NavigationService from '../../Services/Navigation'

const ChooseBankCard = ({ item }) => {
    const colors = useTheme()
    return (
        <Pressable
            onPress={() => NavigationService.navigate('ChooseCurrencyCountryRegion')}
            style={{
                ...styles.balanceCard,
                marginVertical: moderateScale(10)
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                <View
                    style={styles.imgaeBox}>
                    <Image
                        source={item.img}
                        style={styles.iconStyl}
                        tintColor={'#361FC1'}
                        resizeMode='contain'
                    />
                </View>
                <Text
                    style={styles.textStyl}>
                    {item.title}
                </Text>
            </View>
            <Icon
                name='chevron-small-right'
                type='Entypo'
            />
        </Pressable>
    )
}

export default ChooseBankCard

const styles = StyleSheet.create({
    textStyl: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(15)
    },
    balanceCard: {
        backgroundColor: '#FFFFFF',
        padding: moderateScale(10),
        elevation: 3,
        // marginVertical:moderateScale(8),
        borderRadius: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imgaeBox: {
        backgroundColor: '#9384EE',
        height: moderateScale(55),
        width: moderateScale(55),
        borderRadius: moderateScale(60),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: moderateScale(10)
    },
    iconStyl: {
        height: moderateScale(26),
        width: moderateScale(26)
    }
})