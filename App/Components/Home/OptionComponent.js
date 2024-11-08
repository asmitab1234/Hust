import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { Text } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'

const OptionComponent = ({ item, index, Index, setIndex }) => {
    return (
        <>
            <Pressable
                onPress={() => setIndex(index)}
                style={{
                    ...styles.box,
                    borderWidth: Index == index ? moderateScale(1) : 0
                }}>
                <Text
                    style={styles.textStyl}>
                    {item.title}
                </Text>
            </Pressable>
        </>
    )
}

export default OptionComponent

const styles = StyleSheet.create({
    box: {
        elevation: 3,
        paddingVertical: moderateScale(8),
        paddingHorizontal: moderateScale(15),
        backgroundColor: '#fff',
        borderRadius: moderateScale(5),
        marginHorizontal: moderateScale(10)

    },
    textStyl: {
        fontFamily: FONTS.Poppins.regular,
        fontSize: moderateScale(13)
    }
})