import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import RecipentsComponent from '../../Components/Home/RecipentsComponent'
import QuickComponent from '../../Components/Home/QuickComponent'
import { PieChart } from 'react-native-gifted-charts'

const Hub = () => {
  const colors = useTheme()
  const RecipientsArr = [
    {
      img: require('../../Assets/home/profile.png'),
      name: 'James'
    },
    {
      img: require('../../Assets/home/profile.png'),
      name: 'James'
    },
    {
      img: require('../../Assets/home/profile.png'),
      name: 'James'
    },
    {
      img: require('../../Assets/home/profile.png'),
      name: 'James'
    },
    {
      img: require('../../Assets/home/profile.png'),
      name: 'James'
    },
  ]

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

  const pieData = [
    { value: 22, color: '#361FC1', text: '22%' },
    { value: 11, color: '#9384EE', text: '11%' },
    { value: 67, color: '#664FF1', text: '67%' },
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
            Balance
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
        Recipients
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {RecipientsArr.map((item, index) => (
          <RecipentsComponent
            key={index}
            item={item}
          />
        ))}
      </ScrollView>

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

      <Text
        style={{
          ...styles.balanceText,
          fontSize: moderateScale(18),
          marginVertical: moderateScale(10)
        }}>
        Wealth Breakdown
      </Text>

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          marginBottom: moderateScale(15)
        }}>
        <PieChart
          showText
          textColor="#fff"
          radius={80}
          textSize={12}
          data={pieData}
        />
        <View
          style={{
            marginLeft: moderateScale(10)
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <View
              style={{
                height: moderateScale(15),
                width: moderateScale(15),
                marginRight: moderateScale(5),
                backgroundColor: '#664FF1'
              }}
            />
            <Text
              style={styles.balanceText}>
              Cash
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <View
              style={{
                height: moderateScale(15),
                width: moderateScale(15),
                marginRight: moderateScale(5),
                backgroundColor: '#9384EE'
              }}
            />
            <Text
              style={styles.balanceText}>
              Card
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <View
              style={{
                height: moderateScale(15),
                width: moderateScale(15),
                marginRight: moderateScale(5),
                backgroundColor: '#361FC1'
              }}
            />
            <Text
              style={styles.balanceText}>
              Crypto
            </Text>
          </View>
        </View>

      </View>

    </View>
  )
}

export default Hub

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