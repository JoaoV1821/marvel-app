import React from 'react'
import { View, Text, TextInput} from 'react-native'

const TextField = ({label, placeholder, onChangeText, error, ...input}): React.JSX.Element => {
  return (
    <View>
        <Text style={{color: 'white'}}>{label}</Text>
        <TextInput placeholder={placeholder} onChangeText={onChangeText} style={input.style} keyboardType={input.keyboardType} autoComplete={input.autoComplete}  secureTextEntry={input.secureTextEntry} underlineColorAndroid="transparent" placeholderTextColor={input.placeholderTextColor} value={input.value} onFocus={input.onFocus} />
        {!!error && <Text style={{color: 'red'}}>{error.message}</Text>}
    </View>
  )
}



export default TextField