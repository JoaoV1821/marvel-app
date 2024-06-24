import React from "react";
import { StyleSheet, Text, TouchableHighlight, View} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'


export const SearchButton = (props: any) => {
    return (
        <TouchableHighlight style={{
            width: 45,
            height: 40,
            backgroundColor: '#D6000A',
            borderRadius: 20,
            alignItems:"center",
            justifyContent: "center",
            marginLeft: props.marginLeft ? props.marginLeft : 0,
            marginTop: props.marginTop ?  props.marginTop : 0,
            top: props.top ? props.top: 10,
        }} onPress={props.onPress}>
            <View>
                <Ionicons name={props.iconName} size={25} color="#FFFFFF" />
            </View>
        </TouchableHighlight>
    )
}

export const SmallButton = (props: any) => {
    return (
        <TouchableHighlight style={style.smallButton} onPress={props.onPress} >
            <Text style={style.smallText}>{props.title}</Text>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    button : {
        textAlign: 'center',
        width: 255,
        height: 50,
        backgroundColor: '#D6000A',
        borderRadius: 20,
    },

    smallButton : {
        textAlign: 'center',
        backgroundColor: '#094275',
        borderRadius: 20,
        width: 125,
        height: 25,
    },

    smallText : {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        paddingTop: 2
    }
});

