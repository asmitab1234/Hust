import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppTextInput, Container, Text, useTheme } from 'react-native-basic-elements'
import QuickActionHeader from '../../Components/Header/QuickActionHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import CurrencyCard from '../../Components/Money/CurrencyCard'
import BackHeader from '../../Components/Header/BackHeader'
import CashComponent from '../../Components/Home/CashComponent'

const SelectSource = () => {
    const colors = useTheme()
    const cashAccountArr = [
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
    return (
        <Container>
            <BackHeader title='Select Source' />
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

export default SelectSource

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