import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppButton, AppTextInput, Container, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const PersonalInformation = () => {
    const colors = useTheme()
    return (
        <Container>
            <BackHeader
                title='Personal Information'
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>
                <AppTextInput
                    title='User Name'
                    titleStyle={styles.textStyl}
                    inputStyle={styles.textStyl}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        borderColor: colors.buttonColor
                    }}
                    mainContainerStyle={{
                        marginVertical: moderateScale(15)
                    }}

                />

                <AppTextInput
                    title='Phone Number'
                    titleStyle={styles.textStyl}
                    inputStyle={styles.textStyl}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        borderColor: colors.buttonColor
                    }}
                    mainContainerStyle={{
                        marginVertical: moderateScale(8)
                    }}
                    keyboardType='number-pad'
                />

                <AppTextInput
                    title='Email Id'
                    titleStyle={styles.textStyl}
                    inputStyle={styles.textStyl}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        borderColor: colors.buttonColor
                    }}
                    mainContainerStyle={{
                        marginVertical: moderateScale(8)
                    }}
                    keyboardType='email-address'
                />

                <AppTextInput
                    title='Address'
                    titleStyle={styles.textStyl}
                    inputStyle={styles.textStyl}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        borderColor: colors.buttonColor
                    }}
                    mainContainerStyle={{
                        marginVertical: moderateScale(8)
                    }}

                />

                <AppTextInput
                    title='Country'
                    titleStyle={styles.textStyl}
                    inputStyle={styles.textStyl}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        borderColor: colors.buttonColor
                    }}
                    mainContainerStyle={{
                        marginVertical: moderateScale(8)
                    }}

                />

                <AppButton
                    onPress={() => NavigationService.navigate('Profile')}
                    title='Save'
                    textStyle={{
                        ...styles.textStyl,
                        color: colors.secondaryFontColor,
                        fontSize: moderateScale(17)
                    }}
                    style={styles.buttonStyl}
                />
            </ScrollView>
        </Container>
    )
}

export default PersonalInformation

const styles = StyleSheet.create({
    textStyl: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(12),
        textTransform: 'none',
        color: '#000000'
    },
    balanceCard: {
        backgroundColor: '#FFFFFF',
        padding: moderateScale(10),
        elevation: 3,
        // marginVertical:moderateScale(8),
        borderRadius: moderateScale(10)
    },
    inputContainerStyle: {
        height: moderateScale(42),
        borderRadius: moderateScale(6),
        backgroundColor: '#FFFFFF',
    },
    buttonStyl: {
        marginHorizontal: 0,
        marginVertical: moderateScale(40),
        borderRadius: moderateScale(6),
        height: moderateScale(45)
    }
})