import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const ProfileComponent = ({ item }) => {
    const colors = useTheme()
    return (
        <Pressable
            hitSlop={10}
            onPress={() => NavigationService.navigate(item.handelClick)}
            style={styles.mainCard}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <View
                    style={{
                        ...styles.imgBox,
                        backgroundColor: '#CDC7F1'
                    }}>
                    <Image
                        source={item.img}
                        style={styles.flag}
                    />
                </View>
                <Text
                    style={styles.balanceText}>
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
                        fontSize: moderateScale(13)
                    }}>
                    {item.type}
                </Text>
                <Icon
                    name='chevron-small-right'
                    type='Entypo'
                    style={{ marginLeft: moderateScale(5) }}
                />
            </View>
        </Pressable>
    )
}

export default ProfileComponent

const styles = StyleSheet.create({
    flag: {
        height: moderateScale(22),
        width: moderateScale(22),
    },
    balanceText: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(14)
    },
    mainCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: moderateScale(8),
        marginHorizontal: moderateScale(15)
    },
    imgBox: {
        height: moderateScale(37),
        width: moderateScale(37),
        borderRadius: moderateScale(45),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: moderateScale(10)
    }
})