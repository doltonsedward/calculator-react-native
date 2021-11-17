import React from "react"
import { View, Button } from "react-native"

const Btn = ({ text, ...rest }) => {
    return (
        <View>
            <Button title={text} {...rest} />
        </View>
    )
}

export default Btn
