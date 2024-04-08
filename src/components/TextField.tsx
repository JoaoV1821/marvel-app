import React from 'react'
import { View, Text, TextInput} from 'react-native'

const TextField = ({label, placeholder, onChangeText, error, ...input}): React.JSX.Element => {
  return (
    <View>
        <Text>{label}</Text>
        <TextInput placeholder={placeholder} onChangeText={onChangeText} style={input.style} keyboardType={input.keyboardType} autoComplete={input.autoComplete}  secureTextEntry={input.secureTextEntry} underlineColorAndroid="transparent"/>
        {!!error && <Text style={{color: 'red'}}>{error.message}</Text>}
    </View>
  )
}



export default TextField