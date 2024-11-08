
import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppTextInput, Container, Text, useTheme } from 'react-native-basic-elements'
import QuickActionHeader from '../../Components/Header/QuickActionHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import BankCard from '../../Components/Money/BankCard'
import BackHeader from '../../Components/Header/BackHeader'
import CountryComponent from '../../Components/Withdrawl/CountryComponent'

const ChooseBenificiary = () => {
    const colors = useTheme()
    const cashAccountArr = [
        {
            img: require('../../Assets/home/flag.png'),
            country: 'EUR',
            //   cash: '$0'
        },
        {
            img: require('../../Assets/home/flag.png'),
            country: 'EUR',
        },
    ];
    return (
        <Container>
            <BackHeader title='Choose Beneficiary Country' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: moderateScale(15)
                }}>

                <Text
                    style={styles.textStyl}>
                   Select beneficiary Country or region
                </Text>

                <View
                    style={{
                        marginVertical: moderateScale(10),
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                    <AppTextInput
                        placeholder='Search for Country or region'
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
                        mainContainerStyle={{
                            width: '80%'
                        }}
                    />
                    <Text
                        style={styles.textStyl}>
                        Annuler
                    </Text>
                </View>


                <View
                    style={{
                        ...styles.balanceCard,
                        marginVertical: moderateScale(10)
                    }}>

                    {cashAccountArr.map((item, index) => (
                        <CountryComponent
                            key={index}
                            item={item}
                        />
                    ))}
                </View>

            </ScrollView>
        </Container>
    )
}

export default ChooseBenificiary

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