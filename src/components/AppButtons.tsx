import React from "react";
import { StyleSheet, Text, TouchableHighlight} from "react-native";

export const AppButton = (props: any) => {
    return (
        <TouchableHighlight style={style.button} onPress={props.onPress} >
           <Text style={style.text}>{props.title}</Text>
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

    text: {

        fontStyle: 'normal',
        fontSize: 25,
        color: '#FFFFFF', 
        textAlign: 'center',
        paddingTop: 12,
        lineHeight: 24,
    },

    smallButton : {
        textAlign: 'center',
        backgroundColor: '#094275',
        borderRadius: 20,
        width: 125,
        height: 25,
        marginLeft: 10
    },

    smallText : {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        paddingTop: 2
    }
});

