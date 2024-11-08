import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { AppButton, Icon, Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import RecipentsComponent from '../../Components/Home/RecipentsComponent'
import QuickComponent from '../../Components/Home/QuickComponent'
import { PieChart } from 'react-native-gifted-charts'
import CashComponent from '../../Components/Home/CashComponent'
import TransactionComponenet from '../../Components/Home/TransactionComponenet'
import CardTransactionComponent from '../../Components/Home/CardTransactionComponent'

const Card = () => {
  const colors = useTheme()

  const quickArr = [
    {
      img: require('../../Assets/home/addmoney.png'),
      title: 'Add Money'
    },
    {
      img: require('../../Assets/home/trade.png'),
      title: 'Trade'
    },
    {
      img: require('../../Assets/home/withdraw.png'),
      title: 'WithDraw'
    },
    {
      img: require('../../Assets/home/statement.png'),
      title: 'Statement'
    },
  ]

  const tranctionArr = [
    {
      img: require('../../Assets/home/cardbag.png'),
      title: 'All Convoy/75 Avenue De',
      cash: '$345'
    },
    {
      img: require('../../Assets/home/cardbag.png'),
      title: 'All Convoy/75 Avenue De',
      cash: '$345'
    },
    {
      img: require('../../Assets/home/cardbag.png'),
      title: 'All Convoy/75 Avenue De',
      cash: '$345'
    },

  ];

  return (
    <View>
      <View
        style={styles.balanceCard}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <Text
            style={styles.balanceText}>
            Card Balance
          </Text>
          <View
            style={styles.flagBox}>
            <Image
              source={require('../../Assets/home/flag.png')}
              style={styles.flagStyl}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
              <Text
                style={styles.balanceText}>
                USA
              </Text>
              <Icon
                name='chevron-small-down'
                type='Entypo'
                style={{ marginHorizontal: moderateScale(4) }}
              />
            </View>
          </View>
        </View>
        <Text
          style={{
            ...styles.balanceText,
            fontSize: moderateScale(20)
          }}>
          $0
        </Text>
        {/* <TouchableOpacity
          style={styles.standardbutton}>
          <Text
            style={{
              ...styles.balanceText,
              color: colors.secondaryFontColor
            }}>
            Standard
          </Text>
        </TouchableOpacity> */}
      </View>

      <View
        style={{
          ...styles.balanceCard,
          marginVertical: moderateScale(10),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../Assets/home/coin.png')}
            style={styles.imageStyl}
          />
          <View>
            <Text
              style={styles.balanceText}>
              Cashback
            </Text>
            <Text
              style={{
                ...styles.balanceText,
                fontSize: moderateScale(12),
                color: '#797C7B',
                width: '70%'
              }}>
              Earn cashback every time you spend
              with the Tap Card
            </Text>
          </View>
        </View>
        <AppButton
          title='Check balance'
          style={{
            marginVertical: moderateScale(10),
            height: moderateScale(45)
          }}
          textStyle={{
            ...styles.balanceText,
            color: colors.secondaryFontColor
          }}
        />
      </View>

      <View
        style={{
          ...styles.balanceCard,
          marginVertical: moderateScale(10)
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <Text
            style={{
              ...styles.balanceText,
              color: '#120438'
            }}>
            Card Transaction
          </Text>

          <Text
            style={{
              ...styles.balanceText,
              fontSize: moderateScale(12),
              color: colors.buttonColor
            }}>
            View All
          </Text>

        </View>
        {tranctionArr.map((item, index) => (
          <CardTransactionComponent
            key={index}
            item={item}
          />
        ))}
      </View>

    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  balanceCard: {
    backgroundColor: '#FFFFFF',
    padding: moderateScale(10),
    elevation: 3,
    marginBottom: moderateScale(8),
    borderRadius: moderateScale(10)
  },
  balanceText: {
    fontFamily: FONTS.Poppins.regular,
    fontSize: moderateScale(14)
  },
  flagBox: {
    height: moderateScale(32),
    width: moderateScale(99),
    borderWidth: moderateScale(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: moderateScale(30)
  },
  flagStyl: {
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(30)
  },
  standardbutton: {
    height: moderateScale(38),
    width: moderateScale(119),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#63BEA5',
    borderRadius: moderateScale(5),
    marginTop: moderateScale(10)
  },
  imageStyl: {
    height: moderateScale(50),
    width: moderateScale(50),
    marginRight: moderateScale(10)
  }
})