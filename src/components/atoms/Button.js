import React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

const Btn = ({ text, bgColor, ...rest }) => {
    return (
        <View>
            <TouchableOpacity {...rest}>
                <View style={[styles.button, { backgroundColor: !bgColor ? 'white' : bgColor }]}>
                    <Text style={{ color: bgColor ? 'white' : '#393E46' }}>{text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const responsiveSizeBtn = 60

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#393E46',
        justifyContent: 'center',
        alignItems: 'center',
        width: responsiveSizeBtn,
        height: responsiveSizeBtn,
        margin: 5,
        borderRadius: 5,

    }
})

export default Btn
