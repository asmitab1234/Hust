import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import NavigationService from '../../Services/Navigation'

const ChooseTypeComponent = ({ item }) => {
    const colors = useTheme()
    return (
        <Pressable
            onPress={() => NavigationService.navigate(item.handelClick)}
            style={{
                ...styles.balanceCard,
                marginVertical: moderateScale(10)
            }}>
            <View>
                <Text
                    style={{
                        ...styles.textStyl,
                        color: '#263238'
                    }}>
                    {item.title}
                </Text>
                <Text
                    style={styles.textStyl}>
                    {item.type}
                </Text>
            </View>
            <Icon
                name='chevron-small-down'
                type='Entypo'
            />
        </Pressable>
    )
}

export default ChooseTypeComponent

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