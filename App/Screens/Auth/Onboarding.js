import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, Container, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { useDispatch } from 'react-redux'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import LinearGradient from 'react-native-linear-gradient'
import Swiper from 'react-native-swiper'
const { height, width } = Dimensions.get('window')

const Onboarding = () => {
    const colors = useTheme()
    const [selectedIndex, setselectedIndex] = useState(false)
    return (
        <Container>
            <StatusBar
                backgroundColor={'transparent'} barStyle='dark-content' translucent={true}
            />

            <LinearGradient
            
                colors={['#A60EE8', '#A931DC']}
                style={styles.linerGradientStyl}>
                <Image
                    source={require('../../Assets/img.png')}
                    style={styles.imgStyl}
                />
            </LinearGradient>
            <Swiper style={styles.wrapper} showsButtons={false}
                activeDotColor='#000000'
                dotColor='rgba(0, 0, 0, 0.4)'
            >
                <View style={styles.slide1}>
                    <Text style={styles.text}>
                        Votre Super application
                        Pour le Quotidien
                    </Text>
                    <Text
                        style={styles.descText}>
                        Argent, investissement, budget, et
                        Plus encore - Hust met tout ce dont
                        Vous avez besoin a Portee de mein
                    </Text>
                </View>
                <View style={styles.slide1}>
                    <Text style={styles.text}>
                        Manage Your Hust With Hust
                    </Text>
                    <Text
                        style={styles.descText}>
                        Buy, Sell and Track Your Hust Portfolio
                        With Hust, entering the world of
                        Hustcurrencies is just a few taps away
                    </Text>
                </View>
                <View style={styles.slide1}>
                    <Text style={styles.text}>
                        Votre Carte Hust
                        Mastercard Prepayee
                    </Text>
                    <Text
                        style={styles.descText}>
                        Profitez de depenses
                        internationales a taux competitifs
                        Voyagez librement, sans frais extra
                    </Text>
                </View>
                <View style={styles.slide1}>
                    <Text style={styles.text}>
                        Gerez Votre Crypto
                        avec Hust
                    </Text>
                    <Text
                        style={styles.descText}>
                        Achetez, vendez et trackez Votre
                        portefeuille de Crypto. Hust,
                        I’univers des cryptomonnaies est a
                        Portee de quelques clics
                    </Text>
                </View>

            </Swiper>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginVertical: moderateScale(50)
                }}>
                <AppButton
                    title='Sign In'
                    style={{
                        ...styles.buttonStyl,
                        backgroundColor: colors.secondaryButtonColor
                    }}
                    textStyle={{
                        ...styles.buttonText,
                        color: colors.secondaryFontColor
                    }}
                    onPress={() => NavigationService.navigate('SignIn')}
                />
                <AppButton
                    title='Sign Up'
                    style={styles.buttonStyl}
                    textStyle={{
                        ...styles.buttonText,
                        color: colors.secondaryFontColor
                    }}
                    onPress={() => NavigationService.navigate('SignUp')}
                />
            </View>
        </Container>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    buttonStyl: {
        height: moderateScale(50),
        width: '45%',
        marginHorizontal: 0
    },
    buttonText: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(15)
    },
    linerGradientStyl: {
        height: height / 3,
        width: width*1.4,
        borderBottomLeftRadius: width,
        borderBottomRightRadius: width,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden",
        alignSelf:"center"
    },
    imgStyl: {
        height: moderateScale(200),
        width: moderateScale(200),
        marginTop: 100,
        borderRadius: 20
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: FONTS.Poppins.medium,
        fontSize: moderateScale(20),
        textAlign: 'center',
        marginHorizontal: moderateScale(15)
    },
    descText: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(15),
        color: '#797C7B',
        textAlign: 'center',
        marginTop: moderateScale(10),
        marginHorizontal: moderateScale(15)
    }
})