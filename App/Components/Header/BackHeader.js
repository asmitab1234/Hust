import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon, StatusBar, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const BackHeader = ({ title = ' ', newbox = false }) => {
    const colors = useTheme()
    return (
        <View>
            <StatusBar backgroundColor={colors.pageBackgroundColor} barStyle='dark-content' />

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: moderateScale(10),
                    marginHorizontal: moderateScale(8)
                }}>
                <Icon
                    name='chevron-small-left'
                    type='Entypo'
                    size={35}
                />

                {newbox ?
                    <Pressable
                        onPress={() => NavigationService.navigate(newbox)}
                        style={{
                            ...styles.newBox,
                            backgroundColor: colors.buttonColor
                        }}>
                        <Icon
                            name='plus'
                            type='AntDesign'
                            color={colors.secondaryFontColor}
                            style={{
                                marginRight: moderateScale(5)
                            }}
                            size={17}
                        />

                        <Text
                            style={{
                                ...styles.titleStyle,
                                color: colors.secondaryFontColor,
                                fontSize: moderateScale(15)
                            }}>
                            New
                        </Text>
                    </Pressable>
                    : null
                }

            </View>
            <Text
                style={{
                    ...styles.titleStyle,
                    color: colors.buttonColor,
                    marginHorizontal: moderateScale(18),
                    marginTop: moderateScale(5)
                }}>
                {title}
            </Text>

        </View>
    )
}

export default BackHeader

const styles = StyleSheet.create({
    titleStyle: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(20),
    },
    newBox: {
        height: moderateScale(30),
        width: moderateScale(90),
        borderRadius: moderateScale(30),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})