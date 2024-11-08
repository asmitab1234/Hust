import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppTextInput, Container, Text, useTheme } from 'react-native-basic-elements'
import QuickActionHeader from '../../Components/Header/QuickActionHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import BankCard from '../../Components/Money/BankCard'
import BackHeader from '../../Components/Header/BackHeader'
import CashComponent from '../../Components/Home/CashComponent'

const CryptoWithdrawl = () => {
    const colors = useTheme()
    const currenciArr = [
        {
            img: require('../../Assets/home/hust.png'),
            country: 'Hust',
            type: 'Hust-0',
            cash: '$0'
        },
        {
            img: require('../../Assets/home/hust.png'),
            country: 'Hust',
            type: 'Hust-0',
            cash: '$0'
        },
        {
            img: require('../../Assets/home/hust.png'),
            country: 'Hust',
            type: 'Hust-0',
            cash: '$0'
        },
    ];
    const cashAccountArr = [
        {
            img: require('../../Assets/home/hust.png'),
            country: 'Martinez',
            type: '17St50BK96EDsm1taqHWyCn2n417Xy',
            //   cash: '$0'
        },
        {
            img: require('../../Assets/home/hust.png'),
            country: 'Martinez',
            type: '17St50BK96EDsm1taqHWyCn2n417Xy',
            //   cash: '$0'
        },
        {
            img: require('../../Assets/home/hust.png'),
            country: 'Martinez',
            type: '17St50BK96EDsm1taqHWyCn2n417Xy',
            //   cash: '$0'
        },
        {
            img: require('../../Assets/home/hust.png'),
            country: 'Martinez',
            type: '17St50BK96EDsm1taqHWyCn2n417Xy',
            //   cash: '$0'
        },


    ];
    return (
        <Container>
            <BackHeader title='Crypto Withdrawal' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: moderateScale(15)
                }}>

                <Text
                    style={styles.textStyl}>
                    Select Which Currency You Would like to Withdraw
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
                    <Text
                        style={{
                            ...styles.textStyl,
                            color: '#120438'
                        }}>
                        CRYPTOCURRENCIES
                    </Text>
                    {currenciArr.map((item, index) => (
                        <CashComponent
                            key={index}
                            item={item}
                        />
                    ))}
                </View>

                <Text
                    style={{
                        ...styles.textStyl,
                    }}>
                    Recent
                </Text>

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

                <Text
                    style={{
                        ...styles.textStyl,
                        // marginTop:moderateScale(12)
                    }}>
                    External
                </Text>

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

export default CryptoWithdrawl

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