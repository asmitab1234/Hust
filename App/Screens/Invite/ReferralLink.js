import { Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppButton, Container, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const ReferralLink = () => {
  const colors = useTheme()
  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>
        <Image
          source={require('../../Assets/gift.png')}
          style={styles.imgStyl}
          resizeMode='contain'
        />
        <Text
          style={styles.heading}>
          Invite a friend, get up
          to $250
        </Text>

        <Text
          style={styles.textStyl}>
          Each time a friend signs up you get up to
          $250 in Prizes when they upgrade to any
          of our premium Plans.{' '}
          <Text
            style={{
              ...styles.textStyl,
              color: '#000000',
              textDecorationLine: 'underline'
            }}>
            How it works.
          </Text>
        </Text>

        <Text
          style={{
            ...styles.textStyl,
            color: '#000000',
            textDecorationLine: 'underline',
            marginVertical: moderateScale(15)
          }}>
          Terms & Conditions apply
        </Text>

        <AppButton
          // onPress={() => NavigationService.navigate('Profile')}
          title='Share link'
          textStyle={{
            ...styles.textStyl,
            color: colors.secondaryFontColor,
            fontSize: moderateScale(17)
          }}
          style={styles.buttonStyl}
        />
      </ScrollView>
    </Container>
  )
}

export default ReferralLink

const styles = StyleSheet.create({
  imgStyl: {
    height: moderateScale(288),
    width: '100%'
  },
  heading: {
    fontFamily: FONTS.Poppins.medium,
    fontSize: moderateScale(20),
    marginVertical: moderateScale(10),
    width: '70%'
  },
  textStyl: {
    fontFamily: FONTS.Poppins.regular,
    fontSize: moderateScale(14),
  },
  buttonStyl: {
    // marginHorizontal: 0,
    marginVertical: moderateScale(40),
    borderRadius: moderateScale(6),
    height: moderateScale(45)
}
})