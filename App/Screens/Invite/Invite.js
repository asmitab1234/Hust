import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import HomeHeader from '../../Components/Header/HomeHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import TopTab from '../../Navigation/TopTab'

const Invite = () => {
  return (
    <Container>
      <HomeHeader />
        <TopTab />
    </Container>
  )
}

export default Invite

const styles = StyleSheet.create({})