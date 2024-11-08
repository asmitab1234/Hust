import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { AppButton, AppTextInput, Container, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
const { height, width } = Dimensions.get('window')
import RNPhoneInput from "react-native-phone-number-input";
import NavigationService from '../../Services/Navigation'
import OtpInputs from 'react-native-otp-inputs'

const Otp = () => {
    const colors = useTheme()

    return (
        <Container>
            <StatusBar backgroundColor={'transparent'} barStyle='dark-content' translucent={true} />
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        ...styles.logoBox,
                        backgroundColor: colors.buttonColor
                    }}>
                    <Image
                        source={require('../../Assets/logo.png')}
                        style={styles.logoStyl}
                    />
                </View>
                <View
                    style={styles.AccountBox}>
                    <Text
                        style={{
                            ...styles.heading,
                            color: colors.buttonColor
                        }}>
                        One time Passcode
                    </Text>

                    <Text
                        style={{
                            ...styles.textStyl,
                            color: '#120E2B'
                        }}>
                        Please enter the code we’ve sent to
                        +1 8667897657
                    </Text>

                    <OtpInputs
                        handleChange={(code) => console.log(code)}
                        numberOfInputs={5}
                        inputContainerStyles={{
                            backgroundColor: '#F2F2F2',
                            paddingHorizontal: moderateScale(10),
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: moderateScale(7),
                            borderWidth: moderateScale(1),
                            borderColor: colors.buttonColor,
                            marginVertical: moderateScale(8)
                        }}
                    />

                    <Text
                        style={{
                            ...styles.textStyl,
                            color: colors.buttonColor,
                            textAlign:'center',
                            marginVertical:moderateScale(8)
                        }}>
                        Resend Code in 00:60 Seconds
                    </Text>

                    <AppButton
                        title='Continue'
                        textStyle={{
                            ...styles.buttonText,
                            color: colors.secondaryFontColor
                        }}
                        style={styles.buttonStyl}
                        onPress={() => NavigationService.navigate('UserName')}
                    />

                </View>
            </ScrollView>
        </Container>
    )
}

export default Otp

const styles = StyleSheet.create({
    logoBox: {
        height: height / 3,
        width: width*1.4,
        borderBottomLeftRadius: width,
        borderBottomRightRadius: width,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden",
        alignSelf:"center"
    },
    logoStyl: {
        height: moderateScale(300),
        width: moderateScale(300),
        //   marginTop:moderateScale(10)
    },
    AccountBox: {
        paddingHorizontal: moderateScale(8),
        paddingVertical: moderateScale(10),
        backgroundColor: '#FFFFFF',
        elevation: 4,
        marginHorizontal: moderateScale(15),
        borderRadius: moderateScale(10),
        position: 'absolute',
        width: '90%',
        top: moderateScale(180)
    },
    heading: {
        fontFamily: FONTS.Poppins.semiBold,
        fontSize: moderateScale(19)
    },
    textStyl: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(14)
    },
    inputContainerStyle: {
        borderWidth: 0,
        backgroundColor: '#F6F6F6',
        height: moderateScale(45)
    },
    buttonText: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(16)
    },
    buttonStyl: {
        height: moderateScale(45),
        borderRadius: moderateScale(60),
        marginTop: moderateScale(30)
    },
})