import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppButton, AppTextInput, Container, Text, useTheme } from 'react-native-basic-elements'
import QuickActionHeader from '../../Components/Header/QuickActionHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import BankCard from '../../Components/Money/BankCard'
import BackHeader from '../../Components/Header/BackHeader'
import ChooseBankCard from '../../Components/Withdrawl/ChooseBankCard'
import ChooseTypeComponent from '../../Components/Withdrawl/ChooseTypeComponent'
import NavigationService from '../../Services/Navigation'

const ChooseCurrencyCountryRegion = () => {
    const colors = useTheme()
    const transferArr = [
        {
            title: 'Beneficiary Type',
            type: 'MySelf',
            handelClick: ''
        },
        {
            title: 'Currency',
            type: 'Euro',
            handelClick: 'CooseCurrency'
        },
        {
            title: 'Beneficiary Country',
            type: 'France',
            handelClick: 'ChooseBenificiary'
        },
        {
            title: 'Bank Account Country',
            type: 'France',
            handelClick: 'ChooseAccountCountry'
        },
    ]
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
                    Choose Currency and Country or Region
                </Text>

                {transferArr.map((item, index) => (
                    <ChooseTypeComponent
                        key={index}
                        item={item}
                    />
                ))}

                {/* <View
                    style={{
                        ...styles.balanceCard,
                        marginVertical: moderateScale(10)
                    }}>


                </View> */}

            </ScrollView>

            <AppButton
                onPress={() => NavigationService.navigate('BeneficiaryDetailsAdd')}
                title='Next'
                style={styles.buttonStyl}
                textStyle={{
                    ...styles.textStyl,
                    color: colors.secondaryFontColor,
                    fontSize: moderateScale(16)
                }}
            />

        </Container>
    )
}

export default ChooseCurrencyCountryRegion

const styles = StyleSheet.create({
    textStyl: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(13)
    },
    balanceCard: {
        backgroundColor: '#FFFFFF',
        padding: moderateScale(10),
        elevation: 3,
        // marginVertical:moderateScale(8),
        borderRadius: moderateScale(10)
    },
    buttonStyl: {
        height: moderateScale(45),
        marginVertical: moderateScale(30),
        // marginHorizontal: 0
    },
})