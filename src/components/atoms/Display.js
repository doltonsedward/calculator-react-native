import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Display = ({ inputValue, result }) => {
    return (
        <View style={styles.container}>
            <Text style={[{marginBottom: 10}, styles.textStyle]}>{!inputValue ? 0 : inputValue}</Text>
            <Text style={[styles.resultStyle, styles.textStyle]}>= {result}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 15
    },
    textStyle: {
        color: '#40514E',
    },
    resultStyle: {
        fontSize: 40
    }
})

export default Display
