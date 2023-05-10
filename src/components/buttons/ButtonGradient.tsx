import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../utils/constants';
import LinearGradient from 'react-native-linear-gradient';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Bounceable } from 'rn-bounceable';

interface ButtonGradientProps {
    actionText: string;
    onPress: () => void;
    gradient?: string[];
    icon?: any;
    fontColor?: string;
}
// activeOpacity={.9} 
const ButtonGradient = (props: ButtonGradientProps) => {
    return (
        <Bounceable activeScale={.98} onPress={props.onPress.bind(null)} contentContainerStyle={styles(props).container}>
            <LinearGradient colors={props.gradient ? props.gradient : [...theme.colors.gradientOrange]} style={styles(props).linearGradient}>
                {props.icon && props.icon()}
                <Text style={styles(props).buttonText}>
                    {props.actionText}
                </Text>
            </LinearGradient>
        </Bounceable>
    );
};

export default ButtonGradient;


export const styles = (props: any) => StyleSheet.create({
    container: { width: "100%" },
    linearGradient: {
        width: "90%",
        height: 55,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5,
        flexDirection: "row",
        alignSelf: "center"
    },
    buttonText: {
        color: props.fontColor ? props.fontColor : theme.colors.black,
        fontFamily: theme.fontHeadings.semibold,
        fontSize: moderateScale(15),
    },
});