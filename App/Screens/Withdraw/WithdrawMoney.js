import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import QuickActionHeader from '../../Components/Header/QuickActionHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import AddMoneyCard from '../../Components/Money/AddMoneyCard'

const WithdrawMoney = () => {
    const moneyArr = [
        {
            heading: 'Instant',
            img: require('../../Assets/Addmoney/credit-card.png'),
            title: 'To A Hust User',
            desc: 'With Hust 2 Hust  ',
            handelClick: 'HustFriend'
        },
        {
            heading: 'Bank Transfer',
            img: require('../../Assets/Addmoney/bank.png'),
            title: 'Bank Transfer',
            desc: 'EUR SERA & GBP Faster Payments',
            handelClick: 'WithdrawBankTransfer'
        },
        {
            heading: 'Cryptocurrencies',
            img: require('../../Assets/Addmoney/crypto.png'),
            title: 'Crypto Withdrawal',
            desc: 'With BTC, ETH & More',
            handelClick: 'CryptoWithdrawl'
        },
    ]
    return (
        <Container>
            <QuickActionHeader title='Withdraw Money' />
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: moderateScale(15)
                }}
                showsVerticalScrollIndicator={false}>

                {moneyArr.map((item, index) => (
                    <AddMoneyCard
                        key={index}
                        item={item}
                    />
                ))}


            </ScrollView>
        </Container>
    )
}

export default WithdrawMoney

const styles = StyleSheet.create({})