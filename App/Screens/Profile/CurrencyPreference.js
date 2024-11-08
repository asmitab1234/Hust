import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, AppTextInput, Container, RadioButton, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const CurrencyPreference = () => {
    const colors = useTheme()
    const [selected, setSelected] = useState('EUR');
    return (
        <Container>
            <BackHeader
                title='Currency Preference'
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: moderateScale(20)
                    }}>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <RadioButton
                            selected={selected == 'EUR'}
                            onChange={(val) => setSelected('EUR')}
                            size={23}
                            containerStyle={{
                                borderWidth: moderateScale(1)
                            }}
                            activeColor={colors.buttonColor}
                        />
                        <Text
                            style={styles.textStyl}>
                            EUR
                        </Text>
                    </View>


                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: moderateScale(15)
                        }}>
                        <RadioButton
                            selected={selected == 'USD'}
                            onChange={(val) => setSelected('USD')}
                            size={23}
                            containerStyle={{
                                borderWidth: moderateScale(1)
                            }}
                            activeColor={colors.buttonColor}
                        />
                        <Text
                            style={styles.textStyl}>
                            USD
                        </Text>
                    </View>


                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: moderateScale(15)
                        }}>
                        <RadioButton
                            selected={selected == 'GBP'}
                            onChange={(val) => setSelected('GBP')}
                            size={23}
                            containerStyle={{
                                borderWidth: moderateScale(1)
                            }}
                            activeColor={colors.buttonColor}
                        />
                        <Text
                            style={styles.textStyl}>
                            GBP
                        </Text>
                    </View>

                </View>


            </ScrollView>
            <AppButton
                onPress={() => NavigationService.navigate('Profile')}
                title='Save'
                textStyle={{
                    ...styles.textStyl,
                    color: colors.secondaryFontColor,
                    fontSize: moderateScale(17)
                }}
                style={styles.buttonStyl}
            />
        </Container>
    )
}

export default CurrencyPreference

const styles = StyleSheet.create({
    textStyl: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(12),
        textTransform: 'none',
        color: '#000000',
        marginLeft: moderateScale(8)
    },
    balanceCard: {
        backgroundColor: '#FFFFFF',
        padding: moderateScale(10),
        elevation: 3,
        // marginVertical:moderateScale(8),
        borderRadius: moderateScale(10)
    },
    inputContainerStyle: {
        height: moderateScale(42),
        borderRadius: moderateScale(6),
        backgroundColor: '#FFFFFF',
    },
    buttonStyl: {
        // marginHorizontal: 0,
        marginVertical: moderateScale(40),
        borderRadius: moderateScale(6),
        height: moderateScale(45)
    }
})