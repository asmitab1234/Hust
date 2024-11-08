import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'

const AddMoneyCard = ({ item }) => {
    const colors = useTheme()
    return (
        <View>
            <Text
                style={styles.heading}>
                {item.heading}
            </Text>
            <Pressable
                onPress={() => NavigationService.navigate(item.handelClick)}
                style={{
                    ...styles.box,
                    backgroundColor: colors.buttonColor
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
                <View>
                    <Text
                        style={{
                            ...styles.heading,
                            fontSize: moderateScale(15),
                            color: colors.secondaryFontColor
                        }}>
                        {item.title}
                    </Text>
                    <Text
                        style={{
                            fontFamily: FONTS.Poppins.light,
                            fontSize: moderateScale(12),
                            color: 'rgba(255, 255, 255, 0.8)'
                        }}>
                        {item.desc}
                    </Text>

                </View>
            </Pressable>
        </View>
    )
}

export default AddMoneyCard

const styles = StyleSheet.create({
    heading: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(18)
    },
    box: {
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(8),
        borderRadius: moderateScale(8),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(5),
        marginBottom: moderateScale(20)
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