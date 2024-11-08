import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Container, Text, useTheme } from 'react-native-basic-elements'
import QuickActionHeader from '../../Components/Header/QuickActionHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const DebitCard = () => {
    const colors = useTheme()
    return (
        <Container>
            <QuickActionHeader title='Debit Card Deposit' />
            <View
                style={{ paddingHorizontal: moderateScale(15) }}>

                <Text
                    style={{
                        ...styles.heading,
                        marginTop: moderateScale(20)
                    }}>
                    New Card
                </Text>
                <Pressable
                    onPress={() => NavigationService.navigate('CardDetails')}
                    style={{
                        ...styles.box,
                        backgroundColor: colors.buttonColor
                    }}>
                    <View
                        style={styles.imgaeBox}>
                        <Image
                            source={require('../../Assets/Addmoney/credit-card.png')}
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
                            Add New Card
                        </Text>
                        <Text
                            style={{
                                fontFamily: FONTS.Poppins.light,
                                fontSize: moderateScale(12),
                                color: 'rgba(255, 255, 255, 0.8)'
                            }}>
                            With Visa and MasterCard
                        </Text>

                    </View>
                </Pressable>

            </View>

        </Container>
    )
}

export default DebitCard

const styles = StyleSheet.create({
    heading: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(18),
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