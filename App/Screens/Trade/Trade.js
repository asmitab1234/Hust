import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppButton, Container, Icon, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const Trade = () => {
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
      <BackHeader title='Trade' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}>
        <Text
          style={styles.textStyl}>
          Select Which Currency You Would like to Trade
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: moderateScale(15)
          }}>

          <Text
            style={{
              ...styles.textStyl,
              fontSize: moderateScale(15),
            }}>
            You send
          </Text>

          <Text
            style={{
              ...styles.textStyl,
              fontSize: moderateScale(13),
              color: '#797C7B'
            }}>
            Balance: 902.04
          </Text>
        </View>

        <Pressable
          onPress={() => NavigationService.navigate('SelectSource')}
          style={{
            ...styles.balanceCard,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
          <Text
            style={styles.textStyl}>
            Select Source
          </Text>

          <Icon
            name='chevron-small-down'
            type='Entypo'
          />
        </Pressable>

        <Pressable
          onPress={() => NavigationService.navigate('SelectDistance')}
          style={{
            ...styles.balanceCard,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
          <Text
            style={{
              ...styles.textStyl,
              color: '#868686'
            }}>
            500
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <Image
              source={require('../../Assets/home/flag.png')}
              style={styles.iconStyl}
            />
            <Text
              style={{
                ...styles.textStyl,
                marginHorizontal: moderateScale(15)
              }}>
              EUR
            </Text>
            <Icon
              name='chevron-small-down'
              type='Entypo'
            />
          </View>
        </Pressable>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: moderateScale(15)
          }}>

          <Text
            style={{
              ...styles.textStyl,
              fontSize: moderateScale(15),
            }}>
            You receive
          </Text>

          <Text
            style={{
              ...styles.textStyl,
              fontSize: moderateScale(13),
              color: '#797C7B'
            }}>
            Balance: 0
          </Text>

        </View>

        <Pressable
          onPress={() => NavigationService.navigate('SelectDistance')}
          style={{
            ...styles.balanceCard,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
          <Text
            style={styles.textStyl}>
            Select Destination
          </Text>

          <Icon
            name='chevron-small-down'
            type='Entypo'
          />
        </Pressable>

        <Pressable
          onPress={() => NavigationService.navigate('SelectDistance')}
          style={{
            ...styles.balanceCard,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
          <Text
            style={{
              ...styles.textStyl,
              color: '#868686'
            }}>
            0.00925602
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <Image
              source={require('../../Assets/home/hust.png')}
              style={styles.iconStyl}
            />
            <Text
              style={{
                ...styles.textStyl,
                marginHorizontal: moderateScale(15)
              }}>
              BTC
            </Text>
            <Icon
              name='chevron-small-down'
              type='Entypo'
            />
          </View>
        </Pressable>

        <View
          style={styles.balanceCard}>
          {termsArr.map((item, index) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: moderateScale(10)
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

        <AppButton
          title='Execute Trade'
          style={styles.buttonStyl}
          textStyle={{
            ...styles.textStyl,
            color: colors.secondaryFontColor,
            fontSize: moderateScale(16)
          }}
        />

      </ScrollView>
    </Container>
  )
}

export default Trade

const styles = StyleSheet.create({
  balanceCard: {
    backgroundColor: '#FFFFFF',
    padding: moderateScale(10),
    elevation: 3,
    // marginVertical:moderateScale(8),
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(8)
  },
  textStyl: {
    fontFamily: FONTS.Poppins.regular,
    fontSize: moderateScale(13),
  },
  buttonStyl: {
    height: moderateScale(45),
    marginVertical: moderateScale(30),
    marginHorizontal: 0
  },
  iconStyl: {
    height: moderateScale(24),
    width: moderateScale(24),
    borderRadius: moderateScale(24)
  }
})