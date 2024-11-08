import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppTextInput, Container, Text, useTheme } from 'react-native-basic-elements'
import QuickActionHeader from '../../Components/Header/QuickActionHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import CurrencyCard from '../../Components/Money/CurrencyCard'
import BackHeader from '../../Components/Header/BackHeader'
import CashComponent from '../../Components/Home/CashComponent'

const SelectDistance = () => {
    const colors = useTheme()
    const CurrenciesArr = [
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
          img: require('../../Assets/home/flag.png'),
          country: 'United states Dollar',
          type: 'USD- $',
          cash: '$0'
        },
        {
          img: require('../../Assets/home/flag.png'),
          country: 'United states Dollar',
          type: 'USD- $',
          cash: '$0'
        },
        {
          img: require('../../Assets/home/flag.png'),
          country: 'United states Dollar',
          type: 'USD- $',
          cash: '$0'
        },
      ];
    return (
        <Container>
            <BackHeader title='Select Destination' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: moderateScale(15)
                }}>

                <Text
                    style={styles.textStyl}>
                    Select Which Currency You Would like to Trade
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
                    mainContainerStyle={{ marginVertical: moderateScale(20) }}
                />

                <View
                    style={{
                        ...styles.balanceCard,
                        marginVertical: moderateScale(10)
                    }}>
                    <Text
                        style={{
                            ...styles.balanceText,
                            color: '#120438'
                        }}>
                        CRYPTOCURRENCIES
                    </Text>
                    {CurrenciesArr.map((item, index) => (
                        <CashComponent
                            key={index}
                            item={item}
                        />
                    ))}
                </View>

                <View
                    style={{
                        ...styles.balanceCard,
                        marginVertical: moderateScale(10)
                    }}>
                    <Text
                        style={{
                            ...styles.balanceText,
                            color: '#120438'
                        }}>
                        CASH ACCOUNTS 
                    </Text>
                    {cashAccountArr.map((item, index) => (
                        <CashComponent
                            key={index}
                            item={item}
                        />
                    ))}
                </View>

            </ScrollView>
        </Container>
    )
}

export default SelectDistance

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