import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import Display from '../atoms/Display';
import Btn from '../atoms/Button';

const Calculator = () => {
    const [inputValue, setInputValue] = useState('')
    const [result, setResult] = useState(0)

    const handler = {
        select: (val) => {
            setInputValue(inputValue ? `${inputValue} ${val}` : val)
        },
        operator: (operator) => {
            if (inputValue.length < 1) return
            
            setInputValue(inputValue ? `${inputValue} ${operator}` : operator)
        },
        result: () => setResult(eval(inputValue)),
        clear: () => setInputValue('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{color: 'white', marginBottom: 11}}>Display</Text>
                <Display inputValue={inputValue} result={result} />
            </View>
            <View style={styles.wrapperButton}>
                <Btn text="7" onPress={()=> handler.select('7')} />
                <Btn text="8" onPress={()=> handler.select('8')} />
                <Btn text="9" onPress={()=> handler.select('9')} />
                <Btn text="*" bgColor="#FF7878" onPress={()=> handler.operator('*')} />
                <Btn text="4" onPress={()=> handler.select('4')} />
                <Btn text="5" onPress={()=> handler.select('5')} />
                <Btn text="6" onPress={()=> handler.select('6')} />
                <Btn text="/" bgColor="#FF7878" onPress={()=> handler.operator('/')} />
                <Btn text="1" onPress={()=> handler.select('1')} />
                <Btn text="2" onPress={()=> handler.select('2')} />
                <Btn text="3" onPress={()=> handler.select('3')} />
                <Btn text="+" bgColor="#FF7878" onPress={()=> handler.operator('+')} />
                <Btn text="C" onPress={handler.clear} />
                <Btn text="0" onPress={()=> handler.select('0')} />
                <Btn text="=" bgColor="#FF7878" onPress={handler.result} />
                <Btn text="-" bgColor="#FF7878" onPress={()=> handler.operator('-')} />
            </View>
        </View>
    )
}

const responsiveSizeWrapper = 24

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 29
    },
    header: {
        flex: 1,
        padding: 20,
        marginTop: 20
    },
    wrapperButton: {
        flex: 2,
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopEndRadius: responsiveSizeWrapper,
        borderTopStartRadius: responsiveSizeWrapper
    }
})

export default Calculator
