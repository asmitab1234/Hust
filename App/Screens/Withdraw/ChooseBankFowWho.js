import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppTextInput, Container, Text, useTheme } from 'react-native-basic-elements'
import QuickActionHeader from '../../Components/Header/QuickActionHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import BankCard from '../../Components/Money/BankCard'
import BackHeader from '../../Components/Header/BackHeader'
import ChooseBankCard from '../../Components/Withdrawl/ChooseBankCard'

const ChooseBankFowWho = () => {
    const colors = useTheme()
    const transferArr = [
        {
            img: require('../../Assets/Addmoney/user.png'),
            title: 'MySelf'
        },
        {
            img: require('../../Assets/Addmoney/audience.png'),
            title: 'Someone else'
        },
        {
            img: require('../../Assets/Addmoney/bank.png'),
            title: 'A business/organisation'
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
                    Select Who you would like to send funds to
                </Text>

                {transferArr.map((item, index) => (
                    <ChooseBankCard
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
        </Container>
    )
}

export default ChooseBankFowWho

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