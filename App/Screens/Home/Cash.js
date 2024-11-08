import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import RecipentsComponent from '../../Components/Home/RecipentsComponent'
import QuickComponent from '../../Components/Home/QuickComponent'
import { PieChart } from 'react-native-gifted-charts'
import CashComponent from '../../Components/Home/CashComponent'
import TransactionComponenet from '../../Components/Home/TransactionComponenet'

const Cash = () => {
  const colors = useTheme()

  const quickArr = [
    {
      img: require('../../Assets/home/addmoney.png'),
      title: 'Add Money',
      handelClick: 'AddMoney',
    },
    {
      img: require('../../Assets/home/trade.png'),
      title: 'Trade',
      handelClick: 'Trade',
    },
    {
      img: require('../../Assets/home/withdraw.png'),
      title: 'WithDraw',
      handelClick: 'WithdrawMoney',
    },
    {
      img: require('../../Assets/home/statement.png'),
      title: 'Statement',
      handelClick: '',
    },
  ]

  const cashAccountArr = [
    {
      img: require('../../Assets/home/flag.png'),
      country: 'United states Dollar',
      type: 'USD- $',
      cash: '$0'
    },
    {
      img: require('../../Assets/home/flag.png'),
      country: 'United states Dollar',
      type: 'USD- $',
      cash: '$0'
    },
    {
      img: require('../../Assets/home/flag.png'),
      country: 'United states Dollar',
      type: 'USD- $',
      cash: '$0'
    },
  ];

  const tranctionArr = [
    {
      title: 'Receive',
      date: 'Aug 13 2024 14:42',
      cash: '$345'
    },
    {
      title: 'Receive',
      date: 'Aug 13 2024 14:42',
      cash: '$345'
    },
    {
      title: 'Receive',
      date: 'Aug 13 2024 14:42',
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
            TOTAL Cash  BALANCE
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
          $980
        </Text>
        <TouchableOpacity
          style={styles.standardbutton}>
          <Text
            style={{
              ...styles.balanceText,
              color: colors.secondaryFontColor
            }}>
            Standard
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          ...styles.balanceText,
          fontSize: moderateScale(18),
          marginVertical: moderateScale(10)
        }}>
        Quick Actions
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 10
        }}>
        {quickArr.map((item, index) => (
          <QuickComponent
            key={index}
            item={item}
          />
        ))}
      </View>

      <View
        style={{
          ...styles.balanceCard,
          marginVertical: moderateScale(10)
        }}>
        <Text
          style={{
            ...styles.balanceText,
            color: '#120438'
          }}>
          Cash Accounts
        </Text>
        {cashAccountArr.map((item, index) => (
          <CashComponent
            key={index}
            item={item}
          />
        ))}
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
            Cash Transaction
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...styles.balanceText,
                fontSize: moderateScale(12),
                color: colors.buttonColor
              }}>
              View All
            </Text>
            <Icon
              name='chevron-small-right'
              type='Entypo'
              style={{ marginLeft: moderateScale(5) }}
            />
          </View>
        </View>
        {tranctionArr.map((item, index) => (
          <TransactionComponenet
            key={index}
            item={item}
          />
        ))}
      </View>

    </View>
  )
}

export default Cash

const styles = StyleSheet.create({
  balanceCard: {
    backgroundColor: '#FFFFFF',
    padding: moderateScale(10),
    elevation: 3,
    // marginVertical:moderateScale(8),
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
  }
})