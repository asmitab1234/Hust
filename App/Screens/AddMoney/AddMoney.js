import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import QuickActionHeader from '../../Components/Header/QuickActionHeader'
import AddMoneyCard from '../../Components/Money/AddMoneyCard'
import { moderateScale } from '../../Constants/PixelRatio'

const AddMoney = () => {
    const moneyArr = [
        {
            heading: 'Instant',
            img: require('../../Assets/Addmoney/credit-card.png'),
            title: 'Debit Card top-up',
            desc: 'With Visa and MasterCard',
            handelClick: 'DebitCard'
        },
        {
            heading: 'Bank Transfer',
            img: require('../../Assets/Addmoney/bank.png'),
            title: 'Bank Transfer',
            desc: 'EUR SERA & GBP Faster Payments',
            handelClick: 'BankTransfer'
        },
        {
            heading: 'Cryptocurrencies',
            img: require('../../Assets/Addmoney/crypto.png'),
            title: 'Crypto Deposit',
            desc: 'With BTC, ETH & More',
            handelClick: 'Currencies'
        },
    ]
    return (
        <Container>
            <QuickActionHeader title='Add Money' />
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

export default AddMoney

const styles = StyleSheet.create({})