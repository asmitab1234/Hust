import { Dimensions, Image, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { AppButton, AppTextInput, Container, Icon, RadioButton, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
const { height, width } = Dimensions.get('window')
import NavigationService from '../../Services/Navigation'

const UploadVideo = () => {
    const colors = useTheme()
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
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                        <Text
                            style={{
                                ...styles.heading,
                                color: colors.buttonColor
                            }}>
                            Upload Video
                        </Text>
                        <Pressable
                            style={{
                                ...styles.smallBox,
                                backgroundColor: colors.buttonColor
                            }}>
                            <Text
                                style={{
                                    ...styles.textStyl,
                                    color: colors.secondaryFontColor
                                }}>
                                Play
                            </Text>
                        </Pressable>
                    </View>

                    <View
                        style={styles.profileBox}>
                        <Image
                            source={require('../../Assets/profile.png')}
                            style={styles.profileBox}
                        />
                    </View>

                    <Pressable
                        style={{
                            ...styles.smallBox,
                            backgroundColor: colors.buttonColor
                        }}>
                        <Text
                            style={{
                                ...styles.textStyl,
                                color: colors.secondaryFontColor
                            }}>
                            Upload
                        </Text>
                    </Pressable>

                    <Pressable
                        style={{
                            ...styles.smallBox,
                            backgroundColor: colors.buttonColor
                        }}>
                        <Text
                            style={{
                                ...styles.textStyl,
                                color: colors.secondaryFontColor
                            }}>
                            Retake
                        </Text>
                    </Pressable>


                    <AppButton
                        title='Submit'
                        textStyle={{
                            ...styles.buttonText,
                            color: colors.secondaryFontColor
                        }}
                        style={styles.buttonStyl}
                        onPress={() => NavigationService.navigate('AppStack')}
                    />

                </View>
            </ScrollView>
        </Container>
    )
}

export default UploadVideo

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
        paddingHorizontal: moderateScale(10),
        marginVertical: moderateScale(8)
    },
    profileBox: {
        height: moderateScale(300),
        width: moderateScale(300),
        borderRadius: moderateScale(200),
        elevation:4,
        marginVertical:moderateScale(5),
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    smallBox: {
        height: moderateScale(30),
        width: moderateScale(125),
        borderRadius: moderateScale(50),
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: moderateScale(8),
        alignSelf: 'flex-end'
    }
})