import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppButton, AppTextInput, Container, Icon, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
const { height, width } = Dimensions.get('window')

const SignUp = () => {
    const colors = useTheme()
    return (
        <Container>
            <StatusBar backgroundColor={'transparent'} barStyle='dark-content' translucent={true} />

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
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <Text
                        style={{
                            ...styles.heading,
                            color: colors.buttonColor
                        }}>
                        Create Account
                    </Text>

                    <Text
                        style={{
                            ...styles.textStyl,
                            color: '#120E2B'
                        }}>
                        Please enter your name on Your identity
                        document.
                    </Text>

                    <AppTextInput
                        title='First Name'
                        inputStyle={styles.textStyl}
                        titleStyle={styles.textStyl}
                        inputContainerStyle={styles.inputContainerStyle}
                        mainContainerStyle={{
                            marginVertical: moderateScale(8)
                        }}
                    />

                    <AppTextInput
                        title='Last Name'
                        inputStyle={styles.textStyl}
                        titleStyle={styles.textStyl}
                        inputContainerStyle={styles.inputContainerStyle}
                        mainContainerStyle={{
                            marginVertical: moderateScale(8)
                        }}
                    />


                    <AppTextInput
                        title='Date Of Birth'
                        placeholder='DD/MM/YY'
                        inputStyle={styles.textStyl}
                        titleStyle={styles.textStyl}
                        inputContainerStyle={styles.inputContainerStyle}
                        mainContainerStyle={{
                            marginVertical: moderateScale(8)
                        }}
                        rightAction={
                            <Icon
                                name='calendar'
                                type='Entypo'
                                color={colors.buttonColor}
                            />
                        }
                    />


                    <AppTextInput
                        title='Address Of Residence/Country'
                        inputStyle={styles.textStyl}
                        titleStyle={styles.textStyl}
                        inputContainerStyle={styles.inputContainerStyle}
                        mainContainerStyle={{
                            marginVertical: moderateScale(8)
                        }}
                        multiline
                    />

                    <AppTextInput
                        title='Address Of Birth/Country'
                        inputStyle={styles.textStyl}
                        titleStyle={styles.textStyl}
                        inputContainerStyle={styles.inputContainerStyle}
                        mainContainerStyle={{
                            marginVertical: moderateScale(8)
                        }}
                        multiline
                    />


                    <AppButton
                        title='Continue'
                        textStyle={{
                            ...styles.buttonText,
                            color: colors.secondaryFontColor
                        }}
                        style={styles.buttonStyl}
                        onPress={() => NavigationService.navigate('NUmberEmail')}
                    />
                </ScrollView>
            </View>
        </Container>
    )
}

export default SignUp

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
        top: moderateScale(180),
        height: 600
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
    }
})