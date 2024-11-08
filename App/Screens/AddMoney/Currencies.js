import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppTextInput, Container, Text, useTheme } from 'react-native-basic-elements'
import QuickActionHeader from '../../Components/Header/QuickActionHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import CurrencyCard from '../../Components/Money/CurrencyCard'

const Currencies = () => {
    const colors = useTheme()
    const cashAccountArr = [
        {
            img: require('../../Assets/home/hust.png'),
            country: 'Hust',
            type: 'Hust-0',
        },
        {
            img: require('../../Assets/home/hust.png'),
            country: 'Hust',
            type: 'Hust-0',
        },
        {
            img: require('../../Assets/home/hust.png'),
            country: 'Hust',
            type: 'Hust-0',
        },
    ];
    return (
        <Container>
            <QuickActionHeader title='CryptoCurrencies' />
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
                    placeholder='Search for cryptoCurrency'
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
                        <CurrencyCard
                            key={index}
                            item={item}
                        />
                    ))}
                </View>

            </ScrollView>
        </Container>
    )
}

export default Currencies

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