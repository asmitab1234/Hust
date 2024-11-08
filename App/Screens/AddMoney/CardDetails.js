import { Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppButton, AppTextInput, Container, Icon, Text, useTheme } from 'react-native-basic-elements'
import QuickActionHeader from '../../Components/Header/QuickActionHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const CardDetails = () => {
    const colors = useTheme()
    return (
        <Container>
            <QuickActionHeader title='Add New Card' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: moderateScale(15)
                }}>
                <Text
                    style={{
                        ...styles.placeholderText,
                        marginVertical: moderateScale(5),
                        textAlign: 'center'
                    }}>
                    The Card must be Under Your Name
                </Text>

                <AppTextInput
                    title='Cardholder’s Name'
                    titleStyle={styles.titleText}
                    placeholder='Lorem ipusum'
                    // value='Lorem ipusum'
                    inputStyle={styles.placeholderText}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        borderColor: colors.buttonColor
                    }}
                    mainContainerStyle={{
                        marginTop: moderateScale(8)
                    }}
                />

                <AppTextInput
                    title='Card Number'
                    titleStyle={styles.titleText}
                    placeholder='12345678'
                    inputStyle={styles.placeholderText}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle,
                        borderColor: colors.buttonColor
                    }}
                    mainContainerStyle={{
                        marginVertical: moderateScale(8)
                    }}
                    rightAction={
                        <Image
                            source={require('../../Assets/Addmoney/credit-card.png')}
                            style={{
                                height: moderateScale(24),
                                width: moderateScale(24)
                            }}
                            resizeMode='contain'
                            tintColor={'#361FC1'}
                        />
                    }
                />

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: moderateScale(8)
                    }}>
                    <AppTextInput
                        // title='Cardholder’s Name'
                        titleStyle={styles.titleText}
                        placeholder='MM/YY'
                        // value='Lorem ipusum'
                        inputStyle={styles.placeholderText}
                        inputContainerStyle={{
                            ...styles.inputContainerStyle,
                            borderColor: colors.buttonColor,

                        }}
                        mainContainerStyle={{
                            marginVertical: moderateScale(8),
                            width: '45%'
                        }}
                        rightAction={
                            <Icon
                                name='calendar-outline'
                                type='Ionicon'
                                size={24}
                                color={'#361FC1'}
                            />
                        }
                    />
                    <AppTextInput
                        // title='Cardholder’s Name'
                        titleStyle={styles.titleText}
                        placeholder='CVV'
                        // value='Lorem ipusum'
                        inputStyle={styles.placeholderText}
                        inputContainerStyle={{
                            ...styles.inputContainerStyle,
                            borderColor: colors.buttonColor,

                        }}
                        mainContainerStyle={{
                            marginVertical: moderateScale(8),
                            width: '45%'
                        }}
                        rightAction={
                            <Image
                                source={require('../../Assets/Addmoney/credit-card.png')}
                                style={{
                                    height: moderateScale(24),
                                    width: moderateScale(24)
                                }}
                                resizeMode='contain'
                                tintColor={'#361FC1'}
                            />
                        }
                    />

                </View>

                <View
                    style={{
                        borderWidth: moderateScale(1),
                        borderColor: colors.buttonColor,
                        paddingHorizontal: moderateScale(8),
                        paddingVertical: moderateScale(10),
                        borderRadius: moderateScale(8),
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: moderateScale(8)
                    }}>
                    <Text
                        style={styles.titleText}>
                        We accept Visa or{'\n'}
                        Mastercard debit Cards
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Image
                            source={require('../../Assets/Addmoney/card1.png')}
                            style={{
                                height: moderateScale(24),
                                width: moderateScale(24),
                                marginRight: moderateScale(10)
                            }}
                            resizeMode='contain'
                        />
                        <Image
                            source={require('../../Assets/Addmoney/card2.png')}
                            style={{
                                height: moderateScale(24),
                                width: moderateScale(24)
                            }}
                            resizeMode='contain'
                        />
                    </View>
                </View>


                <AppButton
                    title='Continue'
                    style={styles.buttonStyl}
                    textStyle={{
                        ...styles.placeholderText,
                        color: colors.secondaryFontColor
                    }}
                />


            </ScrollView>
        </Container>
    )
}

export default CardDetails

const styles = StyleSheet.create({
    titleText: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(15)
    },
    placeholderText: {
        fontFamily: FONTS.Poppins.light,
        fontSize: moderateScale(15)
    },
    buttonStyl: {
        height: moderateScale(45),
        marginVertical: moderateScale(30),
        marginHorizontal:0
    }
})