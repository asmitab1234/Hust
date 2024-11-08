import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppButton, Container, StatusBar, useTheme } from 'react-native-basic-elements'
import LinearGradient from 'react-native-linear-gradient'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
const { height, width } = Dimensions.get('window')

const StatrScreen = () => {
    const colors = useTheme()
    return (
        <Container>
            <StatusBar backgroundColor={'transparent'} barStyle='dark-content' translucent={true} />
            <LinearGradient
                colors={['#C6AAD2', '#FDFBFE']}
                start={{
                    x: 1,
                    y: 0
                }}
                end={{
                    x: 0,
                    y: 1
                }}
                style={{
                    height,
                    width,
                }}>

                    <View
                    style={{
                        height:moderateScale(150)
                    }}
                    />

                <Image
                    source={require('../../Assets/logo.png')}
                    style={{
                        height: moderateScale(300),
                        width: moderateScale(300),
                        // backgroundColor:colors.primaryFontColor,
                        alignSelf:'center',
                    }}
                    tintColor={colors.primaryFontColor}
                    // resizeMode='contain'
                />
                <View
                    style={{
                        flex: 1
                    }}
                />
                <AppButton
                    title='Get Started'
                    onPress={() => NavigationService.navigate('Onboarding')}
                    textStyle={{
                        ...styles.buttonText,
                        color: colors.secondaryFontColor
                    }}
                    style={styles.buttonStyl}
                />
            </LinearGradient>
        </Container>
    )
}

export default StatrScreen

const styles = StyleSheet.create({
    buttonStyl: {
        height: moderateScale(45),
        borderRadius: moderateScale(5)
    },
    buttonText: {
        fontFamily: FONTS.Poppins.bold,
        fontSize: moderateScale(15),
        textTransform: 'uppercase'
    }
})