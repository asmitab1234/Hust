import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppTextInput, Container, Text, useTheme } from 'react-native-basic-elements'
import QuickActionHeader from '../../Components/Header/QuickActionHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import BankCard from '../../Components/Money/BankCard'
import BackHeader from '../../Components/Header/BackHeader'
import CashComponent from '../../Components/Home/CashComponent'
import FriendsComponent from '../../Components/Friend/FriendsComponent'

const HustFriend = () => {
    const colors = useTheme()
    const currenciArr = [
        {
            img: require('../../Assets/home/profile.png'),
            name: 'Liam',
            cash: '$0'
        },
        {
            img: require('../../Assets/home/profile.png'),
            name: 'Liam',
            cash: '$0'
        },
        {
            img: require('../../Assets/home/profile.png'),
            name: 'Liam',
            cash: '$0'
        },
        {
            img: require('../../Assets/home/profile.png'),
            name: 'Liam',
            cash: '$0'
        },
        {
            img: require('../../Assets/home/profile.png'),
            name: 'Liam',
            cash: '$0'
        },

    ];


    return (
        <Container>
            <BackHeader title='Hust Friends' newbox={'SendFriends'} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: moderateScale(15)
                }}>

                <Text
                    style={styles.textStyl}>
                    Select Which Friend You Would like to send funds to
                </Text>

                <AppTextInput
                    placeholder='Search for an account'
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
                        marginVertical: moderateScale(15)
                    }}

                />

                <View
                    style={{
                        ...styles.balanceCard,
                        marginVertical: moderateScale(10)
                    }}>
                    <Text
                        style={{
                            ...styles.textStyl,
                            color: '#120438'
                        }}>
                        Friends
                    </Text>
                    {currenciArr.map((item, index) => (
                        <FriendsComponent
                            key={index}
                            item={item}
                        />
                    ))}
                </View>

            </ScrollView>
        </Container>
    )
}

export default HustFriend

const styles = StyleSheet.create({
    textStyl: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(12)
    },
    balanceCard: {
        backgroundColor: '#FFFFFF',
        padding: moderateScale(10),
        elevation: 3,
        // marginVertical:moderateScale(8),
        borderRadius: moderateScale(10)
    },
})