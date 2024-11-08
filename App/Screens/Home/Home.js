import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, Container, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import HomeHeader from '../../Components/Header/HomeHeader'
import OptionComponent from '../../Components/Home/OptionComponent'
import Hub from './Hub'
import Cash from './Cash'
import Card from './Card'
import Crypto from './Crypto'

const Home = () => {
    const colors = useTheme();
    const optionsArr = [
        { title: 'Hub' },
        { title: 'Cash' },
        { title: 'Card' },
        { title: 'Cryptocurrecies' },
    ]
    const [Index, setIndex] = useState(0)
    return (
        <Container>
            <HomeHeader />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ marginHorizontal: moderateScale(15) }}>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginVertical: moderateScale(20),
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                    {optionsArr.map((item, index) => (
                        <OptionComponent
                            key={index}
                            item={item}
                            index={index}
                            Index={Index}
                            setIndex={setIndex}
                        />
                    ))}
                </ScrollView>

                <View style={styles.componentContainer}>
                    {Index === 0 && <Hub />}
                    {Index === 1 && <Cash />}
                    {Index === 2 && <Card />}
                    {Index === 3 && <Crypto />}
                </View>

            </ScrollView>
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({
    componentContainer: {
        marginTop: moderateScale(8),
    },
})