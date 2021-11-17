import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Display = ({ inputValue, result }) => {
    return (
        <View style={styles.container}>
            <Text style={{marginBottom: 10}}>{!inputValue ? 0 : inputValue}</Text>
            <Text style={styles.resultStyle}>= {result}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#FFA0A0',
        height: 100,
        borderRadius: 5,
        padding: 10,
        marginBottom: 15
    },
    resultStyle: {
        fontSize: 20
    }
})

export default Display
