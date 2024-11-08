import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppTextInput, Container, Text, useTheme } from 'react-native-basic-elements'
import QuickActionHeader from '../../Components/Header/QuickActionHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import BankCard from '../../Components/Money/BankCard'
import BackHeader from '../../Components/Header/BackHeader'

const WithdrawBankTransfer = () => {
    const colors = useTheme()
    const cashAccountArr = [
        {
            img: require('../../Assets/home/flag.png'),
            country: 'Euro',
            type: 'EUR-SERA',
            //   cash: '$0'
        },
        {
            img: require('../../Assets/home/flag.png'),
            country: 'Pound Sterling',
            type: 'GBP-Faster Payments',
            //   cash: '$0'
        },
    ];
    return (
        <Container>
            <BackHeader title='Bank Transfer' newbox={'ChooseBankFowWho'} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: moderateScale(15)
                }}>

                <Text
                    style={styles.textStyl}>
                    Select Which Currency You Would like to Deposit in.
                </Text>

                <AppTextInput
                    placeholder='Search for an account'
                    inputStyle={styles.textStyl}
                    inputContainerStyle={{
                        height: moderateScale(42),
                        borderRadius: moderateScale(5),
                        backgroundColor: '#FFFFFF'
                    }}
                    leftIcon={{
                        name: 'search1',
                        type: 'AntDesign'
                    }}

                />

                <View
                    style={{
                        ...styles.balanceCard,
                        marginVertical: moderateScale(10)
                    }}>

                    {cashAccountArr.map((item, index) => (
                        <BankCard
                            key={index}
                            item={item}
                        />
                    ))}
                </View>

            </ScrollView>
        </Container>
    )
}

export default WithdrawBankTransfer

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
})