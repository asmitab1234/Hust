import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, AppTextInput, Container, RadioButton, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const ActiveStatus = () => {
    const colors = useTheme()
    const [selected, setSelected] = useState('on');
    return (
        <Container>
            <BackHeader
                title='Active Status '
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
                            selected={selected == 'on'}
                            onChange={(val) => setSelected('on')}
                            size={23}
                            containerStyle={{
                                borderWidth: moderateScale(1)
                            }}
                            activeColor={colors.buttonColor}
                        />
                        <Text
                            style={styles.textStyl}>
                            On
                        </Text>
                    </View>


                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: moderateScale(15)
                        }}>
                        <RadioButton
                            selected={selected == 'off'}
                            onChange={(val) => setSelected('off')}
                            size={23}
                            containerStyle={{
                                borderWidth: moderateScale(1)
                            }}
                            activeColor={colors.buttonColor}
                        />
                        <Text
                            style={styles.textStyl}>
                            Off
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

export default ActiveStatus

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