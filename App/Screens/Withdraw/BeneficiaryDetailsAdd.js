import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppButton, AppTextInput, Container, Text, useTheme } from 'react-native-basic-elements'
import QuickActionHeader from '../../Components/Header/QuickActionHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import BankCard from '../../Components/Money/BankCard'
import BackHeader from '../../Components/Header/BackHeader'
import CashComponent from '../../Components/Home/CashComponent'
import FriendsComponent from '../../Components/Friend/FriendsComponent'
import NavigationService from '../../Services/Navigation'

const BeneficiaryDetailsAdd = () => {
    const colors = useTheme()

    return (
        <Container>
            <BackHeader title='Bank Transfer' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: moderateScale(15)
                }}>

                <Text
                    style={styles.textStyl}>
                    Add details of the beneficiary
                </Text>

                <AppTextInput
                    title='Nick Name'
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
                    title='First Name'
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
                    title='Last Name'
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
                    title='Post Code'
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

                <AppButton
                    onPress={() => NavigationService.navigate('BeneficiaryBankdetailsAdd')}
                    title='Next'
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

export default BeneficiaryDetailsAdd

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