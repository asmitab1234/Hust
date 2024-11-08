import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { AppButton, AppTextInput, Container, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
const { height, width } = Dimensions.get('window')
import NavigationService from '../../Services/Navigation'

const UserName = () => {
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
                        Select a Username
                    </Text>

                    <Text
                        style={{
                            ...styles.textStyl,
                            color: '#120E2B'
                        }}>
                        This is now other hust Users can lind You
                        and Send You Payments
                    </Text>

                    <AppTextInput
                        title='Username'
                        inputStyle={styles.textStyl}
                        titleStyle={styles.textStyl}
                        inputContainerStyle={styles.inputContainerStyle}
                        mainContainerStyle={{
                            marginVertical: moderateScale(8)
                        }}
                    />
                    <Text
                        style={{
                            ...styles.textStyl,
                            color: '#F90707'
                        }}>
                        This Usename is taken
                    </Text>
                    <Text
                        style={{
                            ...styles.textStyl,
                            color: '#3F9709'
                        }}>
                        This Usename is Avaliable
                    </Text>

                    <AppButton
                        title='Continue'
                        textStyle={{
                            ...styles.buttonText,
                            color: colors.secondaryFontColor
                        }}
                        style={styles.buttonStyl}
                        onPress={() => NavigationService.navigate('Verification')}
                    />

                </View>
            </ScrollView>
        </Container>
    )
}

export default UserName

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
})