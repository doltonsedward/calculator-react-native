import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import Display from '../atoms/Display';
import Btn from '../atoms/Button';

const Calculator = () => {
    const widthResponsive = styles.container.width - 10
    const [inputValue, setInputValue] = useState('')
    const [result, setResult] = useState(0)

    const handler = {
        select: (val) => {
            setInputValue(inputValue ? inputValue + val : val)
        },
        operator: (operator) => {
            if (inputValue.includes('+') || inputValue.includes('-') || inputValue.includes('/') || inputValue.includes('x')) {
                const newData = [...inputValue]
                console.log(newData.join(''))
                // return
                newData.join('').replace('+', '-')
                setInputValue(newData)
                return 
            } else if (inputValue.length < 1) {
                return setInputValue(inputValue)
            }

            setInputValue(inputValue ? inputValue + ' + ' : ' + ')
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Display wResponsive={widthResponsive} inputValue={inputValue} result={result} />
            </View>
            <View style={styles.wrapperButton}>
                <Btn text="1" onPress={()=> handler.select('1')} />
                <Btn text="2" onPress={()=> handler.select('2')} />
                <Btn text="3" onPress={()=> handler.select('3')} />
                <Btn text="4" onPress={()=> handler.select('4')} />
                <Btn text="5" onPress={()=> handler.select('5')} />
                <Btn text="6" onPress={()=> handler.select('6')} />
                <Btn text="7" onPress={()=> handler.select('7')} />
                <Btn text="8" onPress={()=> handler.select('8')} />
                <Btn text="9" onPress={()=> handler.select('9')} />
                <Btn text="+" onPress={()=> handler.operator('+')} />
                <Btn text="-" onPress={()=> handler.operator('-')} />
                <Btn text="=" onPress={()=> setResult()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        padding: 20,
    },
    wrapperButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Calculator
