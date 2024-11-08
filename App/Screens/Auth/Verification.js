import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { AppButton, AppTextInput, Container, Icon, RadioButton, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
const { height, width } = Dimensions.get('window')
import NavigationService from '../../Services/Navigation'

const Verification = () => {
    const colors = useTheme()
    const [selected, setSelected] = useState('Identity Card')
    return (
        <Container>
            <StatusBar backgroundColor={'transparent'} barStyle='dark-content' translucent={true} />
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        ...styles.logoBox,
                        backgroundColor: colors.buttonColor
                    }}>
                    <Image
                        source={require('../../Assets/logo.png')}
                        style={styles.logoStyl}
                    />
                </View>

                <View
                    style={styles.AccountBox}>
                    <Text
                        style={{
                            ...styles.heading,
                            color: colors.buttonColor
                        }}>
                        Verification Step
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: 10
                        }}>

                        <View
                            style={{
                                ...styles.rowView
                            }}>
                            <RadioButton
                                selected={selected == 'Identity Card'}
                                onChange={(val) => setSelected('Identity Card')}
                                size={20}
                                containerStyle={styles.radioStyl}
                                activeColor={colors.buttonColor}
                            />
                            <Text
                                style={{
                                    ...styles.textStyl,
                                }}>
                                Identity Card
                            </Text>
                        </View>

                        <View
                            style={{
                                ...styles.rowView
                            }}>
                            <RadioButton
                                selected={selected == 'Passport'}
                                onChange={(val) => setSelected('Passport')}
                                size={20}
                                containerStyle={styles.radioStyl}
                                activeColor={colors.buttoColor}
                            />
                            <Text
                                style={{
                                    ...styles.textStyl,
                                }}>
                                Passport
                            </Text>
                        </View>

                        <View
                            style={{
                                ...styles.rowView
                            }}>
                            <RadioButton
                                selected={selected == 'Drivers Licence'}
                                onChange={(val) => setSelected('Drivers Licence')}
                                size={20}
                                containerStyle={styles.radioStyl}
                                activeColor={colors.buttonColor}
                            />
                            <Text
                                style={{
                                    ...styles.textStyl,
                                }}>
                                Drivers Licence
                            </Text>
                        </View>
                    </View>

                    <Text
                        style={{
                            ...styles.textStyl,
                            marginTop: moderateScale(20)
                        }}>
                        Upload Documents
                    </Text>

                    <TouchableOpacity
                        style={{
                            ...styles.uploadBox,
                            backgroundColor: '#F6F6F6'
                        }}>
                        <Text
                        style={styles.textStyl}>
                            Front Image
                        </Text>
                        <Icon
                            name='upload'
                            type='Feather'
                        />

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            ...styles.uploadBox,
                            backgroundColor: '#F6F6F6'
                        }}>
                        <Text
                        style={styles.textStyl}>
                            Back Image
                        </Text>
                        <Icon
                            name='upload'
                            type='Feather'
                        />

                    </TouchableOpacity>


                    <AppButton
                        title='Continue'
                        textStyle={{
                            ...styles.buttonText,
                            color: colors.secondaryFontColor
                        }}
                        style={styles.buttonStyl}
                        onPress={() => NavigationService.navigate('UploadVideo')}
                    />

                </View>
            </ScrollView>
        </Container>
    )
}

export default Verification

const styles = StyleSheet.create({
    logoBox: {
        height: height / 3,
        width: width*1.4,
        borderBottomLeftRadius: width,
        borderBottomRightRadius: width,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden",
        alignSelf:"center"
    },
    logoStyl: {
        height: moderateScale(300),
        width: moderateScale(300),
        //   marginTop:moderateScale(10)
    },
    AccountBox: {
        paddingHorizontal: moderateScale(8),
        paddingVertical: moderateScale(10),
        backgroundColor: '#FFFFFF',
        elevation: 4,
        marginHorizontal: moderateScale(15),
        borderRadius: moderateScale(10),
        position: 'absolute',
        width: '90%',
        top: moderateScale(180)
    },
    heading: {
        fontFamily: FONTS.Poppins.semiBold,
        fontSize: moderateScale(19)
    },
    textStyl: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(14)
    },
    inputContainerStyle: {
        borderWidth: 0,
        backgroundColor: '#F6F6F6',
        height: moderateScale(45)
    },
    buttonText: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(16)
    },
    buttonStyl: {
        height: moderateScale(45),
        borderRadius: moderateScale(60),
        marginTop: moderateScale(20)
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioStyl: {
        borderWidth: moderateScale(1),
        marginRight: moderateScale(10)
    },
    uploadBox: {
        height: moderateScale(45),
        width: '100%',
        borderRadius: moderateScale(10),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:moderateScale(10),
        marginVertical:moderateScale(8)
    }
})