import { Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Container, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const Deposit = () => {
    const colors = useTheme()
    const termsArr = [
        {
            img: require('../../Assets/Addmoney/t1.png'),
            text: 'We only accept transfers on the Ethereum network'
        },
        {
            img: require('../../Assets/Addmoney/t2.png'),
            text: 'Cryptocurrency Value can fluctuate rapidly, Deposit accordingly.'
        },
        {
            img: require('../../Assets/Addmoney/t3.png'),
            text: 'Deposits may not be instant and Could subject to network delays.'
        },
    ]
    return (
        <Container>
            <BackHeader title='Deposit USDT' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>
                <View
                    style={styles.balanceCard}>
                    <Image
                        source={require('../../Assets/Addmoney/qr.png')}
                        style={styles.QR}
                    />

                    <Text
                        style={styles.textStyl}>
                        Your Tether USD Address
                    </Text>

                    <View
                        style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            alignSelf: 'center'
                        }}>
                        <Text
                            style={{
                                ...styles.textStyl,
                                color: colors.buttonColor
                            }}>
                            0x1234567897567
                        </Text>
                        <Image
                            source={require('../../Assets/Addmoney/copy.png')}
                            style={{
                                height: moderateScale(20),
                                width: moderateScale(20)
                            }}
                            resizeMode='contain'
                        />
                    </View>
                </View>

                <View
                    style={styles.balanceCard}>
                    {termsArr.map((item, index) => (
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop:moderateScale(10)
                            }}
                            key={index}>
                            <Image
                                source={item.img}
                                style={{
                                    height: moderateScale(27),
                                    width: moderateScale(27),
                                    marginRight: moderateScale(10)
                                }}
                                resizeMode='contain'
                            />
                            <Text
                                style={{
                                    fontFamily: FONTS.Poppins.regular,
                                    fontSize: moderateScale(15),
                                    color: colors.buttonColor,
                                    width: '90%'
                                }}>
                                {item.text}
                            </Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </Container>
    )
}

export default Deposit

const styles = StyleSheet.create({
    balanceCard: {
        backgroundColor: '#FFFFFF',
        padding: moderateScale(10),
        elevation: 3,
        // marginVertical:moderateScale(8),
        borderRadius: moderateScale(10),
        marginVertical: moderateScale(8)
    },
    QR: {
        height: moderateScale(280),
        width: moderateScale(280),
        alignSelf: 'center',
        marginVertical: moderateScale(10)
    },
    textStyl: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(18),
        textAlign: 'center'
    }
})