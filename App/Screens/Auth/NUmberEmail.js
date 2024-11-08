import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { AppButton, AppTextInput, Container, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
const { height, width } = Dimensions.get('window')
import RNPhoneInput from "react-native-phone-number-input";
import NavigationService from '../../Services/Navigation'

const NUmberEmail = () => {
    const colors = useTheme()
    const [formattedValue, setFormattedValue] = useState("");
    const [value, setValue] = useState("");
    const phoneInput = useRef(null);
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
                        Your Phone Number and{'\n'}
                        Email
                    </Text>

                    <Text
                        style={{
                            ...styles.textStyl,
                            color: '#120E2B'
                        }}>
                        Please Enter Your Mobile Number and .
                        Email A  Verification Code Will be Sent
                    </Text>

                    <RNPhoneInput
                        ref={phoneInput}
                        defaultValue={value}
                        defaultCode="IN"
                        layout="first"
                        onChangeText={(text) => {
                            setValue(text);
                        }}
                        onChangeFormattedText={(text) => {
                            setFormattedValue(text);
                        }}
                        withDarkTheme
                        withShadow
                        autoFocus
                        containerStyle={{
                            ...styles.inputBox,
                            borderRadius: moderateScale(10),
                            height: moderateScale(45)
                        }}
                        textContainerStyle={{
                            width: '80%',
                            height: '100%',
                            borderRadius: moderateScale(10),
                            paddingVertical: 0,
                            marginHorizontal: moderateScale(2)
                        }}
                        countryPickerButtonStyle={{
                            borderRightWidth: 1,
                        }}
                        textInputProps={{
                            placeholderTextColor: '#999'
                        }}
                    />

                    <AppTextInput
                        title='Email'
                        inputStyle={styles.textStyl}
                        titleStyle={styles.textStyl}
                        inputContainerStyle={styles.inputContainerStyle}
                        mainContainerStyle={{
                            marginVertical: moderateScale(8)
                        }}
                    />

                    <AppButton
                        title='Continue'
                        textStyle={{
                            ...styles.buttonText,
                            color: colors.secondaryFontColor
                        }}
                        style={styles.buttonStyl}
                        onPress={() => NavigationService.navigate('Otp')}
                    />

                </View>
            </ScrollView>
        </Container>
    )
}

export default NUmberEmail

const styles = StyleSheet.create({
    logoBox: {
        height: height / 3,
        width: width * 1.4,
        borderBottomLeftRadius: width,
        borderBottomRightRadius: width,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden",
        alignSelf: "center"
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
        marginTop: moderateScale(20)
    },
    inputBox: {
        // borderWidth: moderateScale(1),
        // height: moderateScale(70),
        alignSelf: 'center',
        // backgroundColor: 'transparent',
        justifyContent: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: moderateScale(8),
        marginVertical: moderateScale(8)
    },
})